import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import {toolDefinitions, toolHandlers} from './tools';
import {ChatResponse, Message, ToolCall} from 'ollama';
import {ModelTarget, ModelTask, OllamaTagsResponse} from './types/model-definitions';
import {GENERAL_ASSISTANT_PROMPT, MAX_MODEL_ITERATIONS} from './utils/app-constants';

require('dotenv').config()

/**
 * model → tool request → execution → result → model cycle is
 * the core of a tool-using agent.
 */

const WINDOWS_OLLAMA_URL = process.env.WINDOWS_OLLAMA_URL;
const MAC_OLLAMA_URL = process.env.MAC_OLLAMA_URL;
const WINDOWS_QWEN_MODEL = process.env.WINDOWS_QWEN_MODEL;
const MAC_GEMMA_MODEL = process.env.MAC_GEMMA_MODEL;
const OLLAMA_CHAT_ENDPOINT = process.env.OLLAMA_CHAT_ENDPOINT;
const OLLAMA_TAGS_ENDPOINT = process.env.OLLAMA_TAGS_ENDPOINT;

if (
  !WINDOWS_OLLAMA_URL ||
  !MAC_OLLAMA_URL ||
  !OLLAMA_CHAT_ENDPOINT ||
  !OLLAMA_TAGS_ENDPOINT ||
  !WINDOWS_QWEN_MODEL ||
  !MAC_GEMMA_MODEL
) {
  throw new Error('Missing environment variables');
}

const macModel: ModelTarget = {
  name: 'mac',
  baseUrl: MAC_OLLAMA_URL,
  model: MAC_GEMMA_MODEL,
  tagsEndpoint: OLLAMA_TAGS_ENDPOINT,
  chatEndpoint: OLLAMA_CHAT_ENDPOINT,
};

const windowsModel: ModelTarget = {
  name: 'windows',
  baseUrl: WINDOWS_OLLAMA_URL,
  model: WINDOWS_QWEN_MODEL,
  tagsEndpoint: OLLAMA_TAGS_ENDPOINT,
  chatEndpoint: OLLAMA_CHAT_ENDPOINT,
};

async function isModelAvailable(target: ModelTarget): Promise<boolean> {
  try {
    const response = await fetch(`${target.baseUrl}/${target.tagsEndpoint}`);
    if (!response.ok) {
      return false;
    }
    const data: OllamaTagsResponse = await response.json();
    return data.models.some(model => model.name === target.model);
  } catch {
    return false;
  }
}

/**
 * Selects the model to use based on the task type,
 * falling back to the Mac model if the preferred model is unavailable.
 */
async function resolveModel(task: ModelTask): Promise<ModelTarget> {
  const preferredModel = selectModel(task);
  if (await isModelAvailable(preferredModel)) {
    console.log(`Preferred model available: ${preferredModel.name}`);
    return preferredModel;
  }

  // Mac is our fallback for requests preferred on Windows.
  if (preferredModel.name !== macModel.name && await isModelAvailable(macModel)) {
    console.log('Preferred model unavailable. Falling back to Mac.');
    return macModel;
  }

  throw new Error(
    `Neither the preferred model (${preferredModel.name}) nor the Mac fallback is available.`
  );
}

function selectModel(task: ModelTask): ModelTarget {
  switch (task) {
    case 'code':
      return windowsModel;
    case 'general':
    default:
      return macModel;
  }
}

async function askModel(messages: Message[], targetModel: ModelTarget): Promise<ChatResponse> {
  const response = await fetch(`${targetModel.baseUrl}/${targetModel.chatEndpoint}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      model: targetModel.model,
      messages,
      tools: toolDefinitions,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Request to ${targetModel.name} model failed: ${response.status} ${response.statusText}`
    );
  }

  /**
   * Uncomment this to see the raw response from Ollama.
   */
  // const data: ChatResponse = await response.json();
  // console.dir(data, {depth: null});
  // return data;

  return response.json();
}

const codeKeyWords = ['code', 'typescript', 'javascript', 'function', 'debug', 'bug', 'programming', 'error', 'fix', 'bugfix',];
const regexPunctuationReplace = /[^\w\s]/g;

function determineTaskType(prompt: string): ModelTask {
  const words = prompt.toLowerCase().replace(regexPunctuationReplace, '').split(/\s+/);
  if (words.some(word => codeKeyWords.includes(word))) {
    return 'code';
  }
  return 'general';
}

async function chat(userInput: string, messages: Message[]): Promise<void> {
  messages.push({
    role: 'user',
    content: userInput,
  });
  try {
    const response = await runAgent(messages, determineTaskType(userInput));
    console.log(`\nAssistant: ${response}\n********END OF LINE, NERD********\n`);
    return;
  } catch (error) {
    console.error(`Agent run failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
  console.log('\nAssistant: Sorry, I couldn\'t answer that.');
}

async function runAgent(messages: Message[], task: ModelTask): Promise<string> {
  const model = await resolveModel(task);
  console.log(`Selected model target: ${model.name}`);
  for (let modelIteration = 0; modelIteration < MAX_MODEL_ITERATIONS; modelIteration++) {
    const data = await askModel(messages, model);
    const assistantMessage = data.message;
    messages.push(assistantMessage);

    const toolCalls = assistantMessage.tool_calls ?? [];

    if (toolCalls.length === 0) {
      return assistantMessage.content;
    }

    for (const call of toolCalls) {
      await processToolCall(call, messages);
    }
  }
  return 'Sorry, I couldn\'t complete the request within the iteration limit.';
}

async function processToolCall(call: ToolCall, messages: Message[]): Promise<void> {
  const name = call.function.name;
  const args = call.function.arguments;

  const handler = toolHandlers[name];
  if (!handler) {
    messages.push({
      role: 'tool',
      content: `Tool name: ${name} is not registered in the harness.  Unable to execute it.`,
      tool_name: name,
    })
  } else {
    try {
      const result = await handler(args);

      messages.push({
        role: 'tool',
        content: typeof result === 'string'
          ? result
          : JSON.stringify(result),
        tool_name: name,
      });
    } catch (error) {
      console.error(`Error executing tool ${name}:`, error);
      messages.push({
        role: 'tool',
        content: error instanceof Error
          ? error.message
          : 'Tool execution failed',
        tool_name: name,
      });
    }
  }
}

function createConversationMessages(prompt: string): Message[] {
  return [
    {
      role: 'system',
      content: prompt,
    }
  ]
}

async function main(): Promise<void> {
  const rl = readline.createInterface({input, output});

  console.log('Local AI chat. Type "exit" to quit.\n');
  const messages: Message[] = createConversationMessages(GENERAL_ASSISTANT_PROMPT)

  try {
    while (true) {
      const question = await rl.question('You: ');

      if (question.trim().toLowerCase() === 'exit') break;
      if (!question.trim()) continue;

      try {
        await chat(question, messages);
      } catch (error) {
        console.error('Request failed:', error);
      }
    }
  } catch (error) {
    console.error('Unknown Error:', error);
  } finally {
    rl.close();
  }
}

main().catch(console.error);

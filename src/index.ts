import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import {toolDefinitions, toolHandlers} from './tools';
import {ChatResponse, Message, ToolCall} from 'ollama';
import {ModelTarget, ModelTask} from './types/model-definitions';
import {GENERAL_ASSISTANT_PROMPT, MAX_MODEL_ITERATIONS} from './utils/app-constants';

require('dotenv').config()

/**
 * model → tool request → execution → result → model cycle is
 * the core of a tool-using agent.
 */

const OLLAMA_URL = process.env.OLLAMA_URL;
const OLLAMA_CHAT_ENDPOINT = process.env.OLLAMA_CHAT_ENDPOINT;
const QWEN_MODEL = process.env.QWEN_MODEL;

if (!OLLAMA_URL || !OLLAMA_CHAT_ENDPOINT || !QWEN_MODEL) {
  throw new Error('Missing environment variables');
}

const windowsModel: ModelTarget = {
  name: 'windows',
  url: `${OLLAMA_URL}/${OLLAMA_CHAT_ENDPOINT}`,
  model: QWEN_MODEL,
};

function selectModel(task: ModelTask = 'general'): ModelTarget {
  switch (task) {
    case 'general':
      return windowsModel;

    case 'code':
      return windowsModel;
  }
}

async function askModel(messages: Message[], targetModel: ModelTarget): Promise<ChatResponse> {
  const response = await fetch(targetModel.url, {
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
    throw new Error(`Ollama returned HTTP ${response.status}`);
  }

  /**
   * Uncomment this to see the raw response from Ollama.
   */
  // const data: ChatResponse = await response.json();
  // console.dir(data, {depth: null});
  // return data;

  return response.json();
}

async function chat(userInput: string, messages: Message[]): Promise<void> {
  messages.push({
    role: 'user',
    content: userInput,
  });
  try {
    const response = await runAgent(messages);
    console.log(`\nAssistant: ${response}`);
    return;
  } catch (error) {
    console.error(`Agent run failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
  console.log('\nAssistant: Sorry, I couldn\'t answer that.');
}

async function runAgent(messages: Message[]): Promise<string> {
  for (let modelIteration = 0; modelIteration < MAX_MODEL_ITERATIONS; modelIteration++) {
    const data = await askModel(messages, selectModel());
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

async function processToolCall(call: ToolCall, messages: Message[]):Promise<void> {
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

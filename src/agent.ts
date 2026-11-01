import {ModelTask, ModelTarget, OllamaTagsResponse} from "./types/model-definitions";
import {Message, ChatResponse, ToolCall} from "ollama";
import {primaryModel, supportModel} from "./config";
import {MAX_MODEL_ITERATIONS} from "./utils/app-constants";
import {toolDefinitions, toolHandlers} from "./tools";

/**
 * Selects the model to use based on the task type,
 * falling back to the primary model if the preferred model is unavailable.
 */
export async function resolveModel(task: ModelTask): Promise<ModelTarget> {
  const preferredModel = selectModel(task);
  if (await isModelAvailable(preferredModel)) {
    console.log(`Preferred model available: ${preferredModel.name}`);
    return preferredModel;
  }

  // Mac is our fallback for requests preferred on Windows.
  if (preferredModel.name !== primaryModel.name && await isModelAvailable(primaryModel)) {
    console.log('Preferred model unavailable. Falling back to Mac.');
    return primaryModel;
  }

  throw new Error(
    `Neither the preferred model (${preferredModel.name}) nor the Mac fallback is available.`
  );
}

export function selectModel(task: ModelTask): ModelTarget {
  switch (task) {
    case 'code':
      return supportModel;
    case 'general':
    default:
      return primaryModel;
  }
}

export async function askModel(messages: Message[], targetModel: ModelTarget): Promise<ChatResponse> {
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


export async function isModelAvailable(target: ModelTarget): Promise<boolean> {
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

export async function runAgent(messages: Message[], task: ModelTask): Promise<string> {
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

export async function processToolCall(call: ToolCall, messages: Message[]): Promise<void> {
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

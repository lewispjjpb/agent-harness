import {ModelTask} from "./types/model-definitions";
import {Message, ToolCall} from "ollama";
import {resolveModel} from "./models/model-router";
import {MAX_MODEL_ITERATIONS} from "./utils/app-constants";
import {toolHandlers} from "./tools";
import {askModel} from "./models/ollama-client";


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

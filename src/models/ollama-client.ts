import {ModelTarget, OllamaTagsResponse} from "../types/model-definitions";
import {ChatResponse, Message} from "ollama";
import {toolDefinitions} from "../tools";


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
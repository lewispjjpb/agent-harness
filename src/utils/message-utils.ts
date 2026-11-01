import {Message} from "ollama";
import {ModelTask} from "../types/model-definitions";
import {codeKeyWords, regexPunctuationReplace} from "./app-constants";


export function createConversationMessages(prompt: string): Message[] {
  return [
    {
      role: 'system',
      content: prompt,
    }
  ]
}

export function determineTaskType(prompt: string): ModelTask {
  const words = prompt.toLowerCase().replace(regexPunctuationReplace, '').split(/\s+/);
  if (words.some(word => codeKeyWords.includes(word))) {
    return 'code';
  }
  return 'general';
}
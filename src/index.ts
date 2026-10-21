import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";
import {toolDefinitions, toolHandlers} from "./tools";
import {ChatResponse, Message, Tool} from 'ollama';

require('dotenv').config()

/**
 * model → tool request → execution → result → model cycle is
 * the core of a tool-using agent.
 */

const OLLAMA_URL = process.env.OLLAMA_URL;
const OLLAMA_CHAT_ENDPOINT = process.env.OLLAMA_CHAT_ENDPOINT;
const MODEL = process.env.MODEL;

if (!OLLAMA_URL || !OLLAMA_CHAT_ENDPOINT || !MODEL) {
  throw new Error("Missing required Ollama configuration in .env");
}

const systemMessage: Message = {
  role: "system",
  content: "You are a helpful assistant teaching me about AI engineering.  Use the tools object which contains many different tools (like)  to perform requests if needed.  Never use emojis in your responses.",
};

async function askModel(messages: Message[]): Promise<ChatResponse> {
  const response = await fetch(`${OLLAMA_URL}/${OLLAMA_CHAT_ENDPOINT}`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      model: MODEL,
      messages,
      tools: toolDefinitions,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama returned HTTP ${response.status}`);
  }

  return response.json();
}

async function chat(userInput: string, messages: Message[]): Promise<void> {
  messages.push({role: "user", content: userInput});
  for (let step = 0; step < 5; step++) {
    let data: ChatResponse;
    try {
      data = await askModel(messages);
    } catch (error) {
      messages.pop();
      throw new Error(`Ollama request failed: ${error}`);
    }
    const assistantMessage = data.message;

    messages.push(assistantMessage);
    const toolCalls = assistantMessage.tool_calls ?? [];

    if (toolCalls.length === 0) {
      console.log("\nAssistant:", assistantMessage.content);
      return;
    }

    for (const call of toolCalls) {
      const name = call.function.name;
      const args = call.function.arguments;

      const handler = toolHandlers[name];
      if (!handler) {
        throw new Error(`Tool not found: ${name}`);
      }

      console.log(`Executing tool: ${name} with args:`, args);
      const result = handler(args);

      messages.push({
        role: "tool",
        content: String(result),
        tool_name: name,
      });
    }
  }
  messages.push({
    role: "assistant",
    content: `Stopped: maximum tool-loop steps reached without success when user asked "${userInput}".`
  });
  console.log("\nAssistant: Sorry, I couldn't answer that.");
}

async function main(): Promise<void> {
  const rl = readline.createInterface({input, output});

  console.log("Local AI chat. Type 'exit' to quit.\n");
  const messages: Message[] = [
    systemMessage,
  ];

  try {
    while (true) {
      const question = await rl.question("You: ");

      if (question.trim().toLowerCase() === "exit") break;
      if (!question.trim()) continue;

      try {
        await chat(question, messages);
      } catch (error) {
        console.error("Request failed:", error);
      }
    }
  } catch (error) {
    console.error("Unknown Error:", error);
  } finally {
    rl.close();
  }
}

main().catch(console.error);

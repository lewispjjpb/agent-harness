import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";
import {multiply} from "./tools/math-tools";
import ollama, {ChatResponse, Message} from 'ollama';

const OLLAMA_URL = "http://192.168.1.159:11434";
const OLLAMA_CHAT_ENDPOINT = "api/chat"
const MODEL = "qwen3.5:9b";

const systemMessage: Message = {
  role: "system",
  content: "You are a helpful assistant teaching me about AI engineering.  Use the multiply tool to perform precise multiplication.",
};

const tools = [
  {
    type: "function",
    function: {
      name: "multiply",
      description: "Multiply two numbers. Use this for precise multiplication.",
      parameters: {
        type: "object",
        properties: {
          a: {type: "number", description: "First number"},
          b: {type: "number", description: "Second number"},
        },
        required: ["a", "b"],
      },
    },
  },
];

async function askModel(messages: Message[]): Promise<ChatResponse> {
  const response = await fetch(`${OLLAMA_URL}/${OLLAMA_CHAT_ENDPOINT}`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      model: MODEL,
      messages,
      tools,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama returned HTTP ${response.status}`);
  }

  return response.json();
}

async function chat(userInput: string): Promise<void> {
  const messages: Message[] = [
    systemMessage,
    {role: "user", content: userInput},
  ];

  for (let step = 0; step < 5; step++) {
    const data = await askModel(messages);
    const assistantMessage = data.message;

    // Preserve the assistant message, including any tool calls.
    messages.push(assistantMessage);

    const toolCalls = assistantMessage.tool_calls ?? [];

    if (toolCalls.length === 0) {
      console.log("\nAssistant:", assistantMessage.content);
      return;
    }

    // Execute each tool call requested by the model.
    for (const call of toolCalls) {
      const name = call.function.name;
      const args = call.function.arguments;

      console.log(`\nTool requested: ${name}`, args);

      if (name !== "multiply") {
        throw new Error(`Unknown tool: ${name}`);
      }

      if (
        typeof args.a !== "number" ||
        typeof args.b !== "number" ||
        !Number.isFinite(args.a) ||
        !Number.isFinite(args.b)
      ) {
        throw new Error("Invalid arguments for multiply");
      }

      const result = multiply(args.a, args.b);

      console.log("Tool result:", result);

      // Return the tool's result to the model.
      messages.push({
        role: "tool",
        content: String(result),
      });
    }
    console.log("Stopped: maximum tool-loop steps reached.");
  }
}

async function main(): Promise<void> {
  const rl = readline.createInterface({input, output});

  console.log("Local AI chat. Type 'exit' to quit.\n");

  try {
    while (true) {
      const question = await rl.question("You: ");

      if (question.trim().toLowerCase() === "exit") break;
      if (!question.trim()) continue;

      try {
        await chat(question);
        console.log();
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

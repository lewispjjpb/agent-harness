import type { Tool } from "ollama";
import { multiply } from "./math-tools";
import { getCurrentTime } from "./time-tools";

export const toolDefinitions: Tool[] = [
  {
    type: "function",
    function: {
      name: "multiply",
      description: "Multiply two numbers precisely.",
      parameters: {
        type: "object",
        properties: {
          a: { type: "number", description: "First number" },
          b: { type: "number", description: "Second number" },
        },
        required: ["a", "b"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "getCurrentTime",
      description: "Get the current time as a Unix timestamp.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
];

type ToolArgs = Record<string, unknown>;
type ToolHandler = (args: ToolArgs) => unknown;

export const toolHandlers: Record<string, ToolHandler> = {
  multiply: (args) => {
    if (
      typeof args.a !== "number" ||
      typeof args.b !== "number" ||
      !Number.isFinite(args.a) ||
      !Number.isFinite(args.b)
    ) {
      throw new Error("Invalid arguments for multiply");
    }

    return multiply(args.a, args.b);
  },

  getCurrentTime: () => getCurrentTime(),
};
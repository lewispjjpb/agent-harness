import type { Tool } from "ollama";
import { multiply } from "./math-tools";
import { getCurrentTime } from "./time-tools";
import {CurrentWeather, getWeather} from "./weather-tools";
import {WttrType} from "../types/wttr-response";

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
  {
    type: "function",
    function: {
      name: "getWeather",
      description: "Get the current weather in a given city.  Data is returned as a JSON object.",
      parameters: {
        type: "object",
        properties: {
          city: { type: "string", description: "City name" },
        },
        required: ["city"],
      }
    }
  }
];

type ToolArgs = Record<string, unknown>;
type ToolHandler = (args: ToolArgs) => unknown | Promise<unknown>;

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
  getWeather: async (args:ToolArgs) => {
    if (typeof args.city !== "string") {
      throw new Error("Invalid arguments for getWeather");
    }
    const weather:CurrentWeather =  await getWeather(args.city)
    return weather;
  },
};
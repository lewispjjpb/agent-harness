import {ModelTarget} from "../types/model-definitions";
import {primaryModel, supportModel} from "../config";
import {ModelTask} from "../types/model-definitions";
import {isModelAvailable} from "./ollama-client";

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



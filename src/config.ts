import {ModelTarget} from "./types/model-definitions";
require('dotenv').config()

/**
 * model → tool request → execution → result → model cycle is
 * the core of a tool-using agent.
 */

export const PRIMARY_MODEL_URL = process.env.PRIMARY_MODEL_URL;
export const SUPPORT_MODEL_URL = process.env.SUPPORT_MODEL_URL;
export const PRIMARY_MODEL = process.env.PRIMARY_MODEL;
export const SUPPORT_MODEL = process.env.SUPPORT_MODEL;
export const CHAT_ENDPOINT = process.env.CHAT_ENDPOINT;
export const TAGS_ENDPOINT = process.env.TAGS_ENDPOINT;

if (
  !PRIMARY_MODEL_URL
  // || !SUPPORT_MODEL_URL
  // || !SUPPORT_MODEL
  || !CHAT_ENDPOINT
  || !TAGS_ENDPOINT
  || !PRIMARY_MODEL
) {
  throw new Error('Missing environment variables');
}

export const primaryModel: ModelTarget = {
  name: 'mac',
  baseUrl: SUPPORT_MODEL_URL,
  model: SUPPORT_MODEL,
  tagsEndpoint: TAGS_ENDPOINT,
  chatEndpoint: CHAT_ENDPOINT,
};

export const supportModel: ModelTarget = {
  name: 'windows',
  baseUrl: PRIMARY_MODEL_URL,
  model: PRIMARY_MODEL,
  tagsEndpoint: TAGS_ENDPOINT,
  chatEndpoint: CHAT_ENDPOINT,
};
export type ModelTarget = {
  name: string;
  baseUrl: string;
  model: string;
  tagsEndpoint?: string;
  chatEndpoint?: string;
};

export type ModelTask = 'code' | 'general';

export type OllamaTagsResponse = {
  models: {
    name: string;
  }[];
};
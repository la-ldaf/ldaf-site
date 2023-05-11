import { env } from "$env/dynamic/private";
const { CONTENTFUL_DELIVERY_API_TOKEN, CONTENTFUL_PREVIEW_API_TOKEN, CONTENTFUL_SPACE_ID } = env;

import contentful, { type ContentfulClientApi } from "contentful";

const clientKeys = ["default", "preview"] as const;

const tokens: Record<(typeof clientKeys)[number], string> = {
  default: CONTENTFUL_DELIVERY_API_TOKEN,
  preview: CONTENTFUL_PREVIEW_API_TOKEN,
};

const clients: Record<(typeof clientKeys)[number], ContentfulClientApi<undefined> | undefined> = {
  default: undefined,
  preview: undefined,
};

export const getClient = ({ preview = false } = {}): ContentfulClientApi<undefined> | undefined => {
  const key = preview ? "preview" : "default";
  if (clients[key]) return clients[key];
  if (CONTENTFUL_SPACE_ID && tokens[key]) {
    clients[key] = contentful.createClient({
      host: preview ? "preview.contentful.com" : undefined,
      accessToken: tokens[key],
      space: CONTENTFUL_SPACE_ID,
    });
    return clients[key];
  }
};

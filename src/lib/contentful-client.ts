import contentful, { type ContentfulClientApi } from "contentful";
import { PUBLIC_CONTENTFUL_SPACE_ID } from "$env/static/public";

export const clientKeys = ["default", "preview"] as const;

const clients: Record<string, ContentfulClientApi<undefined>> = {};

export const getClient = ({
  token,
  preview = false,
  spaceID = PUBLIC_CONTENTFUL_SPACE_ID,
}: {
  token: string;
  preview?: boolean;
  spaceID?: string;
}): ContentfulClientApi<undefined> | undefined => {
  if (clients[token]) return clients[token];
  clients[token] = contentful.createClient({
    host: preview ? "preview.contentful.com" : undefined,
    accessToken: token,
    space: spaceID,
  });
  return clients[token];
};

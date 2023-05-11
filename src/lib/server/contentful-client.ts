// This file is a pre-configured version of ../contentful-client.ts that uses server-only environment variables

import type { ContentfulClientApi } from "contentful";
import { env } from "$env/dynamic/private";
const { CONTENTFUL_DELIVERY_API_TOKEN, CONTENTFUL_PREVIEW_API_TOKEN, CONTENTFUL_SPACE_ID } = env;
import { getClient as getClientWithToken, type clientKeys } from "../contentful-client";

const tokens: Record<(typeof clientKeys)[number], string> = {
  default: CONTENTFUL_DELIVERY_API_TOKEN,
  preview: CONTENTFUL_PREVIEW_API_TOKEN,
};

export const getClient = ({
  preview = false,
  token: tokenArg,
}: { preview?: boolean; token?: string } = {}): ContentfulClientApi<undefined> | undefined => {
  const token = tokenArg !== undefined ? tokenArg : preview ? tokens.preview : tokens.default;
  return getClientWithToken({ preview, token });
};

import type { Handle } from "@sveltejs/kit";
import { CONTENTFUL_DELIVERY_API_TOKEN, CONTENTFUL_SPACE_ID } from "$env/static/private";
import { sequence } from "@sveltejs/kit/hooks";
import getContentfulClient from "$lib/services/server/contentful";

import handleSetupKVClient from "./hooks/server/handleSetupKVClient";

const handleSetupContentfulClient = (async ({ event, resolve }) => {
  const { fetch } = event;
  event.locals.contentfulClient =
    CONTENTFUL_SPACE_ID && CONTENTFUL_DELIVERY_API_TOKEN
      ? getContentfulClient({
          spaceID: CONTENTFUL_SPACE_ID,
          token: CONTENTFUL_DELIVERY_API_TOKEN,
          fetch,
        })
      : undefined;
  return resolve(event);
}) satisfies Handle;

const handlePreload = (async ({ event, resolve }) => {
  const response = await resolve(event, {
    preload: ({ type, path }) =>
      type === "js" ||
      type === "css" ||
      (type === "font" && !!path.match(/sourcesanspro-regular-webfont.[0-9a-z]{8}.woff2$/)),
  });
  return response;
}) satisfies Handle;

export const handle = sequence(handleSetupKVClient, handleSetupContentfulClient, handlePreload);

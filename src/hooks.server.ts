import type { Handle } from "@sveltejs/kit";
import { CONTENTFUL_DELIVERY_API_TOKEN, CONTENTFUL_SPACE_ID, KV_URL } from "$env/static/private";
import { sequence } from "@sveltejs/kit/hooks";
import { getClient as getKVClient } from "$lib/services/server/kv";
import getContentfulClient from "$lib/services/server/contentful";

const handleSetupKVClient = (async ({ event, resolve }) => {
  // we intentionally don't await this promise here, so that other things can happen while redis is
  // initializing. Anything that needs redis can await the promise by calling
  // event.locals.getKVClient and awaiting the result. If nothing awaits the promise
  // then we never wait on redis connecting first.
  const kvClientPromise = KV_URL
    ? getKVClient({ url: KV_URL })
    : Promise.reject(new Error("could not get KV client; no KV_URL was specified"));
  event.locals.getKVClient = () => kvClientPromise;
  return resolve(event);
}) satisfies Handle;

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

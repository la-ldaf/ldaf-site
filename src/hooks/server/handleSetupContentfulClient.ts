import type { Handle } from "@sveltejs/kit";
import { CONTENTFUL_DELIVERY_API_TOKEN, CONTENTFUL_SPACE_ID } from "$env/static/private";
import getContentfulClient from "$lib/services/server/contentful";

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

export default handleSetupContentfulClient;

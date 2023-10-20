import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

import handleSetupKVClient from "./hooks/server/handleSetupKVClient";
import handleSetupContentfulClient from "./hooks/server/handleSetupContentfulClient";

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

import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
  const response = await resolve(event, {
    preload: ({ type, path }) =>
      type === "js" ||
      type === "css" ||
      (type === "font" && !!path.match(/sourcesanspro-regular-webfont.[0-9a-z]{8}.woff2$/)),
  });
  return response;
}) satisfies Handle;

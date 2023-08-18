import type { Handle } from "@sveltejs/kit";

const handlePreload = (async ({ event, resolve }) =>
  resolve(event, {
    preload: ({ type, path }) =>
      type === "js" ||
      type === "css" ||
      (type === "font" && !!path.match(/sourcesanspro-regular-webfont.[0-9a-z]{8}.woff2$/)),
  })) satisfies Handle;

export default handlePreload;

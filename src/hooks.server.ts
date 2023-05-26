import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_API_TOKEN,
  CONTENTFUL_PREVIEW_API_TOKEN,
} from "$env/static/private";
import { error, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const handlePreload = (async ({ event, resolve }) =>
  resolve(event, {
    preload: ({ type, path }) =>
      type === "js" ||
      type === "css" ||
      (type === "font" && !!path.match(/sourcesanspro-regular-webfont.[0-9a-z]{8}.woff2$/)),
  })) satisfies Handle;

const handleToken = (async ({ event, resolve }) => {
  const { fetch } = event;
  const preview = event.url.searchParams.has("preview");
  if (!preview) {
    event.locals.contentfulToken = CONTENTFUL_DELIVERY_API_TOKEN;
    event.locals.preview = false;
    return resolve(event);
  }
  const accessToken = event.cookies.get("ldafUserToken");
  if (!accessToken) throw error(401, { message: "You must log in to view preview content" });
  const response = await fetch(`https://api.contentful.com/spaces/${CONTENTFUL_SPACE_ID}`, {
    headers: {
      Authentication: `Bearer ${accessToken}`,
    },
  });
  if (response.status === 401) throw error(401, { message: "Failed to authenticate" });
  if (!response.ok) throw error(500, { message: "Error calling content service" });
  event.locals.contentfulToken = CONTENTFUL_PREVIEW_API_TOKEN;
  event.locals.preview = true;
  return resolve(event);
}) satisfies Handle;

export const handle = sequence(handlePreload, handleToken);

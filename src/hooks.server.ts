import {
  CONTENTFUL_MANAGEMENT_API_ENDPOINT,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_API_TOKEN,
  CONTENTFUL_PREVIEW_API_TOKEN,
} from "$env/static/private";
import type { Handle } from "@sveltejs/kit";
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

  const accessToken =
    event.cookies.get("ldafUserToken") ??
    event.request.headers.get("Authorization")?.match(/^Bearer ([^ ]+)$/)?.[1];

  if (!accessToken) {
    event.locals.previewAuthenticationError = {
      code: 401,
      message: "You must log in to view preview content",
    };
    return resolve(event);
  }

  const response = await fetch(
    `${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      headers: {
        Authentication: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.status === 401) {
    event.locals.previewAuthenticationError = { code: 401, message: "Failed to authenticate" };
    return resolve(event);
  }
  if (!response.ok) {
    event.locals.previewAuthenticationError = {
      code: 500,
      message: `${response.status} error calling content service`,
    };
    return resolve(event);
  }

  event.locals.contentfulToken = CONTENTFUL_PREVIEW_API_TOKEN;
  event.locals.preview = true;

  return resolve(event);
}) satisfies Handle;

export const handle = sequence(handlePreload, handleToken);

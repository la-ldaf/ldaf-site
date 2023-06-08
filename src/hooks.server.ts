import {
  CONTENTFUL_MANAGEMENT_API_ENDPOINT,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_API_TOKEN,
  CONTENTFUL_PREVIEW_API_TOKEN,
} from "$env/static/private";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import getContentfulClient from "$lib/services/contentful";

const handlePreload = (async ({ event, resolve }) =>
  resolve(event, {
    preload: ({ type, path }) =>
      type === "js" ||
      type === "css" ||
      (type === "font" && !!path.match(/sourcesanspro-regular-webfont.[0-9a-z]{8}.woff2$/)),
  })) satisfies Handle;

const handleToken = (async ({ event, resolve }) => {
  const { fetch } = event;

  const accessToken =
    event.cookies.get("ldafUserToken") ??
    event.request.headers.get("Authorization")?.match(/^Bearer ([^ ]+)$/)?.[1];

  getCurrentUser: if (accessToken) {
    const currentUserResponse = await fetch(`${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!currentUserResponse.ok) break getCurrentUser;
    const {
      email,
      firstName,
      lastName,
      avatarUrl,
    }: {
      email: string;
      firstName: string;
      lastName: string;
      avatarUrl: string;
    } = await currentUserResponse.json();
    event.locals.currentUser = { email, name: `${firstName} ${lastName}`, avatarURL: avatarUrl };
  }

  const preview = event.url.searchParams.has("preview");
  if (!preview) {
    event.locals.contentfulClient =
      CONTENTFUL_SPACE_ID && CONTENTFUL_DELIVERY_API_TOKEN
        ? getContentfulClient({
            spaceID: CONTENTFUL_SPACE_ID,
            token: CONTENTFUL_DELIVERY_API_TOKEN,
            preview: false,
            fetch,
          })
        : undefined;
    return resolve(event);
  }

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
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.status === 401) {
    event.locals.previewAuthenticationError = {
      code: 401,
      message: `Failed to authenticate\n${await response.text()}`,
    };
    return resolve(event);
  }
  if (!response.ok) {
    event.locals.previewAuthenticationError = {
      code: 500,
      message: `${response.status} error calling content service:\n${await response.text()}`,
    };
    return resolve(event);
  }

  event.locals.contentfulClient =
    CONTENTFUL_SPACE_ID && CONTENTFUL_PREVIEW_API_TOKEN
      ? getContentfulClient({
          spaceID: CONTENTFUL_SPACE_ID,
          token: CONTENTFUL_PREVIEW_API_TOKEN,
          preview: true,
          fetch,
        })
      : undefined;

  return resolve(event);
}) satisfies Handle;

const handleCSP = (async ({ event, resolve }) => {
  event.setHeaders({
    "Content-Security-Policy": "frame-ancestors 'self' https://app.contentful.com",
  });
  return resolve(event);
}) satisfies Handle;

export const handle = sequence(handlePreload, handleToken, handleCSP);

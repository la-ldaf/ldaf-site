import {
  CONTENTFUL_MANAGEMENT_API_ENDPOINT,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_API_TOKEN,
  CONTENTFUL_PREVIEW_API_TOKEN,
  KV_URL,
} from "$env/static/private";
import type { Handle, HandleServerError, MaybePromise, RequestEvent } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import getContentfulClient from "$lib/services/contentful";
import { createConnectedRedisClient } from "$lib/services/redis";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
import { newLogger } from "$lib/logger/private.server";
import getErrorMessage from "$lib/util/getErrorMessage";
import getErrorStatus from "$lib/util/getErrorStatus";
import consoleErrorIfYouCan from "$lib/util/consoleErrorIfYouCan";

export const handleError = (async ({ error, event }) => {
  const logger = event.locals.logger ?? newLogger();
  const message = getErrorMessage(error);
  const status = getErrorStatus(error);
  try {
    try {
      logger.setPublicContext("url", event.url.toString());
    } catch (_) {
      // do nothing
    }
    await logger.logError(error);
  } catch (err) {
    consoleErrorIfYouCan(`Error while trying to log unexpected error: ${message}`);
  }
  return {
    message: `Unexpected error: ${message}`,
    ...(status ? { status } : {}),
  };
}) satisfies HandleServerError;

export const handleSetupLogger = (async ({ event, resolve }) => {
  event.locals.logger = newLogger({ context: { PUBLIC: { url: event?.url?.toString() } } });
  return resolve(event);
}) satisfies Handle;

const handlePreload = (async ({ event, resolve }) =>
  resolve(event, {
    preload: ({ type, path }) =>
      type === "js" ||
      type === "css" ||
      (type === "font" && !!path.match(/sourcesanspro-regular-webfont.[0-9a-z]{8}.woff2$/)),
  })) satisfies Handle;

const handleSetupRedisClient = (async ({ event, resolve }) => {
  // we intentionally don't await this promise here, so that other things can happen while redis is
  // initializing. Anything that needs redis can await the promise by calling
  // event.locals.getConnectedRedisClient() and awaiting the result. If nothing awaits the promise
  // then we never wait on redis connecting first.
  const redisClientPromise = !KV_URL
    ? Promise.reject(new Error("could not get redis client"))
    : createConnectedRedisClient({ url: KV_URL, useTLS: !KV_URL.startsWith("redis://localhost") });

  // So we don't get unhandled promise rejection warnings if nothing awaits the promise
  redisClientPromise.catch((err) => event.locals.logger.logError(err));

  event.locals.getConnectedRedisClient = async () => {
    const client = await redisClientPromise;
    event.locals.logger.setContext("redisConnected", true);
    return client;
  };

  return resolve(event);
}) satisfies Handle;

const isLogin = (event: RequestEvent) => {
  const url = new URL(event.request.url);
  if (url.pathname === "/login") return true;
  return false;
};

const isLogout = (event: RequestEvent) => {
  const url = new URL(event.request.url);
  if (url.pathname === "/logout") return true;
  return false;
};

// We don't use SvelteKit's built-in error catching to catch preview authentication errors, because
// we want to control that UI and you can't throw errors from hooks or root layouts and still catch
// them within Svelte. This means that our responses will be 200 OK, even if there was a preview
// authentication error that's making the UI show a 401 Unauthorized. This function copies the response
// and sets the status explicitly, fixing this issue. This is probably inefficient, but this is only
// used to serve error pages which are quite small relative to normal pages.
const resolveWithStatus = async <T extends RequestEvent>(
  status: number,
  statusText: string,
  resolve: (event: T) => MaybePromise<Response>,
  event: T
) => {
  const response = await resolve(event);
  const wrappedResponse = new Response(response.body, {
    headers: response.headers,
    status,
    statusText,
  });
  return wrappedResponse;
};

// This function should _not_ throw an error! Instead, errors should be signaled to the front-end by
// setting event.locals.previewAuthenticationError. Throwing an error in a server hook leads to the
// generic plain-HTML error page, _not_ the root error layout in src/routes/+error.svelte.
//
// Exported for tests.
export const handleToken = (async ({ event, resolve }) => {
  const {
    fetch,
    locals: { logger },
  } = event;

  // We _always_ want to initialize the contentful client first thing because without it we will
  // load sample data for the navigation menu, which is shown on the error page
  event.locals.contentfulClient =
    CONTENTFUL_SPACE_ID && CONTENTFUL_DELIVERY_API_TOKEN
      ? getContentfulClient({
          spaceID: CONTENTFUL_SPACE_ID,
          token: CONTENTFUL_DELIVERY_API_TOKEN,
          preview: false,
          fetch,
        })
      : undefined;

  const { getConnectedRedisClient } = event.locals;

  const ldafUserToken =
    event.cookies.get("ldafUserToken") ??
    event.request.headers.get("Authorization")?.match(/^Bearer ([^ ]+)$/)?.[1];

  let managementAPIToken: string | undefined;

  // We _always_ want to _try_ to load the user if an access token is provided because there is UI
  // that depends on event.locals.currentUser
  setCurrentUser: if (ldafUserToken) {
    try {
      const redisClient = await getConnectedRedisClient();
      if (!redisClient) break setCurrentUser;
      const json = await redisClient.get(`ldafUserInfoByToken:${ldafUserToken}`);
      if (json === null) {
        event.cookies.delete("ldafUserToken");
        break setCurrentUser;
      }
      const parsed = JSON.parse(json);
      const { email, name, avatarURL } = parsed;
      ({ managementAPIToken } = parsed);
      event.locals.currentUser = { email, name, avatarURL };
      logger.setPublicContext("currentUser", event.locals.currentUser, {
        errorIfAlreadyDefined: true,
      });
    } catch (err) {
      logger.logError(err);
    }
  }

  // We don't want to try to authenticate using the current token if the request is trying to set a
  // new token or get rid of the current one.
  if (isLogin(event) || isLogout(event)) return resolve(event);

  const preview = event.url.searchParams.has("preview");
  if (!preview) return resolve(event);

  logger.setPublicContext("isPreview", true);

  const handleBadTokenAndGetMessage = async () => {
    if (event.locals.currentUser) event.locals.currentUser = undefined;
    if (ldafUserToken) {
      if (event.cookies.get("ldafUserToken")) event.cookies.delete("ldafUserToken");
      try {
        const redisClient = await getConnectedRedisClient();
        await redisClient?.del(`ldafUserInfoByToken:${ldafUserToken}`);
      } catch (err) {
        const message = getErrorMessage(err);
        logger.logMessage(
          `Got the following error while trying to delete bad user token from Redis: ${message}`
        );
      }
    }
    return ldafUserToken
      ? "Token was invalid; you have been logged out. Please log in again to view preview content."
      : "You must log in to view preview content.";
  };

  if (!event.locals.currentUser || !managementAPIToken) {
    const message = await handleBadTokenAndGetMessage();
    event.locals.previewAuthenticationError = {
      status: 401,
      message,
    };
    return resolveWithStatus(401, "Unauthorized", resolve, event);
  }

  // If the user is trying to see preview data, we should always check that they're still
  // authorized to see it in Contentful. Caching this would reduce our API calls to Contentful, but
  // it would also allow users who have been removed from Contentful to keep viewing preview content
  // until the cache expired.
  const response = await fetch(
    `${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      headers: {
        Authorization: `Bearer ${managementAPIToken}`,
      },
    }
  );

  if (response.status === 401) {
    const message = await handleBadTokenAndGetMessage();
    event.locals.previewAuthenticationError = {
      status: 401,
      message: `401 Unauthorized: ${message}`,
    };
    return resolveWithStatus(401, "Unauthorized", resolve, event);
  }

  if (!response.ok) {
    const errorMessage = await getErrorMessageFromResponse(response);
    event.locals.previewAuthenticationError = {
      status: response.status,
      message: `${response.status}${
        response.statusText ? ` ${response.statusText}` : ""
      } error calling content service: ${errorMessage}`,
    };
    logger.logErrorResponse(response);
    return resolveWithStatus(response.status, response.statusText, resolve, event);
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

export const handle = sequence(
  handleSetupLogger,
  handleSetupRedisClient,
  handlePreload,
  handleToken,
  handleCSP
);

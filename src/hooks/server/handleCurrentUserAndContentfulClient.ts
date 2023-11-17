import type { Handle, RequestEvent } from "@sveltejs/kit";
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_API_TOKEN,
  CONTENTFUL_PREVIEW_API_TOKEN,
  CONTENTFUL_MANAGEMENT_API_ENDPOINT,
} from "$env/static/private";
import getContentfulClient from "$lib/services/server/contentful";
import resolveWithStatus from "$lib/util/resolveWithStatus.server";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";

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

export const getHandleCurrentUserAndContentfulClient = ({
  env: {
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_API_TOKEN,
    CONTENTFUL_PREVIEW_API_TOKEN,
    CONTENTFUL_MANAGEMENT_API_ENDPOINT,
  },
}: {
  env: {
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_DELIVERY_API_TOKEN: string;
    CONTENTFUL_PREVIEW_API_TOKEN: string;
    CONTENTFUL_MANAGEMENT_API_ENDPOINT: string;
  };
}) =>
  (async ({ event, resolve }) => {
    const {
      fetch,
      url,
      locals: { getKVClient },
    } = event;

    event.locals.contentfulClient =
      CONTENTFUL_SPACE_ID && CONTENTFUL_DELIVERY_API_TOKEN
        ? getContentfulClient({
            spaceID: CONTENTFUL_SPACE_ID,
            token: CONTENTFUL_DELIVERY_API_TOKEN,
            fetch,
          })
        : undefined;

    const ldafUserToken =
      event.cookies.get("ldafUserToken") ??
      event.request.headers.get("Authorization")?.match(/^Bearer ([^ ]+)/)?.[1];

    let managementAPIToken: string | undefined;

    setCurrentUser: {
      if (ldafUserToken) {
        try {
          const kvClient = await getKVClient();
          const userInfo = await kvClient.getUserInfoByToken(ldafUserToken);
          if (userInfo === null) {
            event.cookies.delete("ldafUserToken");
            break setCurrentUser;
          }
          const { email, name, avatarURL } = userInfo;
          ({ managementAPIToken } = userInfo);
          event.locals.currentUser = { email, name, avatarURL };
        } catch (err) {
          console.error(err);
        }
      }
    }

    // We don't want to try to authenticate using the current token if the request is trying to set a
    // new token or get rid of the current one.
    if (isLogin(event) || isLogout(event)) return resolve(event);

    const preview = url.searchParams.get("preview") === "true";

    if (!preview) return resolve(event);

    const handleBadTokenAndGetMessage = async () => {
      if (event.locals.currentUser) event.locals.currentUser = undefined;
      if (!ldafUserToken) return "You must log in to view preview content.";
      if (event.cookies.get("ldafUserToken")) event.cookies.delete("ldafUserToken");
      try {
        const kvClient = await getKVClient();
        await kvClient.deleteUserInfoByToken(ldafUserToken);
      } catch (err) {
        console.error(err);
      }
      return "Token was invalid; you have been logged out. Please log in again to view preview content.";
    };

    if (!event.locals.currentUser || !managementAPIToken) {
      const message = await handleBadTokenAndGetMessage();
      event.locals.previewAuthenticationError = {
        status: 401,
        message: `401 Unauthorized: ${message}`,
      };
      const response = await resolveWithStatus(401, "Unauthorized", resolve, event);
      return response;
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
      },
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
      const message = await getErrorMessageFromResponse(response);
      event.locals.previewAuthenticationError = {
        status: response.status,
        message: `${response.status}${
          response.statusText ? ` ${response.statusText}` : ""
        } error calling content service: ${message}`,
      };
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

export default getHandleCurrentUserAndContentfulClient({
  env: {
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_API_TOKEN,
    CONTENTFUL_PREVIEW_API_TOKEN,
    CONTENTFUL_MANAGEMENT_API_ENDPOINT,
  },
});

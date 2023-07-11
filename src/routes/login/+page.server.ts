import { CONTENTFUL_MANAGEMENT_API_ENDPOINT } from "$env/static/private";
import type { ServerUserInfo } from "$lib/server/types";
import getCurrentUser from "$lib/server/getCurrentUser";
import tokenDuration from "$lib/constants/tokenDuration";
import { error, fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import getErrorMessage from "$lib/util/getErrorMessage";

export const actions = {
  default: async ({ request, locals, cookies, fetch }) => {
    const data = await request.formData();

    if (cookies.get("ldafUserToken")) {
      return fail(400, { success: false, message: "You are already logged in!" });
    }

    const managementAPIToken = data.get("token");
    if (typeof managementAPIToken !== "string") {
      return fail(400, { success: false, message: "token must be a string" });
    }

    const { logger, getConnectedRedisClient } = locals;
    if (!getConnectedRedisClient) {
      throw error(500, { message: "Could not connect to Redis, client creator was not set" });
    }

    try {
      const [redisClient, currentUser] = await Promise.all([
        getConnectedRedisClient?.(),
        getCurrentUser({
          fetch,
          token: managementAPIToken,
          apiEndpoint: CONTENTFUL_MANAGEMENT_API_ENDPOINT,
        }),
      ]);
      if (!redisClient) {
        const message = "Could not log in: Redis client failed to initialize";
        logger.logMessage(message);
        throw error(500, { message });
      }
      locals.currentUser = currentUser;
      const ldafUserToken = crypto.randomUUID();
      await redisClient.set(
        `ldafUserInfoByToken:${ldafUserToken}`,
        JSON.stringify({
          email: locals.currentUser.email,
          name: locals.currentUser.name,
          avatarURL: locals.currentUser.avatarURL,
          managementAPIToken,
        } satisfies ServerUserInfo),
        { EX: tokenDuration }
      );
      cookies.set("ldafUserToken", ldafUserToken, {
        maxAge: tokenDuration,
        sameSite: "none",
        path: "/",
      });
      return { success: true, currentUser: locals.currentUser };
    } catch (err) {
      console.log({ err });
      const message = `Could not save token: ${getErrorMessage(err) ?? "unknown error"}`;
      const status =
        err && typeof err === "object" && "status" in err && typeof err.status === "number"
          ? err.status
          : 500;
      return fail(status, { success: false, message });
    }
  },
} satisfies Actions;

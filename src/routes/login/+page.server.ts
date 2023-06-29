import { CONTENTFUL_MANAGEMENT_API_ENDPOINT } from "$env/static/private";
import type { ServerUserInfo } from "$lib/server/types";
import getCurrentUser from "$lib/server/getCurrentUser";
import tokenDuration from "$lib/constants/tokenDuration";
import { error, fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  default: async ({ request, locals, cookies, fetch }) => {
    const data = await request.formData();

    if (cookies.get("ldafUserToken")) {
      throw fail(400, { message: "You are already logged in!" });
    }

    const managementAPIToken = data.get("token");
    if (typeof managementAPIToken !== "string") {
      throw fail(400, { message: "token must be a string" });
    }

    const { getConnectedRedisClient } = locals;
    if (!getConnectedRedisClient) {
      throw error(500, { message: "Could not connect to Redis, client creator was not set" });
    }

    try {
      const [redisClient, currentUser] = await Promise.all([
        getConnectedRedisClient!(),
        getCurrentUser({
          fetch,
          token: managementAPIToken,
          apiEndpoint: CONTENTFUL_MANAGEMENT_API_ENDPOINT,
        }),
      ]);
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
      const message =
        err && typeof err === "object" && "message" in err && typeof err.message === "string"
          ? `Could not save token: ${err.message}`
          : `Could not save token: unknown error`;
      const status =
        err && typeof err === "object" && "status" in err && typeof err.status === "number"
          ? err.status
          : 500;
      throw fail(status, { message });
    }
  },
} satisfies Actions;

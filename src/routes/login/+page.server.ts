import { CONTENTFUL_MANAGEMENT_API_ENDPOINT } from "$env/static/private";
import type { ServerUserInfo } from "$lib/server/types";
import getCurrentUser from "$lib/server/getCurrentUser";
import tokenDuration from "$lib/constants/tokenDuration";
import { error } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  default: async ({ request, locals, cookies, fetch }) => {
    const data = await request.formData();
    const managementAPIToken = data.get("token");
    if (typeof managementAPIToken !== "string") {
      throw error(400, { message: "token must be a string" });
    }
    const { getConnectedRedisClient } = locals;
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
        err && typeof err === "object" && "message" in err
          ? `Could not save token: ${err.message}`
          : `Could not save token: unknown error`;
      throw error(500, { message });
    }
  },
} satisfies Actions;

import { CONTENTFUL_MANAGEMENT_API_ENDPOINT } from "$env/static/private";
import tokenDuration from "$lib/constants/tokenDuration.js";
import getContentfulManagementClient from "$lib/services/server/contentfulManagement";
import getErrorMessage from "$lib/util/getErrorMessage.js";
import { error, fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  default: async ({ request, locals, cookies, fetch }) => {
    const data = await request.formData();

    if (cookies.get("ldafUserToken")) {
      return fail(400, { success: false, message: "You are already logged in!" });
    }

    const managementAPIToken = data.get("token");
    if (typeof managementAPIToken !== "string") {
      return fail(400, { success: false, message: "Token must be a string" });
    }

    const { getKVClient } = locals;
    const contentfulManagementClient = getContentfulManagementClient({
      fetch,
      token: managementAPIToken,
      apiEndpoint: CONTENTFUL_MANAGEMENT_API_ENDPOINT,
    });

    try {
      const [kvClient, currentUser] = await Promise.all([
        getKVClient(),
        contentfulManagementClient.getCurrentUser(),
      ]);
      if (!kvClient) {
        const message = "Could not log in: Redis client failed to initialize";
        error(500, { message, status: 500 });
      }
      locals.currentUser = currentUser;
      const ldafUserToken = crypto.randomUUID();
      await kvClient.setUserInfoByToken(ldafUserToken, {
        ...locals.currentUser,
        managementAPIToken,
      });
      cookies.set("ldafUserToken", ldafUserToken, {
        maxAge: tokenDuration,
        sameSite: "none",
        path: "/",
      });
      return { success: true, currentUser: locals.currentUser };
    } catch (err) {
      const message = `Could not save token: ${getErrorMessage(err) ?? "unknown error"}`;
      const status =
        err && typeof err === "object" && "status" in err && typeof err.status === "number"
          ? err.status
          : 500;
      error(status, { message, status });
    }
  },
} satisfies Actions;

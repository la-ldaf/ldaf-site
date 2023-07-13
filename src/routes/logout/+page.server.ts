import type { Actions } from "./$types";

export const actions = {
  default: async ({ cookies, locals: { getKVClient, logger } }) => {
    const userToken = cookies.get("ldafUserToken");
    if (!userToken) return { success: true };
    cookies.delete("ldafUserToken", { sameSite: "none", path: "/" });
    try {
      const kvClient = await getKVClient();
      await kvClient.deleteUserInfoByToken(userToken);
    } catch (err) {
      logger.logError(err);
    }
    return { success: true };
  },
} satisfies Actions;

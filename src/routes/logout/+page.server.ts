import type { Actions } from "./$types";

export const actions = {
  default: async ({ cookies, locals: { getConnectedRedisClient, logger } }) => {
    const userToken = cookies.get("ldafUserToken");
    if (!userToken) return { success: true };
    cookies.delete("ldafUserToken", { sameSite: "none", path: "/" });
    try {
      if (!getConnectedRedisClient) throw new Error("could not attempt to connect to Redis");
      const redisClient = await getConnectedRedisClient();
      await redisClient.del(`ldafUserInfoByToken:${userToken}`);
    } catch (err) {
      logger.logError(err);
    }
    return { success: true };
  },
} satisfies Actions;

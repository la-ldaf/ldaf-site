import type { Actions } from "./$types";

export const actions = {
  default: async ({ cookies, locals: { getConnectedRedisClient } }) => {
    const userToken = cookies.get("ldafUserToken");
    if (!userToken) return { success: true };
    cookies.delete("ldafUserToken", { sameSite: "none", path: "/" });
    try {
      if (!getConnectedRedisClient) throw new Error("could not attempt to connect to Redis");
      const redisClient = await getConnectedRedisClient();
      await redisClient.del(`ldafUserInfoByToken:${userToken}`);
    } catch (err) {
      // TODO log and ignore this error
    }
    return { success: true };
  },
} satisfies Actions;

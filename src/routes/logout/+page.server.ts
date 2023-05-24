import type { Actions } from "./$types";

export const actions = {
  default: async ({ cookies, locals: { redisClient, redisClientConnectedPromise } }) => {
    const userToken = cookies.get("ldafUserToken");
    if (!userToken) return { success: true };
    cookies.delete("ldafUserToken", { sameSite: "none", path: "/" });
    try {
      await redisClientConnectedPromise;
      await redisClient?.del(`ldafUserInfoByToken:${userToken}`);
    } catch (err) {
      // TODO log and ignore this error
    }
    return { success: true };
  },
} satisfies Actions;

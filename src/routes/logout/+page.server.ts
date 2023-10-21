import type { Actions } from "./$types";

export const actions = {
  default: async ({ cookies, locals: { getKVClient } }) => {
    const userToken = cookies.get("ldafUserToken");
    if (!userToken) return { success: true };
    cookies.delete("ldafUserToken", { sameSite: "none", path: "/" });
    try {
      const kvClient = await getKVClient();
      await kvClient.deleteUserInfoByToken(userToken);
    } catch (err) {
      console.error(err);
      return { success: false };
    }
    return { success: true };
  },
} satisfies Actions;

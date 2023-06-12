import type { Actions } from "./$types";

export const actions = {
  default: async ({ cookies }) => {
    cookies.delete("ldafUserToken", { sameSite: "none", path: "/" });
    return { success: true };
  },
} satisfies Actions;

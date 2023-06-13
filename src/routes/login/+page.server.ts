import { CONTENTFUL_MANAGEMENT_API_ENDPOINT } from "$env/static/private";
import getCurrentUser from "$lib/server/getCurrentUser";
import { error, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  default: async ({ request, locals, cookies }) => {
    const data = await request.formData();
    const token = data.get("token");
    if (typeof token !== "string") throw error(400, { message: "token must be a string" });
    locals.currentUser = await getCurrentUser({
      token,
      apiEndpoint: CONTENTFUL_MANAGEMENT_API_ENDPOINT,
    });
    cookies.set("ldafUserToken", token, { maxAge: 60 * 60 * 24 * 7, sameSite: "none", path: "/" });
    /* const url = new URL(request.url);
     * const redirectURL = url.searchParams.get("state");
     * if (redirectURL) throw redirect(302, redirectURL); */
    return { success: true, currentUser: locals.currentUser };
  },
} satisfies Actions;

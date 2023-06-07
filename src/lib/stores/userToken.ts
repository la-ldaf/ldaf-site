import { browser } from "$app/environment";
import cookieStore from "$lib/util/cookieStore";
import type { Writable } from "svelte/store";

let userToken: Writable<string | undefined | null> | undefined;
if (browser) {
  userToken = cookieStore("ldafUserToken", { maxAge: 60 * 60 * 24 * 7, sameSite: "None" });
}

export default userToken;

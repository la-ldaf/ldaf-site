import { browser } from "$app/environment";
import cookieStore from "$lib/util/cookieStore";
import type { Writable } from "svelte/store";

let userToken: Writable<string | undefined> | undefined;
if (browser) {
  userToken = cookieStore("ldafUserToken");
}

export default userToken;

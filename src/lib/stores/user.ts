import { browser } from "$app/environment";
import localStorageStore from "$lib/util/localStorageStore";
import type { Writable } from "svelte/store";

type User = {
  email: string;
  name: string;
  token: string;
  avatarURL?: string;
};

// 1 week
const cookieExpirationDuration = 1000 * 60 * 60 * 24 * 7;

let user: Writable<User | undefined> | undefined;
if (browser) {
  user = localStorageStore("ldaf-user");
  user?.subscribe((newUser) => {
    document.cookie = `ldafUserToken=${newUser?.token ?? ""}; path=/; expires=${new Date(
      new Date().getTime() + cookieExpirationDuration
    ).toUTCString()} Secure`;
  });
}
export default user;

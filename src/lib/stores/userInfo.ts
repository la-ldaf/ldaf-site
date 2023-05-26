import { browser } from "$app/environment";
import localStorageStore from "$lib/util/localStorageStore";
import type { Writable } from "svelte/store";
import managementClient from "./managementClient";

type UserInfo = {
  email: string;
  name: string;
  avatarURL?: string;
};

let userInfo: Writable<UserInfo | undefined> | undefined;
if (browser) {
  userInfo = localStorageStore("ldaf-user-info");
  managementClient?.subscribe(async (client) => {
    if (!client) return userInfo?.set(undefined);
    const { email, firstName, lastName, avatarUrl } = await client.getCurrentUser();
    userInfo?.set({
      email,
      name: `${firstName} ${lastName}`,
      avatarURL: avatarUrl,
    });
  });
}
export default userInfo;

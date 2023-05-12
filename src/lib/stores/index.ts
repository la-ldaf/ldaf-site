import type { ClientAPI as ManagementClientAPI } from "contentful-management";

import { writable, type Writable } from "svelte/store";
import { browser } from "$app/environment";
import localStorageStore from "$lib/util/localStorageStore";

type User = {
  email: string;
  name: string;
  token: string;
  avatarURL?: string;
};

export let user: Writable<User>;
if (browser) {
  user = localStorageStore<User>("ldaf-user");
}

export let managementClient: Writable<ManagementClientAPI>;
if (browser) {
  managementClient = writable<ManagementClientAPI>();
}

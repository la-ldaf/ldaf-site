import type { ClientAPI as ManagementClientAPI } from "contentful-management";

import { writable } from "svelte/store";

type User = {
  name: string;
  token: string;
};

export const user = writable<User>();
export const managementClient = writable<ManagementClientAPI>();

import type { ClientAPI } from "contentful-management";
import { writable, type Writable } from "svelte/store";
import { browser } from "$app/environment";
import user from "./user";

let managementClient: Writable<ClientAPI | undefined> | undefined;

if (browser) {
  managementClient = writable();
  let client: ClientAPI | undefined;
  managementClient.subscribe((newClient) => (client = newClient));
  if (user) {
    user.subscribe(async (newUser) => {
      const { createClient } = await import("contentful-management");
      if (!newUser) return managementClient?.set(undefined);
      if (!client) managementClient?.set(createClient({ accessToken: newUser.token }));
    });
  }
}

export default managementClient;

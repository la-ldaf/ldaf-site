import type { ClientAPI } from "contentful-management";
import { writable, type Writable } from "svelte/store";
import { browser } from "$app/environment";
import userToken from "./userToken";

let managementClient: Writable<ClientAPI | undefined> | undefined;

if (browser) {
  managementClient = writable();
  let client: ClientAPI | undefined;
  managementClient.subscribe((newClient) => (client = newClient));
  userToken?.subscribe(async (newToken) => {
    const { createClient } = await import("contentful-management");
    if (!newToken) return managementClient?.set(undefined);
    if (!client) managementClient?.set(createClient({ accessToken: newToken }));
  });
}

export default managementClient;

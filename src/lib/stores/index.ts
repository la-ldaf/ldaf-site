import { writable, type Writable } from "svelte/store";
import { browser } from "$app/environment";
import localStorageStore from "$lib/util/localStorageStore";
import {
  createClient as createContentfulManagementClient,
  type ClientAPI as ContentfulManagementClientAPI,
} from "contentful-management";
import type { ContentfulClientApi } from "contentful";
import { getClient } from "$lib/contentful-client";

type User = {
  email: string;
  name: string;
  token: string;
  avatarURL?: string;
};

export let user: Writable<User> | undefined;
if (browser) {
  user = localStorageStore("ldaf-user");
}

export let managementClient: Writable<ContentfulManagementClientAPI> | undefined;
if (browser) {
  let client: ContentfulManagementClientAPI;
  managementClient = writable();
  user?.subscribe(({ token }) => {
    if (!client) {
      client = createContentfulManagementClient({ accessToken: token });
      managementClient?.set(client);
    }
  });
}

export let previewClient: Writable<ContentfulClientApi<undefined> | undefined> | undefined;
if (browser) {
  let client: ContentfulClientApi<undefined> | undefined;
  previewClient = writable();
  managementClient?.subscribe((manageClient) => {
    if (!client) {
      manageClient
        .getSpaces()
        .then(({ items: [space] }) => space.getPreviewApiKeys())
        .then(({ items: [{ accessToken }] }) => {
          if (!client) {
            client = getClient({ token: accessToken, preview: true });
            previewClient?.set(client);
          }
        });
    }
  });
}

import { PUBLIC_CONTENTFUL_SPACE_ID } from "$env/static/public";
import { browser } from "$app/environment";
import type { ContentfulClient } from "$lib/services/contentful";
import { writable, type Writable } from "svelte/store";
import managementClient from "./managementClient";

let previewClient: Writable<ContentfulClient | undefined> | undefined;
if (browser && managementClient) {
  let client: ContentfulClient | undefined;
  previewClient = writable();
  managementClient.subscribe((newManagementClient) => {
    const lastClient = client;
    if (!newManagementClient) {
      client = undefined;
      previewClient?.set(undefined);
      return;
    }
    (async () => {
      const space = await newManagementClient.getSpace(PUBLIC_CONTENTFUL_SPACE_ID);
      const {
        items: [{ accessToken }],
      } = await space.getPreviewApiKeys();
      if (client !== lastClient) return;
      const { default: getContentfulClient } = await import("$lib/services/contentful");
      client = getContentfulClient({
        spaceID: PUBLIC_CONTENTFUL_SPACE_ID,
        token: accessToken,
        preview: true,
      });
      previewClient?.set(client);
    })();
  });
}

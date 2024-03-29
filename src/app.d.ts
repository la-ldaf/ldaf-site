// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Client as KVClient } from "$lib/services/server/kv";
import type { ContentfulClient } from "$lib/services/server/contentful";
import type { User } from "$lib/types";

declare global {
  namespace App {
    interface Error {
      // `message` is included by default
      title?: string;
      status?: number;
    }
    interface Locals {
      getKVClient: () => Promise<KVClient>;
      contentfulClient?: ContentfulClient;
      currentUser?: User;
      previewAuthenticationError?: {
        status: number;
        message: string;
      };
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};

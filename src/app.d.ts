// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Client as KVClient } from "$lib/services/server/kv";
import type { ContentfulClient } from "$lib/services/server/contentful";

type None = Record<never, never>;

declare global {
  namespace App {
    interface Error {
      // `message` is included by default
      title?: string;
    }
    interface Locals {
      getKVClient: () => Promise<KVClient | undefined>;
      contentfulClient?: ContentfulClient;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};

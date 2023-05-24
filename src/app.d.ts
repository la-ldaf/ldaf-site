// See https://kit.svelte.dev/docs/types#app

import type { ContentfulClient } from "./lib/services/server/contentful";
import type { Client as KVClient } from "./lib/services/server/kv";
import type { CurrentUser } from "./lib/contexts/currentUser";
import type { Logger } from "./lib/logger/private.server";

// for information about these interfaces
declare global {
  namespace App {
    interface Error {
      // `message` is included by default
      title?: string;
      status?: number;
    }
    interface Locals {
      logger: Logger;
      getKVClient: () => Promise<KVClient>;
      previewAuthenticationError?: {
        status: number;
        message: string;
      };
      currentUser?: CurrentUser;
      contentfulClient?: ContentfulClient;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};

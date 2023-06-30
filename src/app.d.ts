// See https://kit.svelte.dev/docs/types#app

import type { RedisClientType } from "redis";
import type { ContentfulClient } from "./lib/services/contentful";
import type { CurrentUser } from "./lib/contexts/currentUser";
import type { Logger } from "./lib/server/logger";

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
      previewAuthenticationError?: {
        status: number;
        message: string;
      };
      currentUser?: CurrentUser;
      contentfulClient?: ContentfulClient;
      getConnectedRedisClient?: () => Promise<RedisClientType>;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};

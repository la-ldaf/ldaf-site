// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { RedisClientType } from "redis";

type None = Record<never, never>;

declare global {
  namespace App {
    interface Error {
      // `message` is included by default
      title?: string;
    }
    interface Locals {
      getConnectedRedisClient: () => Promise<RedisClientType<None, None, None> | undefined>;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};

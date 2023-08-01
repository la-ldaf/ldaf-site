// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Client } from "$lib/services/server/kv";

type None = Record<never, never>;

declare global {
  namespace App {
    interface Error {
      // `message` is included by default
      title?: string;
    }
    interface Locals {
      getKVClient: () => Promise<Client | undefined>;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};

// See https://kit.svelte.dev/docs/types#app

import { ContentfulClient } from "./lib/services/contentful";
import { CurrentUser } from "./lib/contexts/currentUser";

// for information about these interfaces
declare global {
  namespace App {
    interface Error {
      // `message` is included by default
      title?: string;
    }
    interface Locals {
      previewAuthenticationError?: {
        code: number;
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

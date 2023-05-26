// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Error {
      // `message` is included by default
      title?: string;
    }
    interface Locals {
      preview?: boolean;
      contentfulToken?: string;
      previewAuthenticationError?: {
        code: number;
        message: string;
      };
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};

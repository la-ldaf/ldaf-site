// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Error {
      // `message` is included by default
      title?: string;
    }
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

export {};

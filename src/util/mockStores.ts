import { vi } from "vitest";

/* 
As detailed here (https://github.com/sveltejs/kit/issues/1485), Store imports currently only work 
within the Sveltekit `dev` and `build` commands, requiring them to be mocked in our unit tests.
Solution taken from a separate issue in the SvelteKit repo: https://github.com/sveltejs/kit/issues/5525#issuecomment-1186390654
 */
export function mockStores() {
  vi.mock("$app/stores", async () => {
    const { readable, writable } = await import("svelte/store");
    /**
     * @type {import('$app/stores').getStores}
     */
    const getStores = () => ({
      navigating: readable(null),
      page: readable({ url: new URL("http://localhost"), params: {} }),
      session: writable(null),
      updated: readable(false),
    });
    /** @type {typeof import('$app/stores').page} */
    const page = {
      subscribe(fn) {
        return getStores().page.subscribe(fn);
      },
    };
    /** @type {typeof import('$app/stores').navigating} */
    const navigating = {
      subscribe(fn) {
        return getStores().navigating.subscribe(fn);
      },
    };
    /** @type {typeof import('$app/stores').session} */
    const session = {
      subscribe(fn) {
        return getStores().session.subscribe(fn);
      },
    };
    /** @type {typeof import('$app/stores').updated} */
    const updated = {
      subscribe(fn) {
        return getStores().updated.subscribe(fn);
      },
    };
    return {
      getStores,
      navigating,
      page,
      session,
      updated,
    };
  });
}

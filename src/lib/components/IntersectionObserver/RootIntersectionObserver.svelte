<script lang="ts">
  import { getRootObserver, type RootObserver } from "./observe";
  import { setContext } from "svelte";
  import key from "./key";
  import { browser } from "$app/environment";

  type RootOption = Element | undefined;

  export let root: RootOption | Promise<RootOption> = undefined;
  export let rootMargin: string | undefined = undefined;
  export let enabled = true;

  const getRootObserverPromise = async (): Promise<RootObserver | undefined> => {
    if (!browser) return undefined;
    if (!root) return getRootObserver({ rootMargin });
    if (root instanceof Element) return getRootObserver({ root, rootMargin });
    if (root instanceof Promise) return getRootObserver({ root: await root, rootMargin });
  };

  if (enabled && browser) {
    setContext<Promise<RootObserver | undefined>>(key, getRootObserverPromise());
  }
</script>

<slot />

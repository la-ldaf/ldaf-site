<script lang="ts">
  import { getRootObserver, type RootObserver } from "./observe";
  import { onMount, setContext } from "svelte";
  import key from "./key";
  import { browser } from "$app/environment";

  type Root = Element | undefined;

  export let root: Root | Promise<Root> = undefined;
  export let rootMargin: string | undefined = undefined;
  export let enabled = true;

  const rootObserverPromise = new Promise<RootObserver | undefined>((resolve) =>
    browser
      ? onMount(async () => resolve(getRootObserver({ root: await root, rootMargin })))
      : resolve(undefined)
  );

  if (enabled && browser) {
    setContext<Promise<RootObserver | undefined>>(key, rootObserverPromise);
  }
</script>

<slot />

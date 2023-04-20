<script lang="ts">
  import { getRootObserver, type RootObserver } from "./observe";
  import { setContext } from "svelte";
  import key from "./key";
  import { browser } from "$app/environment";

  export let rootMargin: string | undefined = undefined;
  export let enabled = true;

  if (enabled && browser) {
    const observer: RootObserver | undefined = getRootObserver({ rootMargin });
    if (observer) {
      setContext<RootObserver>(key, observer);
    }
  }
</script>

<slot />

<script lang="ts">
  import { getRootObserver, type RootObserver } from "./observe";
  import { setContext } from "svelte";
  import key from "./key";

  export let rootMargin: string | undefined = undefined;

  setContext<RootObserver | undefined>(key, getRootObserver({ rootMargin }));
</script>

<slot />

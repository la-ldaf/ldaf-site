<script lang="ts">
  import { getRootObserver, type RootObserver } from "./observe";
  import { setContext } from "svelte";
  import key from "./key";

  export let rootMargin: string | undefined = undefined;
  export let enabled = true;

  setContext<RootObserver | undefined>(key, enabled ? getRootObserver({ rootMargin }) : undefined);
</script>

<slot />

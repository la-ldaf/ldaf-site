<script lang="ts">
  // Svelte's component API does not support <slot/>.
  // This file serves as a wrapper so that we can set some <slot/> content.
  import type { ComponentType, SvelteComponentTyped } from "svelte";

  export let Component: ComponentType<SvelteComponentTyped>;
</script>

<svelte:component this={Component} {...$$restProps}>link text</svelte:component>

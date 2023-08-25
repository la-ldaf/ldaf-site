<script lang="ts">
  // Svelte's component API does not support <slot/>.
  // This file serves as a wrapper so that we can set some <slot/> content.
  import type { ComponentType, SvelteComponent } from "svelte";

  export let Component: ComponentType<SvelteComponent>;
  export let slotContent: string | Node;
</script>

<svelte:component this={Component} {...$$restProps}>{slotContent}</svelte:component>

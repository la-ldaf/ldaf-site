<script lang="ts">
  import type { ComponentProps } from "svelte";
  import IntersectionObserver from "../IntersectionObserver.svelte";
  import RootIntersectionObserver from "../RootIntersectionObserver.svelte";

  export let targetTestId: string;
  export let text: string;
  export let intersectingText: string = text;
  export let props: Omit<ComponentProps<IntersectionObserver>, "target"> = { enabled: true };
  export let rootProps: ComponentProps<RootIntersectionObserver> = { enabled: true };

  let thisDiv: Element;
</script>

<RootIntersectionObserver {...rootProps}>
  <IntersectionObserver target={thisDiv} on:intersect let:intersecting {...props}>
    <div data-testid={targetTestId} id="abc" bind:this={thisDiv}>
      {#if intersecting}
        {intersectingText}
      {:else}
        {text}
      {/if}
    </div>
  </IntersectionObserver>
</RootIntersectionObserver>

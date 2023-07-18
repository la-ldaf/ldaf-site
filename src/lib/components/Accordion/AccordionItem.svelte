<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { AccordionContext, AccordionContextItems } from "./types";

  export let id = "accordionItem-" + Math.random().toString(36);
  export let title = "Title";
  export let expanded = false;

  const context: AccordionContext = getContext("Accordion");

  let ref: HTMLElement | null = null;
  let unsubscribe: () => void | undefined;

  onMount(() => {
    return () => {
      if (context) context.remove({ id, expanded: !expanded });
      if (unsubscribe) unsubscribe();
    };
  });

  $: if (context) {
    context.add({ id, expanded });
    unsubscribe = context.items.subscribe((value: AccordionContextItems) => {
      expanded = value[id];
    });
  }
</script>

<h3 {...$$restProps} class="usa-accordion__heading">
  <button
    bind:this={ref}
    type="button"
    class="usa-accordion__button"
    aria-expanded={expanded}
    aria-controls={id}
    on:click={() => {
      if (context) {
        context.toggle({ id, expanded: !expanded });
        if (expanded && ref && ref.getBoundingClientRect().top < 0) {
          ref.scrollIntoView();
        }
      }
    }}
  >
    {title}
  </button>
</h3>
<div class="usa-accordion__content usa-prose" {id} hidden={!expanded}>
  <slot />
</div>

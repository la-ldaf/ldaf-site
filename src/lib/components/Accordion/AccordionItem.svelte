<script lang="ts">
  import { getContext } from "svelte";

  export let id = "accordionItem-" + crypto.randomUUID();
  export let title: string | null | undefined = "Title";
  export let expanded = false;
  let ref: HTMLElement | null = null;

  interface ItemApi {
    subscribe: (run: (items: Record<string, boolean>) => void) => () => void;
    toggle: (id: string) => void;
  }

  const { subscribe, toggle } = getContext<ItemApi>("Accordion");

  subscribe((items) => {
    expanded = items[id] || false;
  });
</script>

<h3 {...$$restProps} class="usa-accordion__heading">
  <button
    bind:this={ref}
    type="button"
    class="usa-accordion__button"
    aria-expanded={expanded}
    aria-controls={id}
    on:click={() => {
      toggle(id);
      if (expanded && ref && ref.getBoundingClientRect().top < 0) {
        ref.scrollIntoView();
      }
    }}
  >
    {title}
  </button>
</h3>
<div class="usa-accordion__content usa-prose" {id} hidden={!expanded}>
  <slot />
</div>

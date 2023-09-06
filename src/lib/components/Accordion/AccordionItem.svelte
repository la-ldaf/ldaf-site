<script lang="ts">
  import { getAccordionContext } from "./context";

  export let id: string;
  export let title: string | null | undefined = "Title";
  export let onClickAnalyticsHandler: ((expanded: boolean) => void) | null = null;

  let ref: HTMLElement | null = null;

  $: ({ expandedItems, toggle } = getAccordionContext());

  let expanded: boolean;
  $: expanded = $expandedItems[id] ?? false;
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
    on:click={() => {
      if (onClickAnalyticsHandler) onClickAnalyticsHandler(expanded);
    }}
  >
    {title}
  </button>
</h3>
<div class="usa-accordion__content usa-prose" {id} hidden={!expanded}>
  <slot />
</div>

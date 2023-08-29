<script lang="ts">
  import { writable } from "svelte/store";
  import { setAccordionContext } from "./context";

  export let multiselectable = false;
  export let bordered = false;

  const expandedItems = writable<Record<string, boolean>>({});

  setAccordionContext({
    expandedItems,
    toggle: (itemID: string) =>
      expandedItems.update((items) => ({
        ...(multiselectable ? items : {}),
        [itemID]: !items[itemID],
      })),
  });
</script>

<div {...$$restProps} class="usa-accordion" class:usa-accordion--bordered={bordered}>
  <slot />
</div>

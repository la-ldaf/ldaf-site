<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  export let multiselectable = false;
  export let bordered = false;

  const selectedItems = writable<Record<string, boolean>>({});

  setContext("Accordion", {
    subscribe: selectedItems.subscribe,
    toggle: (itemID: string) => {
      if (multiselectable) {
        selectedItems.update((items) => ({
          ...items,
          [itemID]: !items[itemID],
        }));
      } else {
        selectedItems.update((selectedItems) => ({ [itemID]: !selectedItems[itemID] }));
      }
    },
  });
</script>

<div {...$$restProps} class="usa-accordion" class:usa-accordion--bordered={bordered}>
  <slot />
</div>

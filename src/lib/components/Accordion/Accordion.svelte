<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import type { AccordionItemType, AccordionContextItems } from "./types";

  export let multiselectable = false;
  export let bordered = false;

  const items = writable({});

  setContext("Accordion", {
    items,
    add: (item: AccordionItemType) => {
      items.update((context) => ({ ...context, [item.id]: item.expanded }));
    },
    remove: (item: AccordionItemType) => {
      items.update((context: AccordionContextItems) => {
        delete context[item.id];
        return context;
      });
    },
    toggle: (item: AccordionItemType) => {
      items.update((context: AccordionContextItems) => {
        if (!multiselectable) {
          Object.keys(context).forEach((id) => (context[id] = false));
        }

        return { ...context, [item.id]: item.expanded };
      });
    },
  });
</script>

<div {...$$restProps} class="usa-accordion" class:usa-accordion--bordered={bordered}>
  <slot />
</div>

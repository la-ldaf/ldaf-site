<script lang="ts">
  export let multiselectable = false;
  export let bordered = false;

  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  type AccordionItem = {
    id: string;
    expanded: boolean;
  };
  const items = writable({});
  type AccordionContextItems = Record<string, boolean>;

  setContext("Accordion", {
    items,
    add: (item: AccordionItem) => {
      items.update((context) => ({ ...context, [item.id]: item.expanded }));
    },
    remove: (item: AccordionItem) => {
      items.update((context: AccordionContextItems) => {
        delete context[item.id];
        return context;
      });
    },
    toggle: (item: AccordionItem) => {
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

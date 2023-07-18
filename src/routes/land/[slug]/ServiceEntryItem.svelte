<script>
  import AccordionItem from "$lib/components/Accordion/AccordionItem.svelte";

  export let item;

  const entryTitle = "entryTitle" in item ? item.entryTitle : item.title;
</script>

<AccordionItem title={entryTitle}>
  <slot />
</AccordionItem>

<script lang="ts">
  import Accordion, { AccordionItem } from "$lib/components/Accordion";

  export let accordionOneContent = "Accordion 1 Content";
  export let accordionTwoContent = "Accordion 2 Content";
  export let titleOne = "Accordion 1 Title";
  export let titleTwo = "Accordion 2 Title";
  export let multiselectable = false;
  export let bordered = true;

  let className = "";
  export { className as class };
</script>

<Accordion {multiselectable} {bordered} class={className}>
  <AccordionItem title={titleOne}>
    {accordionOneContent}
  </AccordionItem>
  <AccordionItem title={titleTwo}>
    {accordionTwoContent}
  </AccordionItem>
</Accordion>

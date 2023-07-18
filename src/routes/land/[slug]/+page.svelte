<script lang="ts">
  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Accordion from "$lib/components/Accordion/Accordion.svelte";
  import AccordionItem from "$lib/components/Accordion/AccordionItem.svelte";

  export let data;
  $: ({
    title,
    subheading,
    description,
    heroImage,
    serviceListName,
    serviceEntriesCollection,
    contactInfoCollection,
    additionalResources,
  } = data);
</script>

{#if heroImage}
  <!-- TODO: Update this to use a proper Hero/Image Component -->
  <img src={heroImage.imageSource?.url} alt={heroImage.imageSource?.description} />
{/if}
<h1>{title}</h1>
<p class="usa-intro">
  {subheading}
</p>
{#if description}
  <ContentfulRichText document={description?.json} />
{/if}
<!-- TODO: Refactor the service entries into a reusable Accordion component -->
{#if serviceEntriesCollection}
  <h2>{serviceListName}</h2>
  <Accordion multiselectable>
    {#each serviceEntriesCollection.items as serviceEntry}
      <AccordionItem title={serviceEntry?.entryTitle || serviceEntry?.title}>
        <ContentfulRichText document={serviceEntry?.description?.json} />
      </AccordionItem>
    {/each}
  </Accordion>
{/if}
<div />
{#if contactInfoCollection}
  <ContactCard address={undefined} contacts={contactInfoCollection?.items} class="margin-top-6" />
{/if}
<!-- TODO: Is this where Related Links will get stored? -->
{#if additionalResources}
  <!-- <ContentfulRichText document={additionalResources?.json} /> -->
{/if}

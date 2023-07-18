<script lang="ts">
  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Accordion from "$lib/components/Accordion/Accordion.svelte";
  import ServiceEntryItem from "./ServiceEntryItem.svelte";

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
  <!-- TODO: Update this to use a proper Hero/Image Component 
       (pending merging of https://github.com/la-ldaf/ldaf-site/pull/279) -->
  <img src={heroImage.imageSource?.url} alt={heroImage.imageSource?.description} />
{/if}
<h1>{title}</h1>
<p class="usa-intro">
  {subheading}
</p>
{#if description}
  <ContentfulRichText document={description?.json} />
{/if}
{#if serviceEntriesCollection}
  <h2>{serviceListName}</h2>
  <Accordion multiselectable>
    {#each serviceEntriesCollection.items as item}
      <ServiceEntryItem {item}>
        <ContentfulRichText document={item?.description?.json} />
      </ServiceEntryItem>
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

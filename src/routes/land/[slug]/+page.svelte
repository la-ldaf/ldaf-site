<script lang="ts">
  import Accordion, { AccordionItem } from "$lib/components/Accordion";
  import Button from "$lib/components/Button/Button.svelte";
  import Card from "$lib/components/Card/Card.svelte";
  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";

  export let data;

  // TODO: remove and validate core content pages with data once navigation changes are merged
  // import pestControlData from "./pest-control-data.json";
  // let data = pestControlData.data.serviceGroupCollection.items[0];

  // import industrialHempData from "./industrial-hemp-data.json";
  // let data = industrialHempData.data.serviceGroupCollection.items[0];
  $: ({
    title,
    subheading,
    description,
    heroImage,
    serviceListName,
    serviceEntries,
    serviceGroups,
    contactInfoCollection,
    additionalResources,
  } = data);
</script>

{#if heroImage}
  <!-- TODO: Update this to use a proper Hero/Image Component 
       (pending merge of https://github.com/la-ldaf/ldaf-site/pull/279) -->
  <img src={heroImage.imageSource?.url} alt={heroImage.imageSource?.description} />
{/if}
<h1>{title}</h1>
<p class="usa-intro">
  {subheading}
</p>
{#if description}
  <ContentfulRichText document={description?.json} />
{/if}

{#if serviceEntries || serviceGroups}
  <h2>{serviceListName}</h2>
  {#if serviceEntries.length > 0}
    {#each serviceEntries as item}
      <Accordion multiselectable>
        <AccordionItem title={item?.entryTitle}>
          <ContentfulRichText document={item?.description?.json} />
        </AccordionItem>
      </Accordion>
    {/each}
  {/if}
{/if}
{#if serviceGroups.length > 0}
  {#each serviceGroups as item}
    <Card>
      <h3 class="usa-card__heading" slot="header">{item.title}</h3>
      <svelte:fragment slot="body">
        {#if item.subheading}
          {item.subheading}
        {/if}
      </svelte:fragment>
      <!-- TODO: figure out how to update query to get full url
      to the related Content page -->
      <Button slot="footer">Link to Core Content Page</Button>
    </Card>
  {/each}
{/if}
<div />
{#if contactInfoCollection}
  <ContactCard address={undefined} contacts={contactInfoCollection?.items} class="margin-top-6" />
{/if}
<!-- TODO: Is this where Related Links will get stored? -->
{#if additionalResources}
  <h2>Related Links</h2>
  <ContentfulRichText document={additionalResources?.json} />
{/if}

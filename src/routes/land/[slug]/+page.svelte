<script lang="ts">
  import Accordion from "$lib/components/Accordion";
  import AccordionItem from "$lib/components/Accordion/AccordionItem.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Card from "$lib/components/Card/Card.svelte";
  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";

  import type { ServiceEntry, ServiceGroup } from "$lib/services/contentful/schema";
  import pestControlData from "./pest-control-data.json";

  // export let data;
  let data = pestControlData.data.serviceGroupCollection.items[0];
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

  let serviceEntries: ServiceEntry[] = [];
  let serviceGroups: ServiceGroup[] = [];
  $: serviceEntries = [];
  $: serviceGroups = [];

  $: {
    data.serviceEntriesCollection?.items.map((item) => {
      if (item && "entryTitle" in item) {
        serviceEntries?.push(item);
      } else if (item && "title" in item) {
        serviceGroups?.push(item);
      }
    });
  }
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

{#if serviceEntriesCollection}
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
      <p slot="body">{item.subheading}</p>
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

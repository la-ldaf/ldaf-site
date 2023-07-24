<script lang="ts">
  import Accordion, { AccordionItem } from "$lib/components/Accordion";
  import Card from "$lib/components/Card/Card.svelte";
  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";

  export let data;

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
  <img src={heroImage?.imageSource?.url} alt={heroImage.imageSource?.description} />
{/if}
<h1>{title}</h1>
<p class="usa-intro">
  {subheading}
</p>
{#if description}
  <ContentfulRichText document={description?.json} />
{/if}

{#if serviceEntries.length > 0 || serviceGroups.length > 0}
  <h2>{serviceListName}</h2>
  {#if serviceEntries.length > 0}
    {#each serviceEntries as item}
      <Accordion multiselectable>
        <AccordionItem title={item?.entryTitle} id={item.sys.id}>
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
      <!-- TODO: Use <Link /> pending LDAF-301 (link styled as button support) -->
      <a slot="footer" href={item.url} class="usa-button">Go To Page</a>
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

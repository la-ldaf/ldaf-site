<script lang="ts">
  import "../page.scss";
  import Accordion, { AccordionItem } from "$lib/components/Accordion";
  import Button from "$lib/components/Button";
  import Card from "$lib/components/Card/Card.svelte";
  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Icon from "$lib/components/Icon";
  import { url as arrowIcon } from "$icons/arrow_forward";

  export let data;
  $: ({
    pageMetadataMap,
    title,
    subheading,
    description,
    heroImage,
    serviceListName,
    serviceEntries,
    serviceGroups,
    contactInfoCollection,
    additionalResources,
    links,
    blurhashes,
  } = data);

  const hasServiceEntries = serviceEntries && serviceEntries.length > 0;
  const hasServiceGroups = serviceGroups && serviceGroups.length > 0;
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
  <ContentfulRichText document={description?.json} {pageMetadataMap} {links} {blurhashes} />
{/if}

{#if hasServiceEntries || hasServiceGroups}
  <h2>{serviceListName}</h2>
  <Accordion multiselectable>
    {#if serviceEntries.length > 0}
      {#each serviceEntries as item}
        <AccordionItem title={item?.entryTitle} id={item.sys.id}>
          <ContentfulRichText
            document={item?.description?.json}
            {pageMetadataMap}
            {links}
            {blurhashes}
          />
        </AccordionItem>
      {/each}
    {/if}
  </Accordion>
{/if}

{#if hasServiceGroups}
  <ul class="service-group-list">
    {#each serviceGroups as item}
      <Card class="service-group-card">
        <h3 class="usa-card__heading" slot="header">{item.title}</h3>
        <svelte:fragment slot="body">
          {#if item.subheading}
            {item.subheading}
          {/if}
        </svelte:fragment>
        <Button slot="footer" isLink={true} href={item.url}>
          <Icon src={arrowIcon} size={3} />
        </Button>
      </Card>
    {/each}
  </ul>
{/if}
<div />
{#if contactInfoCollection?.items && contactInfoCollection.items.length > 0}
  <ContactCard address={undefined} contacts={contactInfoCollection.items} class="margin-top-6" />
{/if}
<!-- TODO: Is this where Related Links will get stored? -->
{#if additionalResources}
  <h2>Related links</h2>
  <ContentfulRichText document={additionalResources?.json} {pageMetadataMap} {links} {blurhashes} />
{/if}

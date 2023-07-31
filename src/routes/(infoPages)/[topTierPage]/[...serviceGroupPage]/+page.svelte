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
    serviceGroup: {
      title,
      subheading,
      description,
      heroImage,
      serviceListName,
      contactInfoCollection,
      additionalResources,
    },
    childServiceEntries,
    childServiceGroups,
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
  <ContentfulRichText document={description?.json} links={description?.links} />
{/if}

{#if childServiceEntries.length > 0 || childServiceGroups.length > 0}
  <h2>{serviceListName}</h2>
  {#if childServiceEntries.length > 0}
    <Accordion multiselectable>
      {#each childServiceEntries as item}
        <AccordionItem title={item?.entryTitle} id={item.sys.id}>
          <ContentfulRichText document={item?.description?.json} links={item?.description?.links} />
        </AccordionItem>
      {/each}
    </Accordion>
  {/if}
{/if}
{#if childServiceGroups.length > 0}
  <ul class="service-group-list">
    {#each childServiceGroups as item}
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
  <ContentfulRichText document={additionalResources.json} links={additionalResources.links} />
{/if}

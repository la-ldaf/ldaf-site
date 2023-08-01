<script lang="ts">
  import "../page.scss";
  import Accordion, { AccordionItem } from "$lib/components/Accordion";
  import Button from "$lib/components/Button";
  import Card from "$lib/components/Card/Card.svelte";
  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Icon from "$lib/components/Icon";
  import { url as arrowIcon } from "$icons/arrow_forward";
  import { afterUpdate } from "svelte";

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
    blurhashes,
  } = data);

  $: hasServiceEntries = serviceEntries && serviceEntries.length > 0;
  $: hasServiceGroups = serviceGroups && serviceGroups.length > 0;

  afterUpdate(() => {
    // Call To Actions within service entry accordions are rich text,
    // leaving no way to designate additional formatting/styling for them.
    // We must manually add the required classes to achieve the desired styles.
    // This wasn't always getting applied in `onMount`, so making sure it doesn't
    // Happen prematurely by using `afterUpdate` instead
    document
      .querySelectorAll(".service-entry-CTA a")
      .forEach((linkEl) => linkEl.classList.add("usa-button"));
  });
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
  <ContentfulRichText
    document={description?.json}
    links={description?.links}
    {pageMetadataMap}
    {blurhashes}
  />
{/if}

{#if hasServiceEntries || hasServiceGroups}
  <h2>{serviceListName}</h2>
  <Accordion multiselectable bordered>
    {#if serviceEntries.length > 0}
      {#each serviceEntries as serviceEntry}
        <AccordionItem title={serviceEntry?.entryTitle} id={serviceEntry.sys.id}>
          <ContentfulRichText
            document={serviceEntry?.description?.json}
            links={serviceEntry.description.links}
            {pageMetadataMap}
            {blurhashes}
          />
          {#if serviceEntry.serviceCtaCollection}
            {#each serviceEntry.serviceCtaCollection.items as ctaItem}
              <span class="service-entry-CTA">
                <ContentfulRichText
                  document={ctaItem?.callToActionDestination?.json}
                  links={ctaItem?.callToActionDestination?.links}
                  {pageMetadataMap}
                  {blurhashes}
                />
              </span>
            {/each}
          {/if}

          {#if serviceEntry.contactInformationCollection && serviceEntry.contactInformationCollection.items.length > 0}
            <ContactCard
              address={undefined}
              contacts={serviceEntry.contactInformationCollection?.items}
              class="margin-top-4"
            />
          {/if}
        </AccordionItem>
      {/each}
    {/if}
  </Accordion>
{/if}

{#if hasServiceGroups}
  <ul class="service-group-list">
    {#each serviceGroups as serviceGroup}
      <Card class="service-group-card">
        <h3 class="usa-card__heading" slot="header">{serviceGroup.title}</h3>
        <svelte:fragment slot="body">
          {#if serviceGroup.subheading}
            {serviceGroup.subheading}
          {/if}
        </svelte:fragment>
        <Button slot="footer" isLink={true} href={serviceGroup.url}>
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
  <ContentfulRichText
    document={additionalResources?.json}
    links={additionalResources?.links}
    {pageMetadataMap}
    {blurhashes}
  />
{/if}

<script lang="ts">
  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";

  export let data;
  console.log(data);
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
  <div
    class="usa-accordion usa-accordion--bordered usa-accordion--multiselectable"
    data-allow-multiple
  >
    {#each serviceEntriesCollection.items as serviceEntry}
      <h3 class="usa-accordion__heading">
        <button
          type="button"
          class="usa-accordion__button"
          aria-expanded="true"
          aria-controls="m-a1"
        >
          {serviceEntry?.entryTitle || serviceEntry?.title}
        </button>
      </h3>
      <div id="m-a1" class="usa-accordion__content usa-prose">
        <ContentfulRichText document={serviceEntry?.description?.json} />
      </div>
    {/each}
  </div>
{/if}
<div />
{#if contactInfoCollection}
  <ContactCard address={undefined} contacts={contactInfoCollection?.items} class="margin-top-6" />
{/if}
<!-- TODO: Is this where Related Links will get stored? -->
{#if additionalResources}
  <!-- <ContentfulRichText document={additionalResources?.json} /> -->
{/if}

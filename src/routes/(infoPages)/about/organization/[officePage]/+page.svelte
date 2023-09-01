<script lang="ts">
  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";

  export let data;
  $: ({
    pageTitle,
    subheading,
    description,
    servicesAndPrograms,
    mailingAddress,
    contactsCollection,
  } = data.officePage);
</script>

<h1>{pageTitle}</h1>
<p class="usa-intro">
  {subheading}
</p>
{#if description?.json}
  <ContentfulRichText
    document={description.json}
    links={description?.links}
    imageSizeType="col-9"
  />
{/if}
{#if servicesAndPrograms?.json}
  <h2>Services</h2>
  <ContentfulRichText
    document={servicesAndPrograms.json}
    links={servicesAndPrograms?.links}
    imageSizeType="col-9"
  />
{/if}
<div />
{#if mailingAddress || contactsCollection}
  <ContactCard address={mailingAddress} contacts={contactsCollection?.items} class="margin-top-6" />
{/if}

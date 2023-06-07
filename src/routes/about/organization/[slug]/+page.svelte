<script lang="ts">
  import ContactInfoBox from "$lib/components/ContactInfoBox";
  import ContentfulRichText from "$lib/components/ContentfulRichText";

  export let data;
  $: ({
    pageTitle,
    subheading,
    description,
    servicesAndPrograms,
    mailingAddress,
    contactsCollection,
  } = data);
</script>

<h1>{pageTitle}</h1>
<p class="usa-intro">
  {subheading}
</p>
{#if description}
  <ContentfulRichText document={description?.json} />
{/if}
{#if servicesAndPrograms}
  <h2>Services</h2>
  <ContentfulRichText document={servicesAndPrograms?.json} />
{/if}
<div />
{#if mailingAddress || contactsCollection}
  <ContactInfoBox
    address={mailingAddress}
    contacts={contactsCollection?.items}
    class="margin-top-6"
  />
{/if}

<script lang="ts">
  import ContactCard from "$lib/components/ContactCard";
  import DateComponent from "$lib/components/Date";
  import Link from "$lib/components/Link";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import { months } from "$lib/constants/date.js";

  export let data;
  $: date = new Date(data.event.eventDateAndTime);
</script>

<div class="ldaf-event-page__header">
  <DateComponent dateString={data.event.eventDateAndTime} />
  <h1 class="ldaf-event-page__header__h1">{data.event.shortTitle}</h1>
</div>

{#if data.event?.eventRichTextDescription}
  <ContentfulRichText document={data.event.eventRichTextDescription.json} />
{/if}
<p>
  <strong>Date:</strong>
  {months[date.getMonth()]}
  {date.getDate()}, {date.getFullYear()}<br />
  <strong>Time:</strong>
  {date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true })}
</p>

{#each data?.event?.eventDocumentsCollection?.items ?? [] as documentOrContact (documentOrContact?.sys?.id)}
  {#if documentOrContact?.__typename === "DocumentWrapper"}
    <Link href={documentOrContact?.wrappedDocumentName?.url}>
      <h2>{documentOrContact?.docWrapperName}</h2>
    </Link>
    <p>{documentOrContact?.documentDescription}</p>
  {:else if documentOrContact?.__typename === "Contact"}
    <ContactCard address={documentOrContact.location} contacts={[documentOrContact]} />
  {/if}
{/each}

<style>
  .ldaf-event-page__header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (min-width: 480px) {
    .ldaf-event-page__header {
      display: flex;
      flex-direction: row;
      gap: 17px;
    }
  }
  .ldaf-event-page__header__h1 {
    margin: 0;
    margin-bottom: 16px;
    line-height: 47px;
  }
</style>

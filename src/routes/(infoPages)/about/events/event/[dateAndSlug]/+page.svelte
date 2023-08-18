<script lang="ts">
  import ContactCard from "$lib/components/ContactCard/ContactCard.svelte";
  import DateComponent from "$lib/components/Date/Date.svelte";
  import Link from "$lib/components/Link/Link.svelte";
  import { months } from "$lib/constants/date.js";

  export let data;
  $: dateString =
    typeof data.event.eventDateAndTime == "string" ? data.event.eventDateAndTime : undefined;
  $: date = dateString && new Date(dateString);
</script>

<div class="ldaf-event-page__header">
  {#if dateString}
    <DateComponent {dateString} />
  {/if}
  <h1 class="ldaf-event-page__header__h1">{data.event.shortTitle}</h1>
</div>

<p>{data.event.eventDescription}</p>

{#if date}
  <p>
    <strong>Date:</strong>
    {months[date.getMonth()]}
    {date.getDate()}, {date.getFullYear()}<br />
    <strong>Time:</strong>
    {date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true })}
  </p>
{/if}

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

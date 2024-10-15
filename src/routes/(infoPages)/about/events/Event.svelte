<script lang="ts">
  import type { PageServerData } from "./$types";
  import DateComponent from "$lib/components/Date";
  import Link from "$lib/components/Link";
  import {
    headingTagByLevel,
    type HeadingLevel,
  } from "$lib/components/ContentfulRichText/headings";
  import constructEventSlug from "./constructEventSlug";

  export let event: PageServerData["events"][number];
  export let headingLevel: HeadingLevel = 2;
  export let variation: "big" | "small" = "big";
  $: date = event?.eventDateAndTime ? new Date(event?.eventDateAndTime) : undefined;
</script>

<div class="event">
  {#if event?.eventDateAndTime}
    <DateComponent dateString={event.eventDateAndTime} {variation} />
  {/if}
  <div class="event-details">
    {#if event?.shortTitle}
      <Link
        class="display-block"
        href={date && event?.slug
          ? `/about/events/event/${constructEventSlug(date, event.slug)}`
          : undefined}
      >
        <svelte:element this={headingTagByLevel[headingLevel]} class="event-title">
          {event.shortTitle}
        </svelte:element>
      </Link>
    {/if}
    {#if event?.eventSummary}
      <p class="event-summary">
        {event.eventSummary}
      </p>
    {/if}
  </div>
</div>

<style>
  .event {
    display: flex;
    flex-direction: row;
    gap: 14px;
    padding-bottom: 18px;
    border-bottom: 1px solid #757473; /* replace with $grayscale-90 */
  }

  .event-title {
    font-size: 18px;
    margin: 0;
  }

  .event-summary {
    margin: 0;
  }
</style>

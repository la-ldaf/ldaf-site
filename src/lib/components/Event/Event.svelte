<script lang="ts">
  import DateComponent from "$lib/components/Date";
  import Link from "$lib/components/Link";
  import {
    headingTagByLevel,
    type HeadingLevel,
  } from "$lib/components/ContentfulRichText/headings";
  import constructEventSlug from "./constructEventSlug";

  interface EventData {
    __typename?: "EventEntry";
    slug?: string | null;
    shortTitle?: string | null;
    eventDescription?: string | null;
    eventDateAndTime?: Date | string | null;
    eventSummary?: string | null;
    sys: {
      __typename?: "Sys";
      id: string;
    };
  }

  export let event: NonNullable<EventData>;
  export let headingLevel: HeadingLevel = 2;
  export let variation: "big" | "small" = "big";

  const dateString = event?.eventDateAndTime as string;

  $: date = event?.eventDateAndTime ? new Date(dateString) : undefined;
</script>

<div class="event">
  {#if event?.eventDateAndTime}
    <DateComponent {dateString} {variation} />
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

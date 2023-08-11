<script lang="ts">
  import type { PageServerData } from "./$types";
  import DateComponent from "$lib/components/Date";
  export let event: PageServerData["events"][number];
  $: date = event?.eventDateAndTime ? new Date(event?.eventDateAndTime) : undefined;
</script>

<div class="event">
  {#if event?.eventDateAndTime}
    <DateComponent dateString={event.eventDateAndTime} />
  {/if}
  <div class="event-details">
    {#if event?.shortTitle}
      <a
        href={date && event?.slug
          ? `/about/events/event/${date.toISOString().split("T")[0]}-${event.slug}`
          : undefined}
      >
        <h2 class="event-title">
          {event.shortTitle}
        </h2>
      </a>
    {/if}
    {#if event?.eventDescription}
      <p class="event-description">
        {event.eventDescription}
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
    border-bottom: 1px solid #757473;
  }

  .event-title {
    color: #757473;
    margin: 0;
    font-size: 18px;
    text-decoration: underline;
    font-weight: normal;
  }

  .event-description {
    margin: 0;
  }
</style>

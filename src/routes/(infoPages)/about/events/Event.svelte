<script lang="ts">
  import type { PageServerData } from "./$types";
  import Date from "./Date.svelte";
  export let event: PageServerData["events"][number];
</script>

<div class="event">
  {#if event?.eventDateAndTime}
    <Date dateString={event.eventDateAndTime} />
  {/if}
  <div class="event-details">
    {#if event?.shortTitle}
      <h2 class="event-title">
        {event.shortTitle}
      </h2>
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

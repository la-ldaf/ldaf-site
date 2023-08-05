<script lang="ts">
  import type { PageServerData } from "./$types";
  import Date from "./Date.svelte";
  export let event: PageServerData["events"][number];
</script>

<div class="event">
  <Date dateString={event.eventDateAndTime} />
  <div class="event-details">
    <h2 class="event-title">
      {event.shortTitle}
    </h2>
    <p class="event-description">
      {event.eventDescription}
    </p>
  </div>
</div>

<style lang="scss">
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

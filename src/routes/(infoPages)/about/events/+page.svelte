<script lang="ts">
  import Event from "./Event.svelte";

  export let data;
  $: ({ events, totalEvents } = data);
</script>

<h1>All events</h1>

<div class="events">
  {#each events as event}
    <Event {event} />
  {/each}
</div>

<div class="pagination">
  {totalEvents}
</div>

<style>
  .events {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 18px;
  }
</style>

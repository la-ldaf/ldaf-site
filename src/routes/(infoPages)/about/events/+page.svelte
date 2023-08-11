<script lang="ts">
  import Pagination from "$lib/components/Pagination";
  import Event from "./Event.svelte";

  export let data;
  $: ({ events, currentPageNumber, totalPages } = data);
</script>

<h1>All events</h1>

<div class="events">
  {#each events as event}
    <Event {event} />
  {/each}
</div>

<Pagination
  currentPage={currentPageNumber}
  {totalPages}
  getPageLink={(page) => `/about/events/page/${page}`}
/>

<style>
  .events {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 18px;
  }
</style>

<script lang="ts">
    import Event from "$lib/components/Event";
  import Pagination from "$lib/components/Pagination";

  export let data;
  $: ({ events, currentPageNumber, totalPages } = data);
</script>

<h1>Upcoming events</h1>

{#if events.length === 0}
  <p>There are no upcoming events to show at this time.</p>
{/if}

<!-- See src/routes/(infoPages)/layout.scss for styling. -->
<div class="ldaf-events-list-container">
  {#each events as event}
    {#if event}
      <Event {event} />
    {/if}
  {/each}
</div>

<Pagination
  currentPage={currentPageNumber}
  {totalPages}
  getPageLink={(page) => `/about/events/page/${page}`}
/>

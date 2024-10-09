<script lang="ts">
  import NewsEntry from "$lib/components/NewsEntry";
  import Pagination from "$lib/components/Pagination";

  export let data;
  $: ({ newsEntries, currentPageNumber, totalPages } = data);
</script>

<h1 class="ldaf-news-page--heading">News</h1>

<div>
  {#if newsEntries && newsEntries.length}
    {#each newsEntries as entry}
      {#if entry}
        <NewsEntry {entry} />
      {/if}
    {/each}
  {/if}
</div>

<Pagination
  currentPage={currentPageNumber}
  {totalPages}
  getPageLink={(page) => `/about/news/page/${page}`}
/>

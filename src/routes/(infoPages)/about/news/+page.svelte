<script lang="ts">
  import NewsEntrySnippet from "./NewsEntrySnippet.svelte";
  import Pagination from "$lib/components/Pagination";

  export let data;
  $: ({ newsEntries, currentPageNumber, totalPages } = data);
</script>

<h1 class="ldaf-news-page--heading">News</h1>

<div>
  {#each newsEntries as entry}
    {#if entry}
      <NewsEntrySnippet {entry} />
    {/if}
  {/each}
</div>

<Pagination
  currentPage={currentPageNumber}
  {totalPages}
  getPageLink={(page) => `/about/news/page/${page}`}
/>

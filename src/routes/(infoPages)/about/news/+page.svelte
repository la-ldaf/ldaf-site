<script lang="ts">
  import News from "./News.svelte";
  import Pagination from "$lib/components/Pagination";

  export let data;
  $: ({ newsEntries, currentPageNumber, totalPages } = data);
</script>

<h1>News</h1>

<div>
  {#each newsEntries as entry}
    <News {entry} />
  {/each}
</div>

<Pagination
  currentPage={currentPageNumber}
  {totalPages}
  getPageLink={(page) => `/about/news/page/${page}`}
/>

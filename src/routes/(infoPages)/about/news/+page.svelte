<script lang="ts">
  import Pagination from "$lib/components/Pagination";
  //import Event from "./Event.svelte";

  export let data;
  $: ({ newsArticles, currentPageNumber, totalPages } = data);
</script>

<h1>Latest news articles</h1>

<div class="news-articles">
  {#each newsArticles as article}
    <p>{article.newsArticleTitle}</p>
    <p>{article.newsArticleSubhead}</p>
  {/each}
</div>

<Pagination
  currentPage={currentPageNumber}
  {totalPages}
  getPageLink={(page) => `/about/news/page/${page}`}
/>

<style>
  .news-articles {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 18px;
  }
</style>

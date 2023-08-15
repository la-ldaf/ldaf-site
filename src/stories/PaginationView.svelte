<script lang="ts">
  import Pagination from "$lib/components/Pagination";
  export let currentPage = 1;
  export let totalPages = 9;
  export let getPageLink = (page: number) => `/page/${page}`;
</script>

<Pagination
  {currentPage}
  {totalPages}
  {getPageLink}
  on:paginationClick={(e) => {
    e.preventDefault();
    currentPage = e.detail?.page ?? currentPage;
  }}
/>

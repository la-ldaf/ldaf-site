<script lang="ts">
  import "./Pagination.scss";
  import { createEventDispatcher } from "svelte";
  export let currentPage: number;
  export let totalPages: number;
  export let getPageLink: (page: number) => string | undefined = () => undefined;

  const dispatch = createEventDispatcher();

  // Rules for numeric page links:
  // - 1 is always shown
  // - The last page (e.g., 9) is always shown
  // - The current page is always shown
  // - The two pages before the current page are always shown
  // - The two pages after the current page are always shown
  // - If the current page is less than or equal to 4, the first five pages are always shown
  // - If the current page is greater than or equal to the length minus 4, the last five pages are always shown
  // - Pages are never shown more than once
  //
  // These rules result in the following behavior given a list with 9 pages. Note that there will
  // always be either 6 or 7 numeric page links.
  //
  //            <[1]> [2]  [3]  [4]  [5]  ...  [9]  Next >          (6 number links)
  // < Previous  [1] <[2]> [3]  [4]  [5]  ...  [9]  Next >          (6 number links)
  // < Previous  [1]  [2] <[3]> [4]  [5]  ...  [9]  Next >          (6 number links)
  // < Previous  [1]  [2]  [3] <[4]> [5]  [6] ...  [9]  Next >      (7 number links)
  // < Previous  [1]  ...  [3]  [4] <[5]> [6]  [7] ...  [9]  Next > (7 number links)
  // < Previous  [1]  ...  [4]  [5] <[6]> [7]  [8]  [9]  Next >     (7 number links)
  // < Previous  [1]  ...  [5]  [6] <[7]> [8]  [9]  Next >          (6 number links)
  // < Previous  [1]  ...  [5]  [6] <[7]> [8]  [9]  Next >          (6 number links)
  // < Previous  [1]  ...  [5]  [6]  [7] <[8]> [9]  Next >          (6 number links)
  // < Previous  [1]  ...  [5]  [6]  [7]  [8] <[9]> Next >          (6 number links)

  $: shownPageLinkNumbers = [
    ...new Set([
      1,
      totalPages,
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      ...(currentPage < 4 ? [...Array(5).keys()].map((n) => n + 1) : []),
      ...(currentPage > totalPages - 4 ? [...Array(5).keys()].map((n) => totalPages - n) : []),
    ]),
  ]
    .filter((n) => n > 0 && n <= totalPages)
    .sort((a, b) => a - b);

  $: shownPageLinkNumbersWithLastNumber = shownPageLinkNumbers.map(
    (n, i, arr) => [n, i > 0 ? arr[i - 1] : null] satisfies [number, number | null]
  );

  const handleClickForPage = (page: number) => (e: MouseEvent) => {
    const canceled = dispatch("paginationClick", { page });
    if (canceled) e.preventDefault();
  };
</script>

<div class="ldaf-pagination">
  {#if currentPage > 1}
    <div class="ldaf-pagination__previous-button">
      <a
        href={getPageLink(currentPage - 1)}
        on:click={() =>
          dispatch("paginationClick", { page: currentPage - 1 }, { cancelable: true })}
        >{"<"} Previous</a
      >
    </div>
  {/if}
  <div class="ldaf-pagination__numeric-buttons">
    {#each shownPageLinkNumbersWithLastNumber as [pageLinkNumber, lastPageLinkNumber]}
      {#if lastPageLinkNumber && pageLinkNumber - lastPageLinkNumber > 1}
        <div class="ldaf-pagination__numeric-button ldaf-pagination__ellipsis">…</div>
      {/if}
      <a
        href={getPageLink(pageLinkNumber)}
        on:click={handleClickForPage(pageLinkNumber)}
        class="ldaf-pagination__numeric-button"
        class:ldaf-pagination__numeric-button--selected={pageLinkNumber === currentPage}
      >
        {pageLinkNumber}
      </a>
    {/each}
  </div>
  {#if currentPage < totalPages}
    <div class="ldaf-pagination__next-button">
      <a href={getPageLink(currentPage + 1)} on:click={handleClickForPage(currentPage + 1)}>
        Next >
      </a>
    </div>
  {/if}
</div>

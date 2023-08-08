<script lang="ts">
  export let currentPage: number;
  export let totalPages: number;
  export let getPageLink: (page: number) => string;

  // Rules for numeric page links:
  // - 1 is always shown
  // - The last page (e.g., 9) is always shown
  // - The current page is always shown
  // - The two pages before the current page are always shown
  // - The two pages after the current page are always shown
  // - If the current page is less than or equal to 4, the first five pages are always shown
  // - If the current page is greater than or equal to the length minus 4, the last five pages are always shown
  // - Pages are never shown more than once

  // These rules result in the following behavior given a list with 9 pages. Note that there will
  // always be either 6 or 7 numeric page links.

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
</script>

<div class="pagination">
  {#if currentPage > 1}
    <div class="pagination-previous-button">
      <a href={getPageLink(currentPage - 1)}>{"<"} Previous</a>
    </div>
  {/if}
  <div class="pagination-buttons">
    {#each shownPageLinkNumbersWithLastNumber as [pageLinkNumber, lastPageLinkNumber]}
      {#if lastPageLinkNumber && pageLinkNumber - lastPageLinkNumber > 1}
        <div class="pagination-button pagination-ellipsis">…</div>
      {/if}
      <a
        href={getPageLink(pageLinkNumber)}
        class="pagination-button"
        class:first-pagination-button={pageLinkNumber === 1}
        class:selected-pagination-button={pageLinkNumber === currentPage}
        class:last-pagination-button={pageLinkNumber === totalPages}
      >
        {pageLinkNumber}
      </a>
    {/each}
  </div>
  {#if currentPage < totalPages}
    <div class="pagination-next-button">
      <a href={getPageLink(currentPage + 1)}>Next ></a>
    </div>
  {/if}
</div>

<style>
  .pagination {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .pagination-next-button,
  .pagination-previous-button {
    display: flex;
    height: 40px;
    align-items: center;
  }

  .pagination-buttons {
    display: flex;
    flex-direction: row;
    gap: 7px;
  }

  .pagination-button {
    display: flex;
    width: 40px;
    height: 40px;
    color: #757473;
    border: 1px solid #dfe1e2;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .pagination-ellipsis {
    border: none;
  }

  .selected-pagination-button {
    background: #171717;
    border: 1px solid #171717;
    color: #fff;
  }
</style>

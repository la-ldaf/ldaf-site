<script>
  import { onMount } from "svelte";
  import algoliasearch from "algoliasearch";
  import instantsearch from "instantsearch.js";
  import { hits, searchBox, stats, refinementList, pagination } from "instantsearch.js/es/widgets";
  import { hitTemplate } from "./searchHelpers";

  import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from "$env/static/private";
  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

  onMount(() => {
    const search = instantsearch({
      appId: ALGOLIA_APP_ID,
      apiKey: ALGOLIA_API_KEY,
      searchClient: client,
      indexName: "demo_media",
      configure: {
        hitsPerPage: 3,
        attributesToSnippet: ["content:14"],
        snippetEllipsisText: " [...]",
      },
    });
    search.addWidgets([
      hits({
        container: "#hits",
        templates: {
          empty: "No results found.",
          item(hit) {
            return hitTemplate(hit);
          },
        },
      }),
      searchBox({
        container: "#searchbox",
        placeholder: "Search articles",
        autofocus: false,
      }),
      stats({
        container: "#stats",
        templates: {
          body(hit, { html }) {
            return html` <span role="img" aria-label="emoji">⚡️</span>
              <strong> ${hit.nbHits} </strong> results found
              ${hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``} in
              <strong>${hit.processingTimeMS}ms</strong>`;
          },
        },
      }),
      // refinementList({
      //   container: "#categories",
      //   attribute: "categories",
      //   // autoHideContainer: false,
      //   templates: {
      //     header: "Categories",
      //   },
      // }),
      pagination({
        container: "#pagination",
        showFirst: false,
        showLast: false,
        cssClasses: {
          root: "usa-pagination", // the root element of the widget.
          noRefinementRoot: "", // the root container without results.
          list: "usa-pagination__list", // the list of results.
          item: "", // the item in the list of results.
          firstPageItem: "", // the first item.
          lastPageItem: "", // the last item.
          previousPageItem: "usa-pagination__link-text usa-pagination__previous-page", // the previous item.
          nextPageItem: "usa-pagination__link-text usa-pagination__next-page", // the next item.
          pageItem: "usa-pagination__item usa-pagination__page-no", // the page items.
          selectedItem: "usa-current", // the selected item.
          disabledItem: "", // the disabled item.
          link: "usa-pagination__button", // the link elements.
        },
        templates: {
          next: "Next",
          previous: "Previous",
        },
      }),
    ]);
    search.start();
  });

  export let data;
</script>

{#if data}
  <!-- <div class="left-panel">
    <div id="categories" />
  </div> -->
  <div class="search-results">
    <div id="searchbox" />
    <div id="stats" />
    <div id="hits" />
    <div id="pagination" />
  </div>
{/if}

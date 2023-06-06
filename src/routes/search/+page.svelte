<script>
  import "./search-page.scss";
  import { onMount, afterUpdate } from "svelte";
  import algoliasearch from "algoliasearch";
  import instantsearch from "instantsearch.js";
  import { configure, hits, searchBox, stats, pagination } from "instantsearch.js/es/widgets";
  import { searchHitsTemplate } from "./searchHelpers";

  const ALGOLIA_APP_ID = "9IIDYROXZ5";
  const ALGOLIA_API_KEY = "0eac885faaa4c70dfc9dd8b6ab4ab10f";

  onMount(() => {
    const search = instantsearch({
      searchClient: algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY),
      // TODO: change this the "contentful" index when ready (name subject to change)
      indexName: "media-sample-data",
      routing: true,
    });

    search.addWidgets([
      configure({
        hitsPerPage: 3,
        attributesToSnippet: ["content:14"],
        snippetEllipsisText: " [...]",
      }),
      hits({
        container: ".hits",
        templates: {
          empty: "No results found.",
          item(hit) {
            return searchHitsTemplate(hit);
          },
        },
      }),
      searchBox({
        container: ".searchbox",
        placeholder: "Search articles",
        autofocus: false,
        cssClasses: {
          // root: // the root element of the widget.
          form: "usa-search", // the form element.
          input: "usa-input", // the input element.
          // reset: // the reset button element.
          // resetIcon: // the reset button icon.
          // loadingIndicator: // the loading indicator element.
          // loadingIcon: // the loading indicator icon.
          submit: "usa-button usa-search__submit", // the submit button element.
          submitIcon: "usa-search__submit-icon", // the submit button icon.
        },
      }),
      stats({
        container: ".stats",
        templates: {
          text(data, { html }) {
            let count = "";

            if (data.hasManyResults) {
              count += `${data.nbHits} results`;
            } else if (data.hasOneResult) {
              count += `1 result`;
            } else {
              count += `No result`;
            }

            return html`<strong>${count}${data.query ? ` for "${data.query}"` : ""}</strong>`;
          },
        },
      }),
      pagination({
        container: ".pagination",
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
</script>

<div class="search-results">
  <div class="searchbox" />
  <div class="stats" />
  <div class="hits" />
  <div class="pagination" />
</div>

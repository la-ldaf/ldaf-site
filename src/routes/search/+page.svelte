<script lang="ts">
  import "./search-page.scss";
  import LoadingSpinner from "$lib/components/LoadingSpinner";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import algoliasearch from "algoliasearch";
  import instantsearch from "instantsearch.js";
  import { history } from "instantsearch.js/es/lib/routers";
  import { configure, hits, searchBox, stats, pagination } from "instantsearch.js/es/widgets";
  import { searchHitsTemplate } from "./searchHelpers";

  import {
    PUBLIC_ALGOLIA_APP_ID,
    PUBLIC_ALGOLIA_API_KEY,
    PUBLIC_ALGOLIA_INDEX,
  } from "$env/static/public";

  onMount(() => {
    const search = instantsearch({
      searchClient: algoliasearch(PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_API_KEY),
      indexName: PUBLIC_ALGOLIA_INDEX,
      routing: {
        // The default instantsearch router uses history.pushState, which
        //   messes with SvelteKit's router and leads to all sorts of
        //   navigation problems. We still use all the other built-in
        //   functionality, but override the `push` functionality with
        //   SvelteKit's.
        router: history({
          // https://github.com/algolia/instantsearch/blob/69ec7deba05a60a223b833c6a117d5a0f2e83012/packages/instantsearch.js/src/lib/routers/history.ts#L117
          push: (url) => {
            goto(url);
          },
        }),
        // Following is roughly adapted from this example:
        //   https://www.algolia.com/doc/guides/building-search-ui/going-further/routing-urls/js/#example-of-implementation
        // For some reason setting `router` above locks us into a much more
        //   rigid type definition for `stateMapping`, which is not necessary.
        // TODO: Look into how we can get TS passing here; might rely on an
        //       an update to instantsearch.
        stateMapping: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          stateToRoute(uiState) {
            const indexUiState = uiState[PUBLIC_ALGOLIA_INDEX];
            return {
              q: indexUiState.query,
              page: indexUiState.page,
            };
          },
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          routeToState(routeState) {
            return {
              [PUBLIC_ALGOLIA_INDEX]: {
                query: routeState.q,
                page: routeState.page,
              },
            };
          },
        },
      },
      // TODO: searchFunction is being deprecated, replace with onStateChange
      // https://www.algolia.com/doc/api-reference/widgets/instantsearch/js/#widget-param-onstatechange
      searchFunction(helper) {
        const searchUI = document.querySelectorAll(".stats, .hits, .pagination");

        searchUI.forEach((element) => {
          if (!(element instanceof HTMLElement)) return;
          element.style.display = helper.state.query === "" ? "none" : "";
        });

        if (helper.state.query === "") {
          return;
        }

        helper.search();
      },
    });

    search.addWidgets([
      configure({
        hitsPerPage: 10,
        snippetEllipsisText: " [...]",
      }),
      hits({
        container: ".hits",
        templates: {
          empty: () => "No results found.",
          item: searchHitsTemplate,
        },
      }),
      searchBox({
        container: ".searchbox",
        placeholder: "Search LDAF",
        autofocus: true,
        showReset: false,
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
            let count = "No results";

            if (data.hasManyResults) {
              count = `${data.nbHits} results`;
            } else if (data.hasOneResult) {
              count = "1 result";
            }

            return html`<strong>${count}${data.query ? ` for "${data.query}"` : ""}</strong>`;
          },
        },
      }),
      pagination({
        container: ".pagination",
        showFirst: true,
        showLast: true,
        cssClasses: {
          root: "usa-pagination", // the root element of the widget.
          noRefinementRoot: "", // the root container without results.
          list: "usa-pagination__list", // the list of results.
          item: "", // the item in the list of results.
          lastPageItem: "", // the last item.
          previousPageItem: "usa-pagination__link-text usa-pagination__previous-page", // the previous item.
          nextPageItem: "usa-pagination__link-text usa-pagination__next-page", // the next item.
          pageItem: "usa-pagination__item usa-pagination__page-no", // the page items.
          selectedItem: "usa-current", // the selected item.
          disabledItem: "", // the disabled item.
          link: "usa-pagination__button", // the link elements.
        },
        templates: {
          next: () => "Next",
          previous: () => "Previous",
        },
      }),
    ]);

    // TODO: consider toggling this flag on subsequent
    // searches if a slowness threshold is reached.
    loading = false;
    search.start();
  });

  let loading = true;
</script>

{#if loading}
  <LoadingSpinner />
{/if}

<div class="search-results">
  <div class="searchbox" />
  <div class="stats" />
  <div class="hits" />
  <div class="pagination" />
</div>

// import type { Hit } from "@algolia/client-search";
// import type { AlgoliaHit, HitHighlightResult } from "instantsearch.js";

export function searchHitsTemplate(hit) {
  // Note: under the post-excerpt div, replaced hit._highlightResult.content.value with
  // hit._snippetResult.content.value, which seems more concise. Could be subject to change.

  return `
    <div>
      <article>
        <div class="post-content">
          <h2 class="entry-title">
            <a class="usa-link" href="${hit.permalink}" rel="bookmark">
            ${hit._highlightResult.post_title.value}
            </a>
          </h2>
          <div class="post-excerpt">
            ${hit._snippetResult.content.value}
          </div>
        </div>
      </article>
    </div>`;
}

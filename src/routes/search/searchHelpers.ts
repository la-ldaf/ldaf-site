import type { Hit, TemplateWithBindEvent } from "instantsearch.js";

// This function doesn't seem necessary from viewing Algolia's actual responses but the TypeScript
// types demand either this or some nasty type assertions to be satisfied. If we can determine that
// we never get nested data like this function expects then we can remove this and use type
// assertions instead.
type ResultObj = { value?: Result | string | undefined };
type Result = ResultObj | ResultObj[];
const maxDepth = 10;
const getHighlightOrSnippetResultValue = (
  result: Result | undefined,
  depth = 0
): string | undefined => {
  if (depth > maxDepth || result == undefined) return;
  if (Array.isArray(result)) {
    return result
      .map((r) => getHighlightOrSnippetResultValue(r, depth + 1))
      .filter(Boolean)
      .join("");
  }
  if (typeof result.value === "string") return result.value;
  return getHighlightOrSnippetResultValue(result, depth + 1);
};

export const searchHitsTemplate: TemplateWithBindEvent<Hit<{ url?: string }>> = (hit) => {
  // hit._highlightResult is will only ever
  return `
    <div>
      <article>
        <div class="post-content">
          <h2 class="entry-title">
            <a class="usa-link" href="${hit.url}" rel="bookmark">
              ${getHighlightOrSnippetResultValue(hit._highlightResult?.metaTitle)}
            </a>
          </h2>
          <div class="post-excerpt">
            ${getHighlightOrSnippetResultValue(hit._highlightResult?.metaDescription)}
          </div>
        </div>
      </article>
    </div>`;
};

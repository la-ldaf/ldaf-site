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

export const searchHitsTemplate: TemplateWithBindEvent<Hit<{ permalink?: string }>> = (hit) =>
  // Note: under the post-excerpt div, replaced hit._highlightResult.content.value with
  // hit._snippetResult.content.value, which seems more concise. Could be subject to change.
  `
    <div>
      <article>
        <div class="post-content">
          <h2 class="entry-title">
            <a class="usa-link" href="${hit.permalink}" rel="bookmark">
              ${getHighlightOrSnippetResultValue(hit._highlightResult?.post_title)}
            </a>
          </h2>
          <div class="post-excerpt">
            ${getHighlightOrSnippetResultValue(hit._snippetResult?.content)}
          </div>
        </div>
      </article>
    </div>`;

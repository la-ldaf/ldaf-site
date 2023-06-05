export function searchHitsTemplate(hit) {
  console.log(hit);
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

// Replaced  <!--${hit._snippetResult.content.value}--> with  ${hit._highlightResult.content.value}

export function hitTemplate(hit) {
  //   <div class="post-meta-info">
  //   ${hit.time_to_read} min read in ${hit._highlightResult.categories.map((x) => x.value).join(", ")}
  // </div>

  console.log(hit);
  return `
    <div>
      <article>
        <div class="post-content">
          <div class="post-date">
            ${hit.post_date_formatted}
          </div>
          <h2 class="entry-title">
            <a href="${hit.permalink}" rel="bookmark">
            ${hit._highlightResult.post_title.value}
            </a>
          </h2>
          <div class="post-excerpt">
            ${hit._highlightResult.content.value}
          </div>
        </div>
      </article>
    </div>`;
}

// Replaced  <!--${hit._snippetResult.content.value}--> with  ${hit._highlightResult.content.value}

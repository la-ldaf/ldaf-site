<script lang="ts">
  import Link from "$lib/components/Link";
  import Tag from "$lib/components/Tag";
  import {
    headingTagByLevel,
    type HeadingLevel,
  } from "$lib/components/ContentfulRichText/headings";
  import { getDateStringFromUTCDate } from "$lib/util/dates";

  import type { PageServerData } from "./$types";

  type NewsSnippetVariation = "default" | "homepage-featured" | "homepage-listed";

  export let entry: NonNullable<PageServerData["newsEntries"][number]>;
  export let headingLevel: HeadingLevel = 2;
  export let variation: NewsSnippetVariation = "default";

  $: ({ slug, title, subhead, byline, type, publicationDate } = entry);

  $: dateString = getDateStringFromUTCDate(publicationDate);

  $: isArticle = type === "News article";
</script>

{#if title && slug}
  <div class={`ldaf-news-entry ldaf-news-entry--${variation}`}>
    <Link href={`/about/news/article/${slug}`}>
      <svelte:element this={headingTagByLevel[headingLevel]} class="news-title">
        {title}
      </svelte:element>
    </Link>
    {#if variation === "homepage-listed"}
      <div class="margin-bottom-1"><Tag>{type}</Tag></div>
    {/if}
    {#if subhead && variation !== "homepage-listed"}
      <p class="margin-y-1">{subhead}</p>
    {/if}
    <div class="font-body-2xs">
      {#if isArticle && byline}
        By {byline}<br />
      {/if}
      {dateString}
    </div>
    {#if variation !== "homepage-listed"}
      <div class="margin-y-1">
        <Tag>{type}</Tag>
      </div>
    {/if}
  </div>
  <hr class="margin-bottom-2" />
{/if}

<style>
  .news-title {
    font-size: 18px;
    margin: 0;
  }
</style>

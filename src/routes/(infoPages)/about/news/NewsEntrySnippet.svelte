<script lang="ts">
  import Link from "$lib/components/Link";
  import Tag from "$lib/components/Tag";
  import {
    headingTagByLevel,
    type HeadingLevel,
  } from "$lib/components/ContentfulRichText/headings";
  import { getDateStringFromUTCDate } from "$lib/util/dates";

  import type { PageServerData } from "./$types";

  export let entry: NonNullable<PageServerData["newsEntries"][number]>;
  export let headingLevel: HeadingLevel = 2;

  $: ({ slug, title, subhead, byline, type, publicationDate } = entry);

  $: dateString = getDateStringFromUTCDate(publicationDate);

  $: isArticle = type === "News article";
</script>

{#if title && slug}
  <div class="ldaf-news-entry">
    <Link href={`/about/news/article/${slug}`}>
      <svelte:element this={headingTagByLevel[headingLevel]} class="news-title">
        {title}
      </svelte:element>
    </Link>
    {#if subhead}
      <p>{subhead}</p>
    {/if}
    <div class="font-body-2xs">
      {#if isArticle && byline}
        By {byline}<br />
      {/if}
      {dateString}
    </div>
    <div class="margin-top-1 margin-bottom-2">
      <Tag>{type}</Tag>
    </div>
  </div>
  <hr />
{/if}

<style>
  .news-title {
    font-size: 18px;
    margin: 0;
  }
</style>

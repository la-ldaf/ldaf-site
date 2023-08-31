<script lang="ts">
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Link from "$lib/components/Link";
  import Tag from "$lib/components/Tag";
  import { getDateStringFromUTCDate } from "$lib/util/dates";

  import type { PageServerData } from "./$types";

  export let entry: NonNullable<PageServerData["newsEntries"][number]>;

  $: ({ slug, title, body, byline, type, publicationDate } = entry);

  $: if (body?.json?.content?.length) {
    body.json.content.length = 1;
  }

  $: dateString = getDateStringFromUTCDate(publicationDate);

  $: isArticle = type === "News article";
</script>

{#if title && slug}
  <div class="ldaf-news-entry">
    <Link href={`/about/news/article/${slug}`}>
      <h2 class="font-body-lg">{title}</h2></Link
    >
    {#if body?.json}
      <ContentfulRichText document={body.json} links={body?.links} imageSizeType="col-9" />
    {/if}
    <div class="font-body-2xs">
      {#if isArticle && byline}
        By {byline}<br />
      {/if}
      {dateString}
    </div>
    <div class="margin-top-1 margin-bottom-2">
      <!-- TODO: LDAF-402 support additional tags -->
      <Tag>{type}</Tag>
    </div>
  </div>
  <hr />
{/if}

<script lang="ts">
  import "./page.scss";

  import { months } from "$lib/constants/date";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Tag from "$lib/components/Tag";

  export let data;
  $: ({
    newsArticle: { title, byline, publicationDate, type, subhead, body },
  } = data);
  // We only care about the date, not the timestamp.
  // TODO: Update using work completed in #378
  $: [date] = publicationDate ? publicationDate.split("T") : "";
  $: [year, month, day] = date.split("-");
  $: dateString = `${months[month - 1]} ${day.replace(/^0+/, "")}, ${year}`;

  $: isPressRelease = type === "Press release";
  $: isArticle = type === "News article";
</script>

<div><strong>News</strong></div>
<h1 class="ldaf-news-entry--heading">{title}</h1>
{#if isArticle}
  <div class="font-body-2xs">
    {#if byline}
      {byline}<br />
    {/if}
    {dateString}
  </div>
{/if}
<div class="margin-top-1 margin-bottom-2">
  <!-- TODO: LDAF-402 support additional tags -->
  <Tag>{type}</Tag>
</div>
{#if subhead}
  <p class="usa-intro">
    {subhead}
  </p>
{/if}
{#if isPressRelease}
  <strong>For immediate release: {dateString}</strong>
{/if}
<ContentfulRichText document={body?.json} />

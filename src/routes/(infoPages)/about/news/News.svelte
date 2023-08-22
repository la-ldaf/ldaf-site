<script lang="ts">
  import { months } from "$lib/constants/date";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Link from "$lib/components/Link";
  import type { PageServerData } from "./$types";
  export let entry: PageServerData["newsEntries"][number];

  $: if (entry?.body?.json?.content?.length) {
    entry.body.json.content.length = 1;
  }
  // We only care about the date, not the timestamp.
  // TODO: Update using work completed in #378
  $: [date] = entry?.publicationDate ? entry.publicationDate.split("T") : "";
  $: [year, month, day] = date.split("-");
  $: dateString = `${months[month - 1]} ${day.replace(/^0+/, "")}, ${year}`;
</script>

{#if entry}
  {@const { slug, title, body, byline, type } = entry}
  {#if title && slug}
    <div class="news-entry">
      <Link href={`/about/news/article/${slug}`}>
        <h2>{title}</h2></Link
      >
      {#if body?.json}
        <ContentfulRichText document={body.json} />
      {/if}
      {#if byline}
        <p>{byline}</p>
      {/if}
      <p>
        {dateString}
      </p>
      <p>
        {type}
      </p>
    </div>
  {/if}
{/if}

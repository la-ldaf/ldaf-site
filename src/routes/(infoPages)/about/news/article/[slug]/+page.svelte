<script lang="ts">
  import "./page.scss";

  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Image from "$lib/components/Image";
  import Tag from "$lib/components/Tag";
  import { getSources } from "$lib/imageServices/contentful";
  import { getDateStringFromUTCDate } from "$lib/util/dates";
  import Event from "$lib/components/Event";
  import NewsEntry from "$lib/components/NewsEntry";

  export let data;
  $: ({
    newsArticle: {
      title,
      byline,
      publicationDate,
      type,
      heroImage,
      subhead,
      body,
      contactInformationCollection,
      relatedLinks,
      relatedEventsCollection,
      relatedNewsCollection,
    },
  } = data);

  $: dateString = getDateStringFromUTCDate(publicationDate);

  $: isPressRelease = type === "Press release";
  $: isArticle = type === "News article";
</script>

<div><strong>News</strong></div>
<h1 class="ldaf-news-entry--heading">{title}</h1>
{#if isArticle}
  <div class="font-body-2xs">
    {#if byline}
      By {byline}<br />
    {/if}
    {dateString}
  </div>
{/if}
<div class="margin-top-1 margin-bottom-2">
  <!-- TODO: LDAF-402 support additional tags -->
  <Tag>{type}</Tag>
</div>
{#if heroImage?.imageSource?.url}
  <Image
    src={heroImage.imageSource.url}
    sources={getSources}
    blurhash={heroImage.imageSource.blurhash}
    alt={heroImage.imageSource.description ?? "Hero image"}
    width={heroImage.imageSource.width}
    height={heroImage.imageSource.height}
    sizeType="col-9"
    loading="eager"
  />
  {#if heroImage.fotogCredit}
    <p class="font-sans-3xs text-base-dark">
      Photo credit: {heroImage.fotogCredit}
    </p>
  {/if}
{/if}
{#if subhead}
  <p class="usa-intro">
    {subhead}
  </p>
{/if}
{#if isPressRelease}
  <p>
    <strong>For immediate release: {dateString}</strong>
  </p>
{/if}

{#if body?.json}
  <ContentfulRichText document={body.json} links={body?.links} imageSizeType="col-9" />
{/if}

<div />
{#if contactInformationCollection?.items && contactInformationCollection.items.length > 0}
  <ContactCard
    address={undefined}
    contacts={contactInformationCollection.items}
    class="margin-top-6"
  />
{/if}

{#if relatedLinks}
  <h2>Related links</h2>
  <ContentfulRichText
    document={relatedLinks.json}
    links={relatedLinks.links}
    imageSizeType="col-9"
  />
{/if}

{#if relatedEventsCollection?.items && relatedEventsCollection?.items.length > 0}
  <h2>Related events</h2>
  <!-- See src/routes/(infoPages)/layout.scss for styling. -->
  <div class="ldaf-events-list-container">
    {#each relatedEventsCollection?.items as event (event?.sys.id)}
      {#if event}
        <Event {event} />
      {/if}
    {/each}
  </div>
{/if}

{#if relatedNewsCollection?.items && relatedNewsCollection?.items.length > 0}
  <h2>Related news</h2>
  {#each relatedNewsCollection?.items as entry (entry?.sys.id)}
    {#if entry}
      <NewsEntry {entry} />
    {/if}
  {/each}
{/if}

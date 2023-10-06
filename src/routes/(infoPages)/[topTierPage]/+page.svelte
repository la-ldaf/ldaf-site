<script lang="ts">
  import { url as arrowIcon } from "$icons/arrow_forward";

  import Button from "$lib/components/Button";
  import Card, { CardGroup } from "$lib/components/Card";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Icon from "$lib/components/Icon";
  import VideoCard from "$lib/components/VideoCard";
  import Image from "$lib/components/Image";
  import NewsEntrySnippet from "../about/news/NewsEntrySnippet.svelte";
  import Event from "../about/events/Event.svelte";
  import { getSources } from "$lib/imageServices/contentful";

  export let data;
  $: ({ topTierPage } = data);
  $: ({ subheading, video, description, featuredServices, relatedNews, relatedEvents } =
    topTierPage);
  $: ({ videoUrl, youtubeVideoData } = video);
  $: videoTitle = video?.videoTitle ?? youtubeVideoData?.title;
  $: videoDescription = video?.videoSubhead ?? youtubeVideoData?.description;
  $: ({ thumbnails: videoThumbnails } = youtubeVideoData ?? ({} as Record<string, undefined>));
</script>

{#if subheading}
  <h2>
    {subheading}
  </h2>
{/if}
{#if description?.json}
  <ContentfulRichText document={description.json} />
{/if}
{#if videoUrl}
  <VideoCard
    class="margin-bottom-4"
    url={videoUrl}
    title={videoTitle}
    description={videoDescription}
    thumbnails={videoThumbnails}
    variation="secondary"
    sizeType="hero-col-9"
  />
{/if}
{#if featuredServices && featuredServices.length > 0}
  <CardGroup>
    {#each featuredServices as item, index (item?.pageMetadata?.sys.id)}
      <!-- TODO: Can't conditionally render a named slot, but ideally we only declare Card once here. -->
      {#if item?.heroImage?.imageSource?.url}
        <Card class={`ldaf-card--size-${index < 1 ? "full" : "half"}`}>
          <h3 class="usa-card__heading" slot="header">{item.title}</h3>
          <Image
            slot="image"
            src={item.heroImage.imageSource.url}
            sources={getSources}
            alt={item.heroImage.imageSource.title ?? "Hero image"}
            blurhash={item.heroImage.imageSource.blurhash ?? undefined}
            height={item.heroImage.imageSource.height ?? undefined}
            width={item.heroImage.imageSource.width ?? undefined}
            sizeType="card"
          />
          <svelte:fragment slot="body">
            {#if item.subheading}
              {item.subheading}
            {/if}
          </svelte:fragment>
          <Button
            slot="footer"
            isLink={true}
            variant={index < 1 ? "primary" : "outline"}
            href={item.url}
          >
            <Icon src={arrowIcon} size={3} />
          </Button>
        </Card>
      {:else}
        <Card class={`ldaf-card--size-${index < 1 ? "full" : "half"}`}>
          <h3 class="usa-card__heading" slot="header">{item.title}</h3>
          <svelte:fragment slot="body">
            {#if item.subheading}
              {item.subheading}
            {/if}
          </svelte:fragment>
          <Button
            slot="footer"
            isLink={true}
            variant={index < 1 ? "primary" : "outline"}
            href={item.url}
          >
            <Icon src={arrowIcon} size={3} />
          </Button>
        </Card>
      {/if}
    {/each}
  </CardGroup>
{/if}
{#if relatedNews?.items && relatedNews.items.length > 0}
  <h3>Recent news</h3>
  {#each relatedNews.items as entry (entry?.sys.id)}
    {#if entry}
      <NewsEntrySnippet {entry} headingLevel={4} />
    {/if}
  {/each}
{/if}

{#if relatedEvents?.items && relatedEvents.items.length > 0}
  <h3>Upcoming events</h3>
  <div class="ldaf-events-list-container">
    {#each relatedEvents.items as event (event?.sys.id)}
      <Event {event} headingLevel={4} />
    {/each}
  </div>
{/if}

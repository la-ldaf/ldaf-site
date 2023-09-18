<script lang="ts">
  import "./page.scss";

  import { url as arrowIcon } from "$icons/arrow_forward";

  import Button, { type Variant } from "$lib/components/Button";
  import Card from "$lib/components/Card";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Icon from "$lib/components/Icon";
  import VideoCard from "$lib/components/VideoCard";
  import Image from "$lib/components/Image";
  import { getSources } from "$lib/imageServices/contentful";

  export let data;
  $: ({ topTierPage } = data);
  $: ({ subheading, video, description, featuredServices, relatedNews, relatedEvents } =
    topTierPage);
  $: ({ videoUrl, youtubeVideoData } = video);
  $: videoTitle = video?.videoTitle ?? youtubeVideoData?.title;
  $: videoDescription = video?.videoSubhead ?? youtubeVideoData?.description;
  $: ({ thumbnails: videoThumbnails } = youtubeVideoData ?? ({} as Record<string, undefined>));

  const getButtonVariant = (index: number): Variant => {
    switch (index) {
      case 0:
        return "primary";
      case 1:
        return "secondary";
      default:
        return "outline";
    }
  };
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
    url={videoUrl}
    title={videoTitle}
    description={videoDescription}
    thumbnails={videoThumbnails}
    variation="secondary"
    sizeType="hero-col-9"
  />
{/if}
{#if featuredServices && featuredServices.length > 0}
  <ul class="service-group-list">
    {#each featuredServices as item, index (item?.pageMetadata?.sys.id)}
      <!-- TODO: Can't conditionally render a named slot, but ideally we only declare Card once here. -->
      {#if item?.heroImage?.imageSource?.url}
        <Card>
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
          <Button slot="footer" isLink={true} variant={getButtonVariant(index)} href={item.url}>
            <Icon src={arrowIcon} size={3} />
          </Button>
        </Card>
      {:else}
        <Card>
          <h3 class="usa-card__heading" slot="header">{item.title}</h3>
          <svelte:fragment slot="body">
            {#if item.subheading}
              {item.subheading}
            {/if}
          </svelte:fragment>
          <Button slot="footer" isLink={true} variant={getButtonVariant(index)} href={item.url}>
            <Icon src={arrowIcon} size={3} />
          </Button>
        </Card>
      {/if}
    {/each}
  </ul>
{/if}
{#if relatedNews?.items && relatedNews.items.length > 0}
  <h2>Recent news</h2>
{/if}

{#if relatedEvents?.items && relatedEvents.items.length > 0}
  <h2>Upcoming events</h2>
{/if}

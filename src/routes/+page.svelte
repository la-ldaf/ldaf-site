<script lang="ts">
  import "./(infoPages)/[topTierPage]/page.scss";
  import "./page.scss";

  import { url as arrowIcon } from "$icons/arrow_forward";

  import { getSources } from "$lib/imageServices/contentful";
  import CommissionerBackgroundImage from "$lib/components/Header/CommissionerBackgroundImage.svelte";

  import Button, { type Variant } from "$lib/components/Button";
  import Card from "$lib/components/Card";
  import Icon from "$lib/components/Icon";
  import Image from "$lib/components/Image";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import VideoCard from "$lib/components/VideoCard";
  import ResourceLinks from "$lib/components/ResourceLinks";

  export let data;
  $: ({
    homePage: {
      heroVideo,
      featuredServices,
      popularResources,
      commissionerGreeting,
      commissionerByline,
      commissionerHeadshot,
    },
  } = data);

  const getCardSettings = (
    index: number,
  ): { card: "full" | "half" | "third"; button: Variant; imageLoading: "lazy" | "eager" } => {
    if (index === 0) return { card: "full", button: "primary", imageLoading: "eager" };
    else if (index < 3) return { card: "half", button: "secondary", imageLoading: "eager" };
    else return { card: "third", button: "outline", imageLoading: "lazy" };
  };
</script>

<main id="main-content" class="grid-container usa-prose margin-top-2">
  {#if heroVideo && heroVideo.videoUrl}
    {@const { videoUrl, videoTitle, videoSubhead, youtubeVideoData } = heroVideo}
    {@const { title, description, thumbnails, blurhash } = youtubeVideoData ?? {}}
    <VideoCard
      url={videoUrl}
      title={videoTitle ?? title}
      description={videoSubhead ?? description}
      {thumbnails}
      {blurhash}
      variation="hero"
    />
  {/if}
  {#if featuredServices}
    <!-- TODO: [LDAF-370] Set up a <CardGroup/> component to handle layout. -->
    <ul class="service-group-list">
      {#each featuredServices as item, index (item?.pageMetadata?.sys.id)}
        {@const { card: cardSize, button: buttonVariant, imageLoading } = getCardSettings(index)}
        <!-- TODO: Can't conditionally render a named slot, but ideally we only declare Card once here. -->
        {#if item?.heroImage?.imageSource?.url}
          <Card class={`usa-card--${cardSize}`}>
            <h2 class="usa-card__heading" slot="header">{item.title}</h2>
            <Image
              slot="image"
              src={item.heroImage.imageSource.url}
              alt={item.heroImage.imageSource.title || "Card image"}
              sources={getSources}
              blurhash={item.heroImage.imageSource?.blurhash ?? undefined}
              width={item.heroImage.imageSource.width ?? undefined}
              height={item.heroImage.imageSource.height ?? undefined}
              sizeType="card"
              loading={imageLoading}
            />
            <svelte:fragment slot="body">
              {#if item.subheading}
                {item.subheading}
              {/if}
            </svelte:fragment>
            <Button slot="footer" isLink={true} variant={buttonVariant} href={item.url}>
              <Icon src={arrowIcon} size={3} />
            </Button>
          </Card>
        {:else}
          <Card class={`usa-card--${cardSize}`}>
            <h2 class="usa-card__heading" slot="header">{item.title}</h2>
            <svelte:fragment slot="body">
              {#if item.subheading}
                {item.subheading}
              {/if}
            </svelte:fragment>
            <Button slot="footer" isLink={true} variant={buttonVariant} href={item.url}>
              <Icon src={arrowIcon} size={3} />
            </Button>
          </Card>
        {/if}
      {/each}
    </ul>
  {/if}
  {#if popularResources && popularResources.length > 0}
    <h2 class="ldaf-homepage__popular-resources-heading">Popular resources</h2>
    <ResourceLinks links={popularResources} />
  {/if}
  <section class=" greeting-wrapper" aria-label="Introduction">
    <div class="greeting-overlay">
      <CommissionerBackgroundImage class="greeting-background" />
      <div class="grid-container commissioner-greeting">
        <div class="greeting-body">
          <ContentfulRichText document={commissionerGreeting.json} />
          <p class="commissioner-byline">{commissionerByline}</p>
        </div>
        <div class="commissioner-portrait-wrapper">
          <Image
            class="commissioner-portrait-img"
            src={commissionerHeadshot.url}
            alt={commissionerHeadshot.title ?? "Commissioner Image"}
            blurhash={commissionerHeadshot.blurhash ?? undefined}
            width={commissionerHeadshot.width ?? undefined}
          />
        </div>
      </div>
    </div>
  </section>
</main>

<script lang="ts">
  import "./(infoPages)/[topTierPage]/page.scss";
  import "./page.scss";

  import { url as arrowIcon } from "$icons/arrow_forward";

  import { getSources } from "$lib/imageServices/contentful";

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
      commissionerBackground,
    },
  } = data);

  const getCardSettings = (
    index: number,
  ): { card: "full" | "half" | "third"; button: Variant; imageLoading: "lazy" | "eager" } => {
    switch (index) {
      case 0:
        return { card: "full", button: "primary", imageLoading: "eager" };
      case 1:
      case 2:
        return { card: "half", button: "secondary", imageLoading: "lazy" };
      default:
        return { card: "third", button: "outline", imageLoading: "lazy" };
    }
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
          {@const {
            heroImage: {
              imageSource: { url, title, blurhash, width, height },
            },
          } = item}
          <Card class={`usa-card--${cardSize}`}>
            <h2 class="usa-card__heading" slot="header">{item.title}</h2>
            <Image
              slot="image"
              src={url}
              alt={title || "Card image"}
              sources={getSources}
              {blurhash}
              {width}
              {height}
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
  {#if commissionerGreeting?.json && commissionerByline && commissionerHeadshot?.linkedImage?.url}
    <section class="greeting-wrapper" aria-label="Introduction">
      <!-- This section can render without the background image, so this is optional. -->
      {#if commissionerBackground?.linkedImage?.url}
        {@const {
          linkedImage: { url, blurhash, width, height },
        } = commissionerBackground}
        <Image
          class="greeting-background"
          src={url}
          alt=""
          {blurhash}
          {width}
          {height}
          preserveAspectRatio={false}
          canUpscaleImage
          sources={getSources}
          sizeType="col-12"
          loading="lazy"
        />
      {/if}
      <div class="grid-row grid-gap greeting-content">
        <div class="desktop:grid-col-7 greeting-body">
          <ContentfulRichText document={commissionerGreeting.json} />
          <p class="text-right">{commissionerByline}</p>
        </div>
        <div class="desktop:grid-col-5 greeting-commissioner-portrait-wrapper">
          {#if commissionerHeadshot?.linkedImage?.url}
            {@const {
              linkedImage: { url, height, width, blurhash },
              altText,
            } = commissionerHeadshot}
            {@const diameter = width && height ? Math.min(width, height) : width ?? height}
            <Image
              class="greeting-commissioner-portrait"
              src={url}
              alt={altText ?? "Headshot of the commissioner"}
              {blurhash}
              height={diameter}
              width={diameter}
              sizes="(max-width: 1023px) calc(125px - 6px), 350px"
              sources={getSources}
              loading="lazy"
            />
          {/if}
        </div>
      </div>
    </section>
  {/if}
</main>

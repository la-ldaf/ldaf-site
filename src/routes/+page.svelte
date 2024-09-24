<script lang="ts">
  import "./page.scss";

  import chunk from "lodash/chunk";

  import { url as arrowIcon } from "$icons/arrow_forward";

  import { getSources } from "$lib/imageServices/contentful";

  import Button, { type Variant } from "$lib/components/Button";
  import Card, { CardGroup } from "$lib/components/Card";
  import Icon from "$lib/components/Icon";
  import Image from "$lib/components/Image";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import VideoCard from "$lib/components/VideoCard";
  import ResourceLinks from "$lib/components/ResourceLinks";
  import NewsEntrySnippet from "./(infoPages)/about/news/NewsEntrySnippet.svelte";
  import Event from "./(infoPages)/about/events/Event.svelte";

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
      news,
      events,
    },
  } = data);

  type CardSize = "full" | "half" | "third";
  type CardSettings = { card: CardSize; button: Variant; imageLoading: "lazy" | "eager" };

  const getCardSettings = (index: number, total: number): CardSettings => {
    if (index === 0) {
      // first row is always a single card with a primary style
      return { card: "full", button: "primary", imageLoading: "eager" };
    } else {
      // all other rows have variable sizes depending on the total,
      //   but all have the outline style with lazy loading images
      return { card: getCardSize(index, total), button: "outline", imageLoading: "lazy" };
    }
  };

  // Layout should be organized roughly like so:
  //   |          Card 1          |
  //   |   Card 2    |   Card 3   |
  //   | Card 4 | Card 5 | Card 6 |
  // ... with all subsequent cards also taking up a third width.
  // If we have a single orphan, it should take up full width:
  //   |          Card 7          |
  // If we have two orphans, they should take up a half width:
  //   |   Card 7    |   Card 8   |
  const getCardSize = (index: number, total: number): CardSize => {
    if (index > 0 && index <= 2) {
      // second row with only one card, no other cards following
      if (total === 2) return "full";
      // second row with two cards
      else return "half";
    } else {
      const remainder = (total - 3) % 3;
      // one orphan in the three column layout
      if (remainder === 1 && index + 1 === total) {
        // one orphan in the last row of a three column layout
        return "full";
      } else if (remainder === 2 && index + 2 >= total) {
        // two orphans in the last row of a three column layout
        return "half";
      } else {
        // not the last row, or no orphans in the last row of a three column layout
        return "third";
      }
    }
  };
</script>

<main id="main-content" class="grid-container usa-prose margin-top-3">
  {#if heroVideo && heroVideo.videoUrl}
    {@const { videoUrl, videoTitle, videoSubhead, youtubeVideoData } = heroVideo}
    {@const { title, description, thumbnails, blurhash } = youtubeVideoData ?? {}}
    <VideoCard
      class="margin-bottom-4"
      url={videoUrl}
      title={videoTitle ?? title}
      description={videoSubhead ?? description}
      titleHeadingLevel="h3"
      {thumbnails}
      {blurhash}
      variation="hero"
    />
  {/if}
  {#if featuredServices}
    <CardGroup size="col-12">
      {#each featuredServices as item, index (item?.pageMetadata?.sys.id)}
        {@const {
          card: cardSize,
          button: buttonVariant,
          imageLoading,
        } = getCardSettings(index, featuredServices.length)}
        <!-- TODO: Can't conditionally render a named slot, but ideally we only declare Card once here. -->
        {#if item?.heroImage?.imageSource?.url}
          {@const {
            heroImage: {
              imageSource: { url, title, blurhash, width, height },
            },
          } = item}
          <Card class={`ldaf-card--size-${cardSize}`}>
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
              <Icon src={arrowIcon} size={3} /><span class="usa-sr-only">View {item.title}</span>
            </Button>
          </Card>
        {:else}
          <Card class={`ldaf-card--size-${cardSize}`}>
            <h2 class="usa-card__heading" slot="header">{item.title}</h2>
            <svelte:fragment slot="body">
              {#if item.subheading}
                {item.subheading}
              {/if}
            </svelte:fragment>
            <Button slot="footer" isLink={true} variant={buttonVariant} href={item.url}>
              <Icon src={arrowIcon} size={3} /><span class="usa-sr-only">View {item.title}</span>
            </Button>
          </Card>
        {/if}
      {/each}
    </CardGroup>
  {/if}
  {#if popularResources && popularResources.length > 0}
    <div class="margin-top-6 margin-bottom-10">
      <h2>Popular resources</h2>
      <ResourceLinks links={popularResources} />
    </div>
  {/if}
  {#if news && news.length > 0}
    {@const [featuredEntry, ...listedEntries] = news}
    <div class="margin-bottom-4">
      <h2 class="margin-bottom-0">Recent news</h2>
      <hr class="margin-top-0 margin-bottom-3" />
      <div class="grid-row grid-gap-lg">
        <div class="tablet:grid-col-6">
          {#if featuredEntry}
            <NewsEntrySnippet
              entry={featuredEntry}
              headingLevel={3}
              variation="homepage-featured"
            />
          {/if}
        </div>
        <div class="tablet:grid-col-6">
          {#if listedEntries.length > 0}
            {#each listedEntries as entry (entry?.sys.id)}
              {#if entry}
                <NewsEntrySnippet {entry} headingLevel={3} variation="homepage-listed" />
              {/if}
            {/each}
          {/if}
        </div>
      </div>
    </div>
  {/if}
  {#if events && events.length > 0}
    {@const eventColumns = chunk(events, 2)}
    <div class="margin-bottom-3">
      <h2 class="margin-bottom-0">Upcoming events</h2>
      <hr class="margin-top-0 margin-bottom-3" />
      <div class="grid-row grid-gap-lg">
        {#each eventColumns as column, i (i)}
          <div class="tablet:grid-col-6">
            {#each column as event (event?.sys.id)}
              <div class="margin-bottom-7">
                <Event {event} headingLevel={3} variation="small" />
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  {/if}
  {#if commissionerGreeting?.json && commissionerByline && commissionerHeadshot?.linkedImage?.url}
    <section class="greeting-wrapper margin-bottom-6" aria-label="Introduction">
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
              preserveAspectRatio={false}
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

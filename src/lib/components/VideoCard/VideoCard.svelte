<script lang="ts">
  import "./VideoCard.scss";

  import type { Thumbnails } from "$lib/services/server/youtube";
  import getYoutubeVideoIDFromURL from "$lib/util/getYoutubeVideoIDFromURL";
  import YoutubeSubscribeLink from "$lib/components/YoutubeSubscribeLink";
  import Image, { type Sources, type Srcset } from "$lib/components/Image";
  import getTrimmedFirstParagraph from "./getTrimmedFirstParagraph";

  type VideoCardVariation = "hero" | "primary" | "secondary" | "tertiary";
  interface $$Props {
    class?: string;
    url: string;
    title?: string | null | undefined;
    description?: string | null | undefined;
    variation?: VideoCardVariation;
    blurhash?: string | null | undefined;
    thumbnails?: Thumbnails;
    sizeType?: SizeType;
    titleHeadingLevel?: "h2" | "h3" | "h4";
  }

  let className = "";
  export { className as class };
  export let url = "";
  export let title: $$Props["title"] = null;
  export let description: $$Props["description"] = null;
  export let variation = "primary";

  const maxDescriptionLength = 500;

  $: trimmedFirstParagraph =
    description && getTrimmedFirstParagraph(description, maxDescriptionLength);

  export let thumbnails: Thumbnails | undefined = undefined;
  export let blurhash: string | null | undefined = undefined;

  const getSrcAndSourcesFromThumbnails = (
    thumbs: Thumbnails,
  ): [{ width: number; height: number; url: string }, Sources] => {
    const sorted = Object.values(thumbs).sort((a, b) => a.width - b.width);
    const { width, height, url } = sorted[sorted.length - 1];
    const rest = sorted.slice(0, sorted.length - 1);
    const sources = [
      {
        type: "image/jpg",
        srcset: [url, ...rest.map(({ width, url }) => [url, width])] as Srcset,
      },
    ] as Sources;
    return [{ width, height, url }, sources];
  };

  $: [{ url: thumbSrc, width: thumbWidth, height: thumbHeight }, thumbSources] = thumbnails
    ? getSrcAndSourcesFromThumbnails(thumbnails)
    : [{} as Record<string, undefined>];
  $: youtubeVideoID = getYoutubeVideoIDFromURL(url);

  type SizeType = "hero-full-width" | "hero-col-9";
  export let sizeType: SizeType = "hero-full-width";
  export let titleHeadingLevel = "h3";

  const bodyPadding = "2rem";
  const videoCardPadding = "3rem";
  const videoCardFlexGap = "1.5rem";
  const descriptionWidth = "200px";

  const mobileSizes = [
    `(max-width: 640px) calc(100% - (${bodyPadding} + ${videoCardPadding}))`,
    `(max-width: 1023px) calc(100% - (${bodyPadding} + ${videoCardPadding} + ${videoCardFlexGap} + ${descriptionWidth}))`,
  ];

  const sizesBySizeType: Record<SizeType, string> = {
    "hero-full-width": [...mobileSizes, "632px"].join(", "),
    "hero-col-9": [...mobileSizes, "423px"].join(", "),
  };

  let showYoutubeEmbed = !thumbnails;
  let lastVideoURL = url;
  $: {
    if (lastVideoURL !== url) showYoutubeEmbed = false;
    lastVideoURL = url;
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!(e.key === "Enter" || e.key === " ")) return;
    if (showYoutubeEmbed) return;
    e.preventDefault();
    showYoutubeEmbed = true;
  };
</script>

{#if youtubeVideoID}
  <div class="ldaf-video-card ldaf-video-card--{variation} {className}">
    <div class="ldaf-video-container">
      <noscript>
        <iframe
          class="ldaf-video-embed"
          src={`https://www.youtube-nocookie.com/embed/${youtubeVideoID}?rel=0`}
          title="Embedded YouTube video player"
          frameborder="0"
          allow="encrypted-media;"
          allowfullscreen
        />
      </noscript>
      {#if showYoutubeEmbed}
        <iframe
          class="ldaf-video-embed"
          src={`https://www.youtube-nocookie.com/embed/${youtubeVideoID}?rel=0&autoplay=1`}
          title="Embedded YouTube video player"
          frameborder="0"
          allow="autoplay;encrypted-media;"
          allowfullscreen
        />
      {:else if thumbnails && thumbSrc}
        <div class="ldaf-video-thumbnail-container">
          <button
            class="ldaf-video-youtube-play-button"
            on:click={() => (showYoutubeEmbed = true)}
            on:keydown={handleKeyDown}
            aria-label="Load video"
          >
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"
              ><path
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#f00"
              /><path d="M 45,24 27,14 27,34" fill="#fff" /></svg
            >
          </button>
          <Image
            src={thumbSrc}
            sources={thumbSources}
            sizes={sizesBySizeType[sizeType]}
            {blurhash}
            alt=""
            width={thumbWidth}
            height={thumbHeight}
            preserveAspectRatio={false}
            canUpscaleImage={true}
            loading="eager"
            class="ldaf-video-thumbnail"
            title={title && title}
            on:click={() => (showYoutubeEmbed = true)}
            on:keydown={handleKeyDown}
          />
        </div>
      {/if}
    </div>
    <div class="ldaf-video-info">
      {#if title}
        <svelte:element this={titleHeadingLevel} class="ldaf-video-title">{title}</svelte:element>
      {/if}
      {#if description}
        <p class="ldaf-video-description">{trimmedFirstParagraph}</p>
      {/if}
      <YoutubeSubscribeLink />
    </div>
  </div>
{/if}

<script lang="ts">
  import "./VideoCard.scss";

  import { afterUpdate } from "svelte";

  import getYoutubeVideoData from "$lib/services/youtube";
  import YoutubeSubscribeLink from "$lib/components/YoutubeSubscribeLink";

  type VideoCardVariation = "hero" | "primary" | "secondary" | "tertiary";
  interface $$Props {
    class?: string;
    url: string;
    customTitle?: string | null | undefined;
    customDescription?: string | null | undefined;
    variation?: VideoCardVariation;
  }

  let className = "";
  export { className as class };
  export let url = "";
  export let customTitle: $$Props["customTitle"] = null;
  export let customDescription: $$Props["customDescription"] = null;
  export let variation = "primary";

  let youtubeVideoId: string | null;
  $: {
    const videoUrl = new URL(url);
    if (videoUrl.hostname.includes("youtube.com")) {
      youtubeVideoId = videoUrl.searchParams.get("v");
    } else if (videoUrl.hostname.includes("youtu.be")) {
      youtubeVideoId = videoUrl.pathname.split("/")[1];
    } else {
      youtubeVideoId = null;
      console.warn("Unsupported video type; could not embed video.");
    }
  }

  $: title = customTitle;
  $: description = customDescription;

  afterUpdate(async () => {
    if (youtubeVideoId && (!customTitle || !customDescription)) {
      const snippet = await getYoutubeVideoData(youtubeVideoId);
      if (!customTitle) {
        title = snippet.title;
      }
      if (!customDescription) {
        // Only use the first paragraph instead of rendering with the full
        //   description to avoid trimming at a newline (leaving an orphaned
        //   ellipsis) and to hopefully avoid displaying URLs and hashtags.
        description = snippet.description.split("\n")[0];
      }
    }
  });
</script>

{#if youtubeVideoId}
  <div class="ldaf-video-card ldaf-video-card--{variation} {className}">
    <div class="ldaf-video-container">
      <iframe
        class="ldaf-video-embed"
        src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0`}
        title="Embedded YouTube video player"
        frameborder="0"
        allow="encrypted-media;"
        allowfullscreen
      />
    </div>
    <div class="ldaf-video-info">
      <!-- TODO: [LDAF-369] Support different heading level for hero variation. -->
      {#if title}
        <h3 class="ldaf-video-title">{title}</h3>
      {/if}
      {#if description}
        <p class="ldaf-video-description">{description}</p>
      {/if}
      <YoutubeSubscribeLink />
    </div>
  </div>
{/if}

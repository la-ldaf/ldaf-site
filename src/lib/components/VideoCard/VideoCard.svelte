<script lang="ts">
  import "./VideoCard.scss";

  import { afterUpdate } from "svelte";

  import { PUBLIC_YOUTUBE_CHANNEL_ID } from "$env/static/public";
  import getYoutubeVideoData from "$lib/services/youtube";

  type VideoCardVariation = "hero" | "primary" | "secondary" | "tertiary";

  let className = "";
  export { className as class };
  export let url: string;
  export let title: string | null | undefined;
  export let description: string | null | undefined;
  export let variation: VideoCardVariation = "primary";

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

  afterUpdate(async () => {
    if (youtubeVideoId && (!title || !description)) {
      const snippet = await getYoutubeVideoData(youtubeVideoId);
      title = snippet.title;
      description = snippet.description;
    }
  });
</script>

<!-- TODO: Build out card instead of just embedding video directly in page. -->
<!-- TODO: Make embed responsive. -->
{#if youtubeVideoId}
  {#key youtubeVideoId}
    <div class="ldaf-video-card ldaf-video-card--{variation} {className}">
      <div class="ldaf-video-container">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
          title="Embedded YouTube video"
          frameborder="0"
          allowfullscreen
        />
      </div>
      <div class="ldaf-video-info">
        <!-- https://developers.google.com/youtube/youtube_subscribe_button -->
        {#if title && description}
          <h3>{title}</h3>
          <p>{description}</p>
          <script src="https://apis.google.com/js/platform.js"></script>
          <div
            class="g-ytsubscribe"
            data-channelid={PUBLIC_YOUTUBE_CHANNEL_ID}
            data-layout="default"
            data-count="hidden"
          />
        {/if}
      </div>
    </div>
  {/key}
{/if}

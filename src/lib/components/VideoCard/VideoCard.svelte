<script lang="ts">
  import "./VideoCard.scss";

  type VideoCardVariation = "hero" | "primary" | "secondary" | "tertiary";

  export let url: string;
  // TODO: Support fetching title and description from YouTube if title and description are not provided.
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
</script>

<!-- TODO: Build out card instead of just embedding video directly in page. -->
<!-- TODO: Make embed responsive. -->
{#if youtubeVideoId}
  <div class="ldaf-video-card ldaf-video-card--{variation}">
    <div class="ldaf-video-container">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
        title="Embedded YouTube video"
        frameborder="0"
        allowfullscreen
      />
    </div>
    <div class="ldaf-video-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
{/if}

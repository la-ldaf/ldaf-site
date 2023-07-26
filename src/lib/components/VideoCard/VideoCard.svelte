<script lang="ts">
  export let url: string;
  // TODO: Support fetching title and description from YouTube if title and description are not provided.
  export let title: string | null | undefined;
  export let description: string | null | undefined;

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
  <div class="ldaf-video-card">
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

<style>
  .ldaf-video-card {
    background: #ffd675; /* accent-warm-light */
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding: 12px;
  }
  @media screen and (max-width: 600px) {
    .ldaf-video-container {
      max-width: 560px;
    }
  }

  @media screen and (min-width: 600px) {
    .ldaf-video-container {
      min-width: 560px;
    }
  }
  .ldaf-video-container {
    overflow: hidden;
    border-radius: 5px;
    transform: translateZ(0px);
    height: 315px;
    position: relative;
    display: flex;
    flex: 1 0 auto;
  }
  .ldaf-video-container iframe {
    width: 100%;
    height: 100%;
  }
  .ldaf-video-info {
    flex: 1 1 auto;
    width: 300px;
  }
</style>

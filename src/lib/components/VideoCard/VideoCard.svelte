<script lang="ts">
  export let url: string;
  // TODO: Support fetching title and description from YouTube if title and description are not provided.
  // TODO: Use let, actually use values in card.
  export const title: string | null | undefined = undefined;
  export const description: string | null | undefined = undefined;

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
  <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${youtubeVideoId}`}
    title="Embedded YouTube video"
    frameborder="0"
    allowfullscreen
  />
{/if}

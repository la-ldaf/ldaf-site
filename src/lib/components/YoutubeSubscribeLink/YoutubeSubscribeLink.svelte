<script lang="ts">
  import { url as youtubeIcon } from "$icons/youtube";
  import Link from "$lib/components/Link";
  import Icon from "$lib/components/Icon";
  import { PUBLIC_YOUTUBE_CHANNEL_ID } from "$env/static/public";
</script>

<Link
  href={`https://www.youtube.com/channel/${PUBLIC_YOUTUBE_CHANNEL_ID}?sub_confirmation=1&feature=subscribe-embed-click`}
  class="youtube-subscribe-link"
>
  <Icon src={youtubeIcon} class="youtube-subscribe-icon" />
  Subscribe on YouTube
</Link>

<style>
  :global(.youtube-subscribe-link),
  :global(.youtube-subscribe-link:visited),
  :global(.usa-link.youtube-subscribe-link),
  :global(.usa-link.youtube-subscribe-link:visited) {
    background: #e62117;
    border: 1px solid #d7211a;
    border-radius: 3px;
    color: white;
    text-decoration: none;
    height: 24px;
    padding: 0 8px 0 5.5px;
    font-size: 12px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  :global(.usa-icon.youtube-subscribe-icon) {
    width: 16px;
    height: 16px;
    filter: brightness(0) invert(1);
  }
</style>

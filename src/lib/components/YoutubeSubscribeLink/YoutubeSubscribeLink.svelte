<script lang="ts">
  import "./YoutubeSubscribeLink.scss"
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

<script lang="ts">
  import "../app.scss";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
  import { browser } from "$app/environment";

  let nativeLazyLoading = false;
  if (browser) {
    nativeLazyLoading = "loading" in HTMLImageElement.prototype;
  }
</script>

<RootIntersectionObserver enabled={!nativeLazyLoading}>
  <slot />
</RootIntersectionObserver>

<BlurhashRenderer />

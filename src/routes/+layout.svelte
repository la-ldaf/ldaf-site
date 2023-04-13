<script lang="ts">
  import "../app.scss";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
</script>

<RootIntersectionObserver enabled={intersectionObserverSupport && !lazyImageLoadingSupport}>
  <slot />
</RootIntersectionObserver>

<BlurhashRenderer />

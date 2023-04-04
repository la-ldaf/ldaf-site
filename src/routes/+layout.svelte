<script lang="ts">
  import "../app.scss";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
</script>

<RootIntersectionObserver>
  <slot />
</RootIntersectionObserver>

<BlurhashRenderer />

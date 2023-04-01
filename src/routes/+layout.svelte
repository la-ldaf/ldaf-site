<script lang="ts">
  import "../app.scss";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
</script>

<RootIntersectionObserver>
  <slot />
</RootIntersectionObserver>

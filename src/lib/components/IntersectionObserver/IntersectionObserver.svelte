<script lang="ts">
  import { getContext, hasContext } from "svelte";
  import { browser } from "$app/environment";
  import { getRootObserver, type RootObserver } from "./observe";
  import key from "./key";

  let lastTarget: HTMLElement | undefined = undefined;

  export let target: HTMLElement;
  export let once = false;
  export let onIntersect: (() => void) | undefined = undefined;
  export let enabled = true;

  let intersecting = false;
  $: if (intersecting && onIntersect && enabled) onIntersect();

  let observer: RootObserver | undefined;

  if (browser && hasContext(key) && enabled) {
    observer = getContext<RootObserver>(key);
  } else if (browser && enabled) {
    console.warn(
      "<IntersectionObserver> was not wrapped in a <RootIntersectionObserver>. It will continue to work, but it is more efficient to wrap the page in a single <RootIntersectionObserver> that can be used by all <IntersectionObserver> components. A <RootIntersectionObserver> also allows you to pass options to the IntersectionObserver used behind the scenes."
    );
    observer = getRootObserver();
  }

  $: if (observer && enabled) {
    // If the target has been changed, unobserve the previous target
    if (lastTarget && target !== lastTarget) observer.unobserve(lastTarget);
    if (!target) break $;
    observer.observe(target, ({ isIntersecting }) => (intersecting = isIntersecting), { once });
    lastTarget = target;
  }
</script>

<slot {intersecting} />

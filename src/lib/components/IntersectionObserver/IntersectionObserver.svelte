<script lang="ts">
  import { createEventDispatcher, getContext, hasContext } from "svelte";
  import { browser } from "$app/environment";
  import warn from "$lib/util/warn";
  import { getRootObserver, type RootObserver } from "./observe";
  import key from "./key";

  const dispatch = createEventDispatcher<{ intersect: null }>();

  let lastTarget: Element | undefined = undefined;

  export let target: Element;
  export let once = false;
  export let enabled = true;

  let intersecting = false;
  $: if (enabled && intersecting) dispatch("intersect");

  let observerPromise: Promise<RootObserver | undefined>;
  let observer: RootObserver | undefined;

  if (enabled && browser && hasContext(key)) {
    observerPromise = getContext<Promise<RootObserver | undefined>>(key);
  } else if (browser && enabled) {
    warn(
      "<IntersectionObserver> was not wrapped in a <RootIntersectionObserver>. It will continue to work, but it is more efficient to wrap the page in a single <RootIntersectionObserver> that can be used by all <IntersectionObserver> components. A <RootIntersectionObserver> also allows you to pass options to the IntersectionObserver used behind the scenes.",
    );
    observerPromise = Promise.resolve(getRootObserver());
  } else {
    observerPromise = Promise.resolve(undefined);
  }

  observerPromise.then((resolved) => (observer = resolved));

  $: if (enabled && observer) {
    if (target === lastTarget) break $;
    if (lastTarget) observer.unobserve(lastTarget);
    lastTarget = target;
    if (!target) break $;
    observer.observe(target, ({ isIntersecting }) => (intersecting = isIntersecting), { once });
  }
</script>

<slot {intersecting} />

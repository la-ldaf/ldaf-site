<script lang="ts">
  import type { NavItemType } from "$lib/components/Header/Nav";

  import { navigating } from "$app/stores";
  import { page } from "$app/stores";
  import "../app.scss";
  import Banner from "$lib/components/landingPage/Banner.svelte";
  import Footer from "$lib/components/landingPage/Footer.svelte";
  import Header from "$lib/components/Header";
  import Identifier from "$lib/components/landingPage/Identifier.svelte";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";

  export let data;
  const { navItems }: { navItems: NavItemType[] } = data;

  // Update the active nav item based on the current path.
  let activeNavItemIndex = -1;
  $: {
    activeNavItemIndex = navItems.findIndex(
      (item) => "link" in item && item.link === $page.url.pathname
    );
    navItems.forEach((_, i) => (navItems[i].current = i === activeNavItemIndex));
  }

  let navMenuExpanded = false;
  $: if ($navigating) navMenuExpanded = false;
</script>

<RootIntersectionObserver enabled={intersectionObserverSupport && !lazyImageLoadingSupport}>
  <a class="usa-skipnav" href="#main-content">Skip to main content</a>
  <Banner />
  <div class="usa-overlay" />
  <Header {navItems} bind:navMenuExpanded />
  <main id="main-content">
    <slot />
  </main>
  <Footer />
  <Identifier />
</RootIntersectionObserver>

<BlurhashRenderer />

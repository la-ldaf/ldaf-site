<script lang="ts">
  import { navigating } from "$app/stores";
  import { page } from "$app/stores";
  import "../app.scss";
  import Banner from "$lib/components/landingPage/Banner.svelte";
  import Footer from "$lib/components/landingPage/Footer.svelte";
  import Header from "$lib/components/Header";
  import Identifier from "$lib/components/landingPage/Identifier.svelte";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
  import LoginLink from "$lib/components/LoginLink/LoginLink.svelte";

  export let data;
  const { navItems, secondaryNavItems, siteTitle, previewAuthenticationError } = data;

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
  <Header {navItems} {secondaryNavItems} {siteTitle} bind:navMenuExpanded />
  {#if previewAuthenticationError}
    <div class="usa-section usa-prose grid-container">
      <h1>{previewAuthenticationError.code}</h1>
      <p>{previewAuthenticationError.message}</p>
      <p>(Do you need to <LoginLink>login</LoginLink>?)</p>
    </div>
  {:else}
    <main id="main-content">
      <slot />
    </main>
  {/if}
  <Footer />
  <Identifier />
</RootIntersectionObserver>

<BlurhashRenderer />

<script lang="ts">
  import type { LayoutData } from "./$types";

  import "../app.scss";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import Banner from "$lib/components/Banner";
  import Footer from "$lib/components/Footer";
  import Header from "$lib/components/Header";
  import Identifier from "$lib/components/Identifier";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";

  export let data: LayoutData;
  const { navItems, secondaryNavItems, siteTitle } = data;
</script>

<RootIntersectionObserver enabled={intersectionObserverSupport && !lazyImageLoadingSupport}>
  <a class="usa-skipnav" href="#main-content">Skip to main content</a>
  <Banner />
  <div class="usa-overlay" />
  <Header {navItems} {secondaryNavItems} {siteTitle} />
  <main id="main-content">
    <slot />
  </main>
  <Footer />
  <Identifier />
</RootIntersectionObserver>

<BlurhashRenderer />

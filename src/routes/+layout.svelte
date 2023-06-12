<script lang="ts">
  import { setContext } from "svelte";
  import { navigating, page } from "$app/stores";
  import { browser } from "$app/environment";
  import { beforeNavigate } from "$app/navigation";
  import "../app.scss";
  import Banner from "$lib/components/landingPage/Banner.svelte";
  import Header from "$lib/components/Header";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
  import isInIframe from "$lib/util/isInIframe";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";
  import LoginLink from "$lib/components/LoginLink";

  export let data;

  setContext<CurrentUser | undefined>(currentUserKey, data.currentUser);

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

  // This is a workaround for https://github.com/sveltejs/kit/issues/10122
  let lastPageURL: URL | undefined, lastPageError: App.Error | null | undefined;
  $: ({ url: lastPageURL, error: lastPageError } = $page || {});
  beforeNavigate(({ to }) => {
    const previousPreviewValue = lastPageURL?.searchParams.get("preview");
    if (
      typeof previousPreviewValue === "string" &&
      to &&
      !to?.url.searchParams.has("preview") &&
      !lastPageError &&
      !(to?.url.pathname === "/login" || to?.url.pathname === "/logout")
    ) {
      to?.url.searchParams.set("preview", previousPreviewValue);
    }
  });

  $: inIframe = browser && isInIframe();
  $: loginLinkProps = inIframe ? { target: "_blank" } : {};
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
      <p>
        <!-- The data-sveltekit-reload here shouldn't be necessary but I can't figure out a way to invalidate the previewAuthenticationError from the client side -->
        (Do you need to <LoginLink data-sveltekit-reload {...loginLinkProps}>log in</LoginLink>?)
      </p>
    </div>
  {:else}
    <main id="main-content">
      <slot />
    </main>
    <!-- TODO: reinstate <Footer /> once designed and implemented -->
    <footer class="usa-footer padding-top-7 padding-bottom-1 text-center">
      ©2023 Louisiana Department of Agriculture and Forestry. All rights reserved
    </footer>
    <!-- TODO: reinstate <Identifier /> once designed and implemented -->
    <!-- (or remove if encapsulated by footer) -->
  {/if}
</RootIntersectionObserver>

<BlurhashRenderer />

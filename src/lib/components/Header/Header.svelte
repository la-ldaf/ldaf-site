<script lang="ts">
  import "./Header.scss";
  import { url as closeIcon } from "$icons/close";
  import classNames from "$lib/util/classNames";
  import Icon from "$lib/components/Icon";
  import Link from "$lib/components/Link";
  import Search from "$lib/components/Search";
  import { page } from "$app/stores";
  import Title, { type SiteTitleType } from "./Title";
  import Nav, { type NavItemType, type NavLinkType } from "./Nav";
  import HeaderBackgroundImage from "./HeaderBackgroundImage.svelte";
  import Logo from "./Logo";

  export let primaryNavItems: NavItemType[] = [];
  export let siteTitle: SiteTitleType;
  export let secondaryNavItems: NavLinkType[] = [];

  // Need to export this as a prop so we can reset it on route change.
  export let navMenuExpanded = false;
  const toggleNavMenu = (show: boolean) => (navMenuExpanded = show);

  $: navClassNames = classNames("usa-nav", navMenuExpanded && "is-visible");
</script>

<!-- TODO: Continue replacing parts of this file with components and content from the CMS. -->
<!-- TODO: Possibly add support for other header variations, e.g. usa-header--basic -->
<header class="ldaf-header usa-header usa-header--extended">
  <HeaderBackgroundImage class="ldaf-header-bg-img" />
  <div class="ldaf-nav usa-navbar">
    <Title {siteTitle} />
    <!--TODO: Replace with content from CMS. -->
    <button type="button" class="usa-menu-btn" on:click={() => toggleNavMenu(true)}> Menu </button>
  </div>
  <!-- TODO: Replace aria-label with content from CMS. -->
  <nav aria-label="Primary navigation" class={navClassNames}>
    <div class="usa-nav__inner">
      <button type="button" class="usa-nav__close" on:click={() => toggleNavMenu(false)}>
        <!-- TODO: Replace alt text with content from CMS. -->
        <Icon src={closeIcon} alt="Close" size={3} />
      </button>

      <a class="ldaf-logo__compact" href="/">
        <Logo />
      </a>
      <div class="ldaf-commissioner__compact">
        <span>{siteTitle.commissionerRow1}</span>
        <span class="text-italic">{siteTitle.commissionerRow2}</span>
      </div>

      <Nav items={primaryNavItems} />

      <!-- TODO: Extend <Nav/> to cover secondary nav or build out component with shared dependencies. -->
      <div
        class="ldaf-nav__secondary usa-nav__secondary"
        class:search-page={$page.url.pathname === "/search"}
      >
        <ul class="usa-nav__secondary-links">
          {#each secondaryNavItems as item (item.id)}
            {@const { name, link } = item}
            <li class="usa-nav__secondary-item">
              <Link href={link}>{name}</Link>
            </li>
          {/each}
        </ul>

        {#if $page.url.pathname !== "/search"}
          <section aria-label="Search component">
            <Search size="small" id="ldaf-header-search" />
          </section>
        {/if}
      </div>
    </div>
  </nav>
</header>

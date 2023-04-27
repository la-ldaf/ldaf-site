<script lang="ts">
  import "./Header.scss";
  import ldafLogo from "$lib/assets/ldaf-flat-logo-transparent.png";
  import { url as closeIcon } from "$icons/close";

  import type { NavItemType } from "./Nav";

  import classNames from "$lib/util/classNames";
  import Icon from "$lib/components/Icon";
  import Title from "./Title";
  import Nav from "./Nav";
  import Search from "$lib/components/Search";

  export let navItems: NavItemType[] = [];

  // Need to export this as a prop so we can reset it on route change.
  export let navMenuExpanded = false;
  const toggleNavMenu = (show: boolean) => (navMenuExpanded = show);

  $: navClassNames = classNames("usa-nav", navMenuExpanded && "is-visible");
</script>

<!-- TODO: Continue replacing parts of this file with components and content from the CMS. -->
<!-- TODO: Possibly add support for other header variations, e.g. usa-header--basic -->
<header class="ldaf-header usa-header usa-header--extended">
  <div class="ldaf-nav usa-navbar">
    <Title />
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

      <a class="ldaf-logo-link" href="/" title="<Project title>">
        <img class="ldaf-logo-compact" src={ldafLogo} alt="LDAF Logo" />
      </a>
      <div class="ldaf-agency-commissioner">
        <span>Mike Strain, DVM</span>
        <span class="text-italic">Commissioner</span>
      </div>

      <Nav items={navItems} />

      <!-- TODO: Extend <Nav/> to cover secondary nav or build out component with shared dependencies. -->
      <div class="ldaf-secondary-nav usa-nav__secondary">
        <ul class="usa-nav__secondary-links">
          <li class="usa-nav__secondary-item">
            <a href="/news">Grants and funding</a>
          </li>
          <li class="usa-nav__secondary-item">
            <a href="/documentation" class="usa-current">Licensing and permits</a>
          </li>
        </ul>

        <section aria-label="Search component">
          <Search
            size="small"
            id="ldaf-header-search"
            on:submit={(event) => console.log({ searchTerm: event.detail.searchTerm })}
          />
        </section>
      </div>
    </div>
  </nav>
</header>

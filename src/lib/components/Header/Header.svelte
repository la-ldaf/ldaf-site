<script lang="ts">
  import iconClose from "@uswds/uswds/img/usa-icons/close.svg";
  import iconBgSearchWhite from "@uswds/uswds/img/usa-icons-bg/search--white.svg";
  import "./Header.scss";

  import type NavItemType from "./Nav/NavItemType";

  import classNames from "$lib/util/classNames";
  import Nav from "./Nav";

  export let navItems: NavItemType[] = [];

  // Need to export this as a prop so we can reset it on route change.
  export let navMenuExpanded = false;
  const toggleNavMenu = (show: boolean) => (navMenuExpanded = show);

  $: navClassNames = classNames("usa-nav", navMenuExpanded && "is-visible");
</script>

<!-- TODO: Continue replacing parts of this file with components and content from the CMS. -->
<!-- TODO: Possibly add support for other header variations, e.g. usa-header--basic -->
<header class="usa-header usa-header--extended">
  <div class="usa-navbar">
    <div class="usa-logo" id="basic-logo">
      <em class="usa-logo__text">
        <!--TODO: Replace with content from CMS. -->
        <a href="/" title="<Project title>"> &lt;Project title&gt; </a>
      </em>
    </div>

    <!--TODO: Replace with content from CMS. -->
    <button type="button" class="usa-menu-btn" on:click={() => toggleNavMenu(true)}> Menu </button>
  </div>
  <!-- TODO: Replace aria-label with content from CMS. -->
  <nav aria-label="Primary navigation" class={navClassNames}>
    <div class="usa-nav__inner">
      <button type="button" class="usa-nav__close" on:click={() => toggleNavMenu(false)}>
        <!-- TODO: Replace alt text with content from CMS. -->
        <img src={iconClose} alt="Close" />
      </button>

      <Nav items={navItems} />

      <!-- TODO: Extend <Nav/> to cover secondary nav or build out component with shared dependencies. -->
      <div class="usa-nav__secondary">
        <ul class="usa-nav__secondary-links">
          <li class="usa-nav__secondary-item">
            <a href="/"> Secondary link </a>
          </li>
          <li class="usa-nav__secondary-item">
            <a href="/" class="usa-current"> Another secondary link </a>
          </li>
        </ul>

        <!-- TODO: Replace with <Search/> component. -->
        <section aria-label="Search component">
          <form class="usa-search usa-search--small " role="search">
            <label class="usa-sr-only" for="search-field"> Search </label>
            <input class="usa-input" id="search-field" type="search" name="search" />
            <button class="usa-button" type="submit">
              <img src={iconBgSearchWhite} class="usa-search__submit-icon" alt="Search" />
            </button>
          </form>
        </section>
      </div>
    </div>
  </nav>
</header>

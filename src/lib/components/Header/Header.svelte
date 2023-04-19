<script lang="ts">
  import "./Header.scss";
  import iconBgSearchWhite from "@uswds/uswds/img/usa-icons-bg/search--white.svg?url";

  import type { NavItemType } from "./Nav";

  import classNames from "$lib/util/classNames";
  import Icon from "$lib/components/Icon";
  import Title from "./Title";
  import Nav from "./Nav";

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
    <!-- TODO: Extend <Nav/> to cover secondary nav or build out component with shared dependencies. -->
    <div class="usa-nav__secondary">
      <ul class="usa-nav__secondary-links">
        <li class="usa-nav__secondary-item">
          <a href="/news">Grants and funding</a>
        </li>
        <li class="usa-nav__secondary-item">
          <a href="/documentation" class="usa-current">Licensing and permits</a>
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

    <!--TODO: Replace with content from CMS. -->
    <button type="button" class="usa-menu-btn" on:click={() => toggleNavMenu(true)}> Menu </button>
  </div>
  <!-- TODO: Replace aria-label with content from CMS. -->
  <nav aria-label="Primary navigation" class={navClassNames}>
    <div class="usa-nav__inner">
      <button type="button" class="usa-nav__close" on:click={() => toggleNavMenu(false)}>
        <!-- TODO: Replace alt text with content from CMS. -->
        <Icon name="close" alt="Close" size={3} />
      </button>

      <Nav items={navItems} />
    </div>
  </nav>
</header>

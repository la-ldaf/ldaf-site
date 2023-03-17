<script>
  import iconClose from "@uswds/uswds/img/usa-icons/close.svg";
  import iconBgSearchWhite from "@uswds/uswds/img/usa-icons-bg/search--white.svg";
</script>

<header class="usa-header usa-header--basic">
  <div class="usa-nav-container">
    <div class="usa-navbar">
      <div class="usa-logo" id="-logo">
        <em class="usa-logo__text"><a href="/" title="<Project title>">&lt;Project title&gt;</a></em
        >
      </div>
    </div>
    <nav aria-label="Primary navigation" class="usa-nav">
      <button type="button" class="usa-nav__close">
        <img src={iconClose} alt="Close" />
      </button>
      <ul class="usa-nav__primary usa-accordion">
        <li class="usa-nav__primary-item">
          <a href="/news" class="usa-nav-link"><span>&lt;Simple link 1&gt;</span></a>
        </li>
        <li class="usa-nav__primary-item">
          <a href="/news" class="usa-nav-link"><span>&lt;Simple link 2&gt;</span></a>
        </li>
        <li class="usa-nav__primary-item">
          <a href="/news" class="usa-nav-link"><span>&lt;Simple link 3&gt;</span></a>
        </li>
      </ul>
      <section aria-label="Search component">
        <form class="usa-search usa-search--small" role="search">
          <label class="usa-sr-only" for="search-field">Search</label>
          <input class="usa-input" id="search-field" type="search" name="search" />
          <button class="usa-button" type="submit">
            <img src={iconBgSearchWhite} class="usa-search__submit-icon" alt="Search" />
          </button>
        </form>
      </section>
    </nav>
  </div>
</header>

<style lang="scss">
  @use "uswds-core" with (
    $theme-font-path: $theme-font-path,
    $theme-image-path: $theme-image-path,
    $theme-show-notifications: false
  );
  @use "usa-header";
  @use "usa-search";
  @use "usa-accordion";
  @use "usa-nav";
</style>

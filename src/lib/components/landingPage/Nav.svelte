<script>
  import closeIcon from "@uswds/uswds/img/usa-icons/close.svg";
  import Search from "../Search.svelte";
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
        <img src={closeIcon} alt="Close" />
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
        <Search size="small" />
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

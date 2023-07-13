<script lang="ts">
  import "./AnnouncementBanner.scss";
  import Link from "$lib/components/Link";
  import Icon from "$lib/components/Icon";
  import { url as lightbulbIcon } from "$icons/lightbulb";
  import { url as arrowIcon } from "$icons/arrow_forward";
  import classNames from "$lib/util/classNames";

  export let ariaLabel = "Top-level announcement";
  export let headerText = "Here's a site-wide announcement!";
  export let linkText = "Read more here";
  export let href = "/";
  let classes = classNames("usa-banner", `ldaf-banner--announcement`);
</script>

<section id="top" class={classes} aria-label={ariaLabel}>
  <header class="usa-banner__header">
    <div class="usa-banner__inner">
      <div class="grid-col-auto">
        <img
          class="usa-banner__header-flag banner-icon"
          src={lightbulbIcon}
          alt="Lightbulb icon"
          width={16}
          height={11}
        />
      </div>
      <div class="grid-col-fill tablet:grid-col-auto ldaf-banner--announcement-text">
        <p class="usa-banner__header-text">{headerText}</p>
        <Link {href}>{linkText}<Icon src={arrowIcon} /></Link>
      </div>
    </div>
  </header>
</section>

<script>
  import "./Banner.scss";
  import usFlagSmall from "@uswds/uswds/img/us_flag_small.png";
  import iconDotGov from "@uswds/uswds/img/icon-dot-gov.svg?url";
  import iconHTTPS from "@uswds/uswds/img/icon-https.svg?url";
  // TODO: figure out how to/if we want to import component JS or
  // write any interactivity ourselves
  // Related Ticket: https://ldaf.atlassian.net/browse/LDAF-173
  // import banner from '@uswds/uswds/js/usa-banner';
  let bannerExpanded = false;
</script>

<section id="top" class="usa-banner" aria-label="Official website of the United States government">
  <div class="usa-accordion">
    <header class="usa-banner__header" class:usa-banner__header--expanded={bannerExpanded}>
      <div class="usa-banner__inner">
        <div class="grid-col-auto">
          <img
            aria-hidden={!bannerExpanded}
            class="usa-banner__header-flag"
            src={usFlagSmall}
            alt=""
            width={16}
            height={11}
          />
        </div>
        <div class="grid-col-fill tablet:grid-col-auto" aria-hidden={!bannerExpanded}>
          <p class="usa-banner__header-text">An official website of the United States government</p>
          <p class="usa-banner__header-action" aria-hidden={!bannerExpanded}>Here’s how you know</p>
        </div>
        <button
          type="button"
          class="usa-accordion__button usa-banner__button"
          aria-expanded={bannerExpanded}
          aria-controls="gov-banner-default"
          on:click={() => (bannerExpanded = !bannerExpanded)}
        >
          <span class="usa-banner__button-text">Here’s how you know</span>
        </button>
      </div>
    </header>
    <div
      class="usa-banner__content usa-accordion__content"
      id="gov-banner-default"
      hidden={!bannerExpanded}
    >
      <div class="grid-row grid-gap-lg">
        <div class="usa-banner__guidance tablet:grid-col-6">
          <img
            class="usa-banner__icon usa-media-block__img"
            src={iconDotGov}
            width={64}
            height={64}
            alt=""
            aria-hidden={!bannerExpanded}
          />
          <div class="usa-media-block__body">
            <p>
              <strong>Official websites use .gov</strong><br />A
              <strong>.gov</strong> website belongs to an official government organization in the United
              States.
            </p>
          </div>
        </div>
        <div class="usa-banner__guidance tablet:grid-col-6">
          <img
            class="usa-banner__icon usa-media-block__img"
            src={iconHTTPS}
            width={64}
            height={64}
            alt=""
            aria-hidden={!bannerExpanded}
          />
          <div class="usa-media-block__body">
            <p>
              <strong>Secure .gov websites use HTTPS</strong><br />A
              <strong>lock</strong> (
              <span class="icon-lock"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="64"
                  viewBox="0 0 52 64"
                  class="usa-banner__lock-image"
                  role="img"
                  aria-labelledby="banner-lock-description"
                  focusable="false"
                >
                  <title id="banner-lock-title">Lock</title>
                  <desc id="banner-lock-description"> Locked padlock icon </desc>
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                  />
                </svg>
              </span>) or <strong>https://</strong> means you’ve safely connected to the .gov website.
              Share sensitive information only on official, secure websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

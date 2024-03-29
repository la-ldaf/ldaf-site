<script lang="ts">
  import "./DotGovBanner.scss";
  import ldafLogo from "$lib/assets/ldaf-flat-logo-transparent.png?w=16&imagetools";
  import ldafLogo2x from "$lib/assets/ldaf-flat-logo-transparent.png?w=32&imagetools";
  import { url as dotGovIcon } from "$icons/icon-dot-gov";
  import { url as httpsIcon } from "$icons/icon-https";
  import Icon from "$lib/components/Icon";

  let bannerExpanded = false;
</script>

<section
  id="top"
  class="usa-banner"
  aria-label="Official website of the Louisiana state government"
>
  <div class="usa-accordion">
    <header class="usa-banner__header" class:usa-banner__header--expanded={bannerExpanded}>
      <div class="usa-banner__inner">
        <div class="grid-col-auto">
          <img
            aria-hidden={!bannerExpanded}
            class="usa-banner__header-flag ldaf-logo"
            src={ldafLogo}
            srcset={`${ldafLogo2x} 32w, ${ldafLogo} 16w`}
            sizes="16px"
            alt="Louisiana Department of Agriculture and Forestry Logo"
            width={16}
            height={16}
          />
        </div>
        <div class="grid-col-fill tablet:grid-col-auto" aria-hidden={!bannerExpanded}>
          <p class="usa-banner__header-text">
            An official website of the Louisiana state government
          </p>
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
          <Icon
            src={dotGovIcon}
            alt=""
            plain
            class="usa-banner__icon usa-media-block__img"
            width={64}
            height={64}
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
          <Icon
            src={httpsIcon}
            alt=""
            plain
            class="usa-banner__icon usa-media-block__img"
            width={64}
            height={64}
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

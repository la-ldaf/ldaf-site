<script lang="ts">
  import "./Footer.scss";

  import { url as facebookIcon } from "$icons/facebook";
  import { url as youtubeIcon } from "$icons/youtube";

  import Icon from "$lib/components/Icon";
  import Link from "$lib/components/Link";
  import Logo from "$lib/components/Logo";

  import type { AfterNavigate } from "@sveltejs/kit";
  import type { NavMenuType } from "$lib/components/Header/Nav";

  export let navItems: NavMenuType[] = [];
  // we provide this from a parent component so that we can render the component in Storybook
  export let afterNavigate: undefined | ((callback: (navigation: AfterNavigate) => void) => void) =
    undefined;

  // Quickest way to implement the accordions was to replicate what USWDS was
  //   doing, which is to use buttons on mobile and headings on larger screens.
  const MOBILE_BREAKPOINT = 480;
  $: innerWidth = 0;

  // TODO: Logic for accordions here is very similar to that in
  //       Header/Nav/NavMenu; we should make it reusable.
  let expandedIndex: number | undefined = undefined;

  const toggle = (i: number) => {
    expandedIndex = expandedIndex === i ? undefined : i;
  };

  const handleKeyDown = (event: KeyboardEvent, i: number) =>
    (event.key === "Enter" || event.key === " ") && toggle(i);
  const handleMouseDown = (i: number) => toggle(i);

  if (afterNavigate) afterNavigate(() => (expandedIndex = undefined));
</script>

<svelte:window bind:innerWidth />

<footer class="usa-footer usa-footer--big ldaf-footer">
  <!-- TODO: Perform a quick scroll animation to avoid disorienting the user. -->
  <!-- TODO: Return to top will always scroll user to top, but will only shift
             focus if the URL doesn't already include #top.
             Shift focus back to top if user hits this more than once. -->
  <div class="grid-container usa-footer__return-to-top">
    <Link href="#top">Return to top</Link>
  </div>
  <div class="usa-footer__primary-section ldaf-footer__primary-section">
    <div class="grid-container">
      <nav class="usa-footer__nav ldaf-footer__nav" aria-label="Footer navigation">
        <div class="grid-row grid-gap-4">
          {#each navItems as { name, children, id }, i (id)}
            <div class="mobile-lg:grid-col-6 tablet:grid-col-4 desktop:grid-col">
              <section
                class="usa-footer__primary-content usa-footer__primary-content--collapsible ldaf-footer__primary-content"
              >
                {#if innerWidth < MOBILE_BREAKPOINT}
                  <button
                    class="usa-footer__primary-link usa-footer__primary-link--button ldaf-footer__primary-link"
                    aria-controls="usa-footer-menu-list-{id}"
                    aria-expanded={i === expandedIndex}
                    type="button"
                    on:keydown={(e) => handleKeyDown(e, i)}
                    on:mousedown={() => handleMouseDown(i)}
                  >
                    {name}
                  </button>
                {:else}
                  <!-- TODO: Programmatically determine appropriate heading level. -->
                  <h2 class="usa-footer__primary-link ldaf-footer__primary-link">{name}</h2>
                {/if}
                <ul id="usa-footer-menu-list-{id}" class="usa-list usa-list--unstyled">
                  {#if children}
                    {#each children as item (item.id)}
                      <li class="usa-footer__secondary-link ldaf-footer__secondary-link">
                        <Link alternate={true} href={item.link}>{item.name}</Link>
                      </li>
                    {/each}
                  {/if}
                </ul>
              </section>
            </div>
          {/each}
        </div>
      </nav>
    </div>
  </div>
  <!-- TODO: Move hard-coded content below into Contentful. -->
  <div class="usa-footer__secondary-section ldaf-footer__secondary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div class="usa-footer__logo grid-row tablet:grid-col-6 desktop:grid-col-8 grid-gap-2">
          <!-- Vertical, stacked logo for mobile. -->
          <div class="display-block tablet:display-none">
            <Logo placement="mobile-footer" />
          </div>
          <!-- Horizontal logo for tablet and desktop. -->
          <div class="display-none tablet:display-block">
            <Logo placement="desktop-footer" />
          </div>
        </div>
        <div class="usa-footer__contact-links tablet:grid-col-6 desktop:grid-col-4">
          <div class="usa-footer__social-links grid-row grid-gap-1">
            <div class="grid-col-auto">
              <a class="usa-social-link" href="https://www.facebook.com/LaAgandForestry/">
                <Icon class="usa-social-link__icon" src={facebookIcon} alt="Facebook" />
              </a>
            </div>
            <div class="grid-col-auto">
              <a
                class="usa-social-link"
                href="https://www.youtube.com/channel/UCK6AJX9eDoaNXSzm_0nyA9Q"
              >
                <Icon class="usa-social-link__icon" src={youtubeIcon} alt="YouTube" /></a
              >
            </div>
          </div>
          <address class="usa-footer__address">
            <div class="ldaf-footer__address-location">
              5825 Florida Blvd
              <br />
              Baton Rouge, LA 70806
              <hr />
            </div>
            <div class="ldaf-footer__address-phone grid-row grid-gap">
              <div class="grid-col-6 text-left">Emergencies:</div>
              <div class="grid-col-6 text-right">
                <Link href="tel:18554525323">1-855-452-5323</Link>
              </div>
            </div>
            <div class="ldaf-footer__address-phone grid-row grid-gap">
              <div class="grid-col-6 text-left ldaf-footer__nowrap">Non-emergencies:</div>
              <div class="grid-col-6 text-right">
                <Link href="tel:18669272476">1-866-927-2476</Link><br />or
                <Link href="tel:12259221234">(225) 922-1234</Link>
              </div>
            </div>
          </address>
        </div>
      </div>
      <div class="grid-row ldaf-footer__copyright">
        <div class="grid-col text-center">
          ©2023 Louisiana Department of Agriculture and Forestry.
          <span class="ldaf-footer__nowrap">All rights reserved</span>
          <span class="ldaf-footer__nowrap">
            -
            <Link href="/about/website/privacy-policy">Privacy Policy</Link>
          </span>
          <span class="ldaf-footer__nowrap">
            -
            <Link href="/login">Admin login</Link>
          </span>
        </div>
      </div>
    </div>
  </div>
</footer>

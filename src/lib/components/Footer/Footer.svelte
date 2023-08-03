<script lang="ts">
  import type { NavMenuType } from "$lib/components/Header/Nav";

  import Link from "$lib/components/Link";

  import "./Footer.scss";

  export let navItems: NavMenuType[] = [];
  console.log(navItems);
</script>

<footer class="usa-footer usa-footer--big ldaf-footer">
  <!-- TODO: Perform a quick scroll animation to avoid disorienting the user. -->
  <!-- TODO: Shift focus back to top. -->
  <div class="grid-container usa-footer__return-to-top">
    <a href="#top">Return to top</a>
  </div>
  <div class="usa-footer__primary-section ldaf-footer__primary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-12">
          <nav class="usa-footer__nav" aria-label="Footer navigation">
            <div class="grid-row grid-gap-4">
              {#each navItems as subMenu (subMenu.id)}
                {@const { name, children } = subMenu}
                <div class="mobile-lg:grid-col-6 desktop:grid-col">
                  <section
                    class="
                    usa-footer__primary-content
                    usa-footer__primary-content--collapsible
                  "
                  >
                    <h4 class="usa-footer__primary-link ldaf-footer__primary-link">{name}</h4>
                    <ul class="usa-list usa-list--unstyled">
                      {#if children}
                        {#each children as item (item.id)}
                          <li class="usa-footer__secondary-link ldaf-footer__secondary-link">
                            <Link href={item.link}>{item.name}</Link>
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
    </div>
  </div>
  <!--
  <div class="usa-footer__secondary-section ldaf-footer__secondary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div
          class="
            usa-footer__logo
            grid-row
            mobile-lg:grid-col-6 mobile-lg:grid-gap-2
          "
        >
          <div class="mobile-lg:grid-col-auto">
            <img class="usa-footer__logo-img" src="/assets/img/logo-img.png" alt="" />
          </div>
          <div class="mobile-lg:grid-col-auto">
            <p class="usa-footer__logo-heading">&lt;Name of Agency&gt;</p>
          </div>
        </div>
        <div class="usa-footer__contact-links mobile-lg:grid-col-6">
          <div class="usa-footer__social-links grid-row grid-gap-1">
            <div class="grid-col-auto">
              <a class="usa-social-link" href="javascript:void(0);"
                ><img
                  class="usa-social-link__icon"
                  src="/assets/img/usa-icons/facebook.svg"
                  alt="Facebook"
                /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="javascript:void(0);"
                ><img
                  class="usa-social-link__icon"
                  src="/assets/img/usa-icons/twitter.svg"
                  alt="Twitter"
                /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="javascript:void(0);"
                ><img
                  class="usa-social-link__icon"
                  src="/assets/img/usa-icons/youtube.svg"
                  alt="YouTube"
                /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="javascript:void(0);"
                ><img
                  class="usa-social-link__icon"
                  src="/assets/img/usa-icons/instagram.svg"
                  alt="Instagram"
                /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="javascript:void(0);"
                ><img
                  class="usa-social-link__icon"
                  src="/assets/img/usa-icons/rss_feed.svg"
                  alt="RSS"
                /></a
              >
            </div>
          </div>
          <p class="usa-footer__contact-heading">&lt;Agency Contact Center&gt;</p>
          <address class="usa-footer__address">
            <div class="usa-footer__contact-info grid-row grid-gap">
              <div class="grid-col-auto">
                <a href="tel:1-800-555-5555">&lt;(800) 555-GOVT&gt;</a>
              </div>
              <div class="grid-col-auto">
                <a href="mailto:info@agency.gov">&lt;info@agency.gov&gt;</a>
              </div>
            </div>
          </address>
        </div>
      </div>
    </div>
  </div>
  -->
</footer>

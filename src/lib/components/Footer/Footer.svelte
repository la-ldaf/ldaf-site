<script>
  import logoImg from "@uswds/uswds/img/logo-img.png";
  import Icon from "$lib/components/Icon";
  import { url as facebookIcon } from "$icons/facebook";
  import { url as twitterIcon } from "$icons/twitter";
  import { url as youtubeIcon } from "$icons/youtube";
  import { url as instagramIcon } from "$icons/instagram";
  import { url as rssIcon } from "$icons/rss_feed";
</script>

<footer class="usa-footer">
  <div class="grid-container usa-footer__return-to-top">
    <a href="#top">Return to top</a>
  </div>
  <div class="usa-footer__primary-section">
    <nav class="usa-footer__nav" aria-label="Footer navigation">
      <ul class="grid-row grid-gap">
        <li
          class="
            mobile-lg:grid-col-4
            desktop:grid-col-auto
            usa-footer__primary-content
          "
        >
          <a class="usa-footer__primary-link" href="/">&lt;Primary link&gt;</a>
        </li>
        <li
          class="
            mobile-lg:grid-col-4
            desktop:grid-col-auto
            usa-footer__primary-content
          "
        >
          <a class="usa-footer__primary-link" href="/">&lt;Primary link&gt;</a>
        </li>
        <li
          class="
            mobile-lg:grid-col-4
            desktop:grid-col-auto
            usa-footer__primary-content
          "
        >
          <a class="usa-footer__primary-link" href="/">&lt;Primary link&gt;</a>
        </li>
        <li
          class="
            mobile-lg:grid-col-4
            desktop:grid-col-auto
            usa-footer__primary-content
          "
        >
          <a class="usa-footer__primary-link" href="/">&lt;Primary link&gt;</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="usa-footer__secondary-section">
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
            <img class="usa-footer__logo-img" src={logoImg} width={80} height={80} alt="" />
          </div>
          <div class="mobile-lg:grid-col-auto">
            <p class="usa-footer__logo-heading">&lt;Name of Agency&gt;</p>
          </div>
        </div>
        <div class="usa-footer__contact-links mobile-lg:grid-col-6">
          <div class="usa-footer__social-links grid-row grid-gap-1">
            <div class="grid-col-auto">
              <a class="usa-social-link" href="/"
                ><Icon
                  src={facebookIcon}
                  alt="Facebook"
                  class="usa-social-link__icon"
                  width={40}
                  height={40}
                /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="/"
                ><Icon
                  src={twitterIcon}
                  alt="Twitter"
                  plain
                  class="usa-social-link__icon"
                  width={40}
                  height={40}
                /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="/"
                ><Icon
                  src={youtubeIcon}
                  alt="YouTube"
                  plain
                  class="usa-social-link__icon"
                  width={40}
                  height={40}
                /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="/"
                ><Icon
                  src={instagramIcon}
                  alt="Instagram"
                  plain
                  class="usa-social-link__icon"
                  width={40}
                  height={40}
                /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="/"
                ><Icon
                  src={rssIcon}
                  alt="RSS Feed"
                  plain
                  class="usa-social-link__icon"
                  width={40}
                  height={40}
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
</footer>

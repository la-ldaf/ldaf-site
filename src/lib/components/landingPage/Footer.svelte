<script>
  import logoImg from "@uswds/uswds/img/logo-img.png";
  import iconFacebook from "@uswds/uswds/img/usa-icons/facebook.svg";
  import iconTwitter from "@uswds/uswds/img/usa-icons/twitter.svg";
  import iconYouTube from "@uswds/uswds/img/usa-icons/youtube.svg";
  import iconInstagram from "@uswds/uswds/img/usa-icons/instagram.svg";
  import iconRSS from "@uswds/uswds/img/usa-icons/rss_feed.svg";
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
            <img class="usa-footer__logo-img" src={logoImg} alt="" />
          </div>
          <div class="mobile-lg:grid-col-auto">
            <p class="usa-footer__logo-heading">&lt;Name of Agency&gt;</p>
          </div>
        </div>
        <div class="usa-footer__contact-links mobile-lg:grid-col-6">
          <div class="usa-footer__social-links grid-row grid-gap-1">
            <div class="grid-col-auto">
              <a class="usa-social-link" href="/"
                ><img class="usa-social-link__icon" src={iconFacebook} alt="Facebook" /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="/"
                ><img class="usa-social-link__icon" src={iconTwitter} alt="Twitter" /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="/"
                ><img class="usa-social-link__icon" src={iconYouTube} alt="YouTube" /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="/"
                ><img class="usa-social-link__icon" src={iconInstagram} alt="Instagram" /></a
              >
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="/"
                ><img class="usa-social-link__icon" src={iconRSS} alt="RSS" /></a
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

<style lang="scss">
  @use "usa-footer";
</style>

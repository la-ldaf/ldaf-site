<script>
  import Image from "$lib/components/Image";
  import Card from "$lib/components/Card";
  import Button from "$lib/components/Button";
</script>

<section class="usa-section">
  <div class="grid-container">
    <h1>News</h1>
    <div class="usa-alert usa-alert--warning">
      <div class="usa-alert__body">
        <h4 class="usa-alert__heading">Hear ye, hear ye</h4>
        <p class="usa-alert__text">Here's some news</p>
      </div>
    </div>
    <h2><a href="/">Go back home</a></h2>
  </div>
</section>

<section class="usa-section">
  <div class="grid-container">
    <h3 class="site-preview-heading">Default card</h3>
    <ul class="usa-card-group">
      <li class="usa-card tablet:grid-col-4">
        <div class="usa-card__container">
          <div class="usa-card__header">
            <h2 class="usa-card__heading">Card with Media</h2>
          </div>
          <div class="usa-card__media">
            <div class="usa-card__img">
              <Image
                src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
                alt="A placeholder image"
                width={17}
                height={10}
              />
            </div>
          </div>
          <div class="usa-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
              cupiditate, eaque qui officia recusandae.
            </p>
          </div>
          <div class="usa-card__footer">
            <button type="button" class="usa-button">Visit Florida Keys</button>
          </div>
        </div>
      </li>
    </ul>

    <h3 class="site-preview-heading">Flag layout card</h3>
    <ul class="usa-card-group">
      <li class="usa-card usa-card--flag desktop:grid-col-6">
        <div class="usa-card__container">
          <div class="usa-card__header">
            <h2 class="usa-card__heading">Image component flag</h2>
          </div>
          <div class="usa-card__media">
            <div class="usa-card__img">
              <Image
                src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
                alt="A placeholder image"
                loading="eager"
                width={500}
                height={1000}
              />
            </div>
          </div>
          <div class="usa-card__body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="usa-card__footer">
            <button type="button" class="usa-button">Visit Florida Keys</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="usa-section">
  <div class="grid-container">
    <h3 class="site-preview-heading">Default Card Component</h3>
    <ul class="usa-card-group">
      <Card class="tablet:grid-col-4">
        <h2 class="usa-card__heading" slot="header">Heading</h2>
        <Image
          slot="image"
          src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
          alt="A placeholder image"
          width={40}
          height={40}
        />
        <p slot="body">Some content for the body.</p>
        <Button slot="footer">CTA Button</Button>
      </Card>
    </ul>
    <h3 class="site-preview-heading">Flag Card Component</h3>
    <ul class="usa-card-group">
      <Card variant="flag" class="desktop:grid-col-6">
        <h2 class="usa-card__heading" slot="header">Image component flag</h2>
        <Image
          slot="image"
          src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
          alt="A placeholder image"
          width={500}
          height={1000}
        />
        <p slot="body">Flag component body</p>
        <Button slot="footer">Visit Florida Keys</Button>
      </Card>
    </ul>
  </div>
</section>

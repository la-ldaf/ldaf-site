<script>
  import AnnouncementBanner from "$lib/components/AnnouncementBanner";
  import Image from "$lib/components/Image";
  import Icon from "$lib/components/Icon";
  import Card from "$lib/components/Card";
  import Button from "$lib/components/Button";
  import { url as arrow } from "$icons/arrow_forward";
  import sampleImage from "../../uswds-sample.jpg";
  import imageBlurhash, { width, height, mean } from "../../uswds-sample.jpg?blurhash";
</script>

<AnnouncementBanner />

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
    <h3 class="site-preview-heading">Default Card Component</h3>
    <ul class="usa-card-group">
      <Card class="desktop:grid-col-6">
        <h2 class="usa-card__heading" slot="header">Heading</h2>
        <Image
          slot="image"
          src={sampleImage}
          {width}
          {height}
          {mean}
          blurhash={imageBlurhash}
          alt="A placeholder image"
        />
        <p slot="body">Some content for the body.</p>
        <Button slot="footer">CTA Button</Button>
      </Card>
    </ul>
    <h3 class="site-preview-heading">Multiple cards</h3>
    <ul class="usa-card-group">
      {#each Array(4) as card}
        <Card class="desktop:grid-col-6">
          <h2 class="usa-card__heading" slot="header">Heading</h2>
          <Image
            slot="image"
            src={sampleImage}
            {width}
            {height}
            {mean}
            blurhash={imageBlurhash}
            alt="A placeholder image"
          />
          <p slot="body">Some content for the body.</p>
          <Button slot="footer">CTA Button</Button>
        </Card>
      {/each}
    </ul>
    <h3 class="site-preview-heading">Card without image</h3>
    <ul class="usa-card-group">
      <Card class="desktop:grid-col-4">
        <h2 class="usa-card__heading" slot="header">I'm a header</h2>
        <p slot="body">Component body</p>
        <Button slot="footer">Do something</Button>
      </Card>
    </ul>
    <h3 class="site-preview-heading">Task Card</h3>
    <ul class="usa-card-group">
      <Card class="desktop:grid-col-4">
        <h2 class="usa-card__heading" slot="header">List header</h2>
        <ul slot="body">
          Task List:
          <li class="task-item">
            <Icon src={arrow} />Task 1
          </li>
        </ul>
      </Card>
    </ul>
  </div>
</section>

<style>
  ul {
    padding-inline-start: 0;
  }
  .task-item {
    display: flex;
    align-items: center;
  }
</style>

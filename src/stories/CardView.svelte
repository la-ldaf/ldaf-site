<script lang="ts">
  import Card from "$lib/components/Card";
  import type { Variant } from "$lib/components/Card";
  import Image from "$lib/components/Image";
  import Button from "$lib/components/Button";

  import sampleImage from "../uswds-sample.jpg";
  import imageBlurhash, {
    width as imageWidth,
    height as imageHeight,
    mean as imageMean,
  } from "../uswds-sample.jpg?blurhash";

  export let variant: Variant = "primary";
  export let header = "Header";
  export let body = "Some body text";
  export let footer = "CTA Button";
  export let showImage = true;
  export let showFooter = true;
</script>

<section class="usa-section">
  <div class="grid-container">
    <ul class="usa-card-group">
      <Card {variant} class="desktop:grid-col-6">
        <h2 class="usa-card__heading" slot="header">{header}</h2>
        <div class="image-slot" slot="image">
          {#if showImage}
            <Image
              src={sampleImage}
              alt="A placeholder image"
              width={imageWidth}
              height={imageHeight}
              mean={imageMean}
              blurhash={imageBlurhash}
            />
          {/if}
        </div>
        <p slot="body">
          {body}
        </p>
        <div slot="footer">
          {#if showFooter}
            <Button>
              {footer}
            </Button>
          {/if}
        </div>
      </Card>
    </ul>
  </div>
</section>

<style>
  .image-slot {
    height: 100%;
  }
</style>

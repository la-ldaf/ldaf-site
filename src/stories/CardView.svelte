<script lang="ts">
  import Card from "$lib/components/Card";
  import type { Variant } from "$lib/components/Card";
  import Image from "$lib/components/Image";
  import Button from "$lib/components/Button";

  export let variant: Variant = "primary";
  export let header = "Header";
  export let body = "Some body text";
  export let footer = "CTA Button";
  export let isSecondary = false;
  export let isTaskList = false;
</script>

<section class="usa-section">
  <div class="grid-container">
    <ul class="usa-card-group">
      <Card {variant} class="desktop:grid-col-6">
        <h2 class="usa-card__heading" slot="header">{header}</h2>
        <div class="image-slot" slot="image">
          {#if !isSecondary && !isTaskList}
            <Image
              slot="image"
              src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
              alt="A placeholder image"
              width={40}
              height={40}
            />
          {/if}
        </div>
        <p slot="body">
          {body}
        </p>
        <div slot="footer">
          {#if !isTaskList}
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

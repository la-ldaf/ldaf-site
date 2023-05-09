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
  // console.log($$slots);
</script>

<section class="usa-section">
  <div class="grid-container">
    <ul class="usa-card-group">
      <Card {variant}>
        <h2 class="usa-card__heading" slot="header">{header}</h2>
        {#if !isSecondary && !isTaskList}
          <Image
            slot="image"
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="A placeholder image"
            width={40}
            height={40}
          />
        {/if}
        <p slot="body">
          {body}
        </p>
        {#if !isTaskList}
          <Button slot="footer">
            <!-- {#if !isTaskList} -->
            {footer}
            <!-- {/if} -->
          </Button>
        {/if}
      </Card>
    </ul>
  </div>
</section>

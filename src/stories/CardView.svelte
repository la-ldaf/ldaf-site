<script lang="ts">
  import { afterUpdate } from "svelte";
  import Card from "$lib/components/Card";
  import Image from "$lib/components/Image";
  import Icon from "$lib/components/Icon";
  import { url as arrow } from "$icons/arrow_forward";
  import Button from "$lib/components/Button";

  import sampleImage from "../uswds-sample.jpg";
  import imageBlurhash, {
    width as imageWidth,
    height as imageHeight,
    mean as imageMean,
  } from "../uswds-sample.jpg?blurhash";

  // Svelte doesn't current support conditional rendering of named slots. Rather than do the more
  // verbose and convoluted approach of nesting other wrapper components for toggling named slots, this
  // uses Web APIs make the necessary updates to ensure the Storybook renderings of the Card component
  //  achieve visual parity with how it will look in actual usage.
  afterUpdate(() => {
    const mediaSection = document.querySelector<HTMLElement>(`.card-${id} .usa-card__media`);
    const cardSections = [".usa-card__header", ".usa-card__body", ".usa-card__footer"];

    if (!showImage) {
      if (mediaSection) mediaSection.style.display = "none";
      cardSections.forEach((section) => {
        const element = document.querySelector<HTMLElement>(`.card-${id} ${section}`);
        if (element) element.style.marginLeft = "0";
      });
    } else {
      if (mediaSection) mediaSection.style.display = "flex";
      cardSections.forEach((section) => {
        const element = document.querySelector<HTMLElement>(`.card-${id} ${section}`);
        if (element) element.style.marginLeft = "15rem";
      });
    }
  });

  export let id: string | undefined = undefined;
  export let header = "Header";
  export let body = "Some body text";
  export let footer = "CTA Button";
  export let showImage = true;
  export let showFooter = true;
  export let tasks: string[] = [];
</script>

<section class="usa-section">
  <div class="grid-container">
    <ul class="usa-card-group">
      <Card class={`desktop:grid-col-6 card-${id}`}>
        <h2 class="usa-card__heading" slot="header">{header}</h2>
        <div class="image-slot" slot="image">
          {#if showImage}
            <Image
              src={sampleImage}
              alt="Primary view placeholder"
              width={imageWidth}
              height={imageHeight}
              mean={imageMean}
              blurhash={imageBlurhash}
            />
          {/if}
        </div>
        <p slot="body">
          {body}
          {#if tasks.length > 0}
            <ul>
              {#each tasks as task}
                <li class="task-item">
                  <Icon src={arrow} />{task}
                </li>
              {/each}
            </ul>
          {/if}
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
  ul {
    padding-inline-start: 15px;
  }
  .task-item {
    display: flex;
    align-items: center;
  }
  .image-slot {
    height: 100%;
  }
</style>

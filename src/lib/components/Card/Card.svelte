<script lang="ts">
  import "./Card.scss";
  import Button from "$lib/components/Button";
  import Image from "$lib/components/Image";
  import classNames from "$lib/util/classNames";
  import type { Variant } from "./cardOptions";

  export let variant: Variant = "primary";

  const variantClassesDict: Record<Variant, string> = {
    primary: "usa-card--flag",
    secondary: "",
  };
  $: variantClass = variantClassesDict[variant];

  let className = "";
  export { className as class };
  $: classes = classNames("usa-card", variantClass, className);
</script>

<li class={`${classes}`}>
  <div class="usa-card__container">
    {#if $$slots.header}
      <div class="usa-card__header">
        <slot name="header">
          <h2 class="usa-card__heading">Default header</h2>
        </slot>
      </div>
    {/if}
    {#if $$slots.image}
      <div class="usa-card__media">
        <div class="usa-card__img">
          <slot name="image">
            <Image
              src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
              alt="A placeholder image"
              width={40}
              height={40}
            />
          </slot>
        </div>
      </div>
    {/if}
    {#if $$slots.body}
      <div class="usa-card__body">
        <slot name="body">
          <p>Default card body</p>
        </slot>
      </div>
    {/if}
    {#if $$slots.footer}
      <div class="usa-card__footer">
        <slot name="footer">
          <Button>Default footer</Button>
        </slot>
      </div>
    {/if}
  </div>
</li>

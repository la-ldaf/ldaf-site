<script lang="ts">
  import "./Card.scss";
  import classNames from "$lib/util/classNames";
  import type { Variant } from "./cardOptions";

  export let variant: Variant = "primary";

  const variantClassesDict: Record<Variant, string> = {
    primary: $$slots.image ? "usa-card--flag" : "",
    secondary: "",
  };
  $: variantClass = variantClassesDict[variant];

  let className = "";
  export { className as class };
  $: classes = classNames("usa-card", variantClass, className);
</script>

<li class={classes}>
  <div class="usa-card__container">
    {#if $$slots.header}
      <div class="usa-card__header">
        <!-- Use the apprioprate section heading element, likely <h2> or <h3>, based on page structure -->
        <slot name="header" />
      </div>
    {/if}
    {#if $$slots.image}
      <div class="usa-card__media">
        <div class="usa-card__img">
          <!-- $lib/components/Image slot -->
          <slot name="image" />
        </div>
      </div>
    {/if}
    {#if $$slots.body}
      <div class="usa-card__body">
        <!-- Text content for body, typically a <p> element -->
        <slot name="body" />
      </div>
    {/if}
    {#if $$slots.footer}
      <div class="usa-card__footer">
        <!-- $lib/components/Button slot -->
        <slot name="footer" />
      </div>
    {/if}
  </div>
</li>

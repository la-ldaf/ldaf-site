<script lang="ts">
  import "./Alert.scss";
  import classNames from "$lib/util/classNames";
  import type { Variant } from "./alertOptions";
  export let noIcon = false;
  export let slim = false;
  export let siteAlert = false;
  export let variant: Variant = "info";
  export let heading: string = "";

  const elementRole = {
    error: "alert",
    success: "status",
    info: "region",
    warning: "region",
  };

  // Only display aria-label for appropriate roles.
  // Nullish-valued attributes will not be included.
  const ariaLabel = {
    info: "Informational status alert",
    warning: "Warning status alert",
    error: null,
    success: null,
  };

  let className = "";
  export { className as class };
  $: classes = classNames(
    "usa-alert",
    `usa-alert--${variant}`,
    noIcon ? "usa-alert--no-icon" : null,
    slim ? "usa-alert--slim" : null,
    siteAlert ? "ldaf-alert--site-wide" : null,
    className
  );
</script>

<div class={classes} role={elementRole[variant]} aria-label={ariaLabel[variant]}>
  <div class="usa-alert__body">
    {#if heading && !slim}
      <h4 class="usa-alert__heading">
        {heading}
      </h4>
    {/if}
    <p class="usa-alert__text">
      <slot />
    </p>
  </div>
</div>

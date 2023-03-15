<script lang="ts">
  import classNames from "$lib/classNames";
  import type { Variant, Size, Type } from "./buttonOptions";

  export let disabled = false;

  export let unstyled = false;

  export let variant: Variant = "primary";

  const variantClassesDict: Record<Variant, string[]> = {
    primary: [],
    secondary: ["usa-button--secondary"],
    base: ["usa-button--base"],
    "accent-cool": ["usa-button--accent-cool"],
    "accent-warm": ["usa-button--accent-warm"],
    outline: ["usa-button--outline"],
    "outline-inverse": ["usa-button--outline", "usa-button--inverse"],
  };

  $: variantClasses = variantClassesDict[variant];

  export let size: Size = "normal";

  export let type: Type = "button";

  let className = "";
  export { className as class };
</script>

<button
  {type}
  {disabled}
  aria-disabled={disabled}
  class={classNames(
    "usa-button",
    unstyled && "usa-button--unstyled",
    size === "big" && "usa-button--big",
    ...variantClasses,
    className
  )}
  on:click
>
  <slot>Button</slot>
</button>

<style lang="scss">
  @use "uswds-core" with (
    $theme-font-path: $theme-font-path,
    $theme-image-path: $theme-image-path,
    $theme-show-notifications: false
  );
  @use "usa-button";
</style>

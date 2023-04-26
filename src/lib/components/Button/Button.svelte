<script lang="ts">
  import "./Button.scss";
  import classNames from "$lib/util/classNames";
  import type { Variant, Type } from "./buttonOptions";
  import warn from "$lib/util/warn";

  export let disabled = false;

  export let unstyled = false;

  export let variant: Variant = "primary";

  const variantClassesDict: Record<Variant, string[]> = {
    primary: [],
    base: ["usa-button--base"],
    inverse: ["usa-button--inverse"],
    "text-only": ["usa-button--text-only"],
    outline: ["usa-button--outline"],
    "outline-inverse": ["usa-button--outline", "usa-button--outline-inverse"],
    big: ["usa-button--big"],
    "big-inverse": ["usa-button--big", "usa-button--big-inverse"],
  };

  $: variantClasses = unstyled ? [] : variantClassesDict[variant];

  $: if (unstyled && variant !== "primary") {
    warn("variant has no effect on an unstyled button!");
  }

  export let type: Type = "button";

  let className = "";
  export { className as class };
</script>

<button
  {type}
  {disabled}
  aria-disabled={disabled}
  class={classNames("usa-button", unstyled && "usa-button--unstyled", ...variantClasses, className)}
  on:click
>
  <slot>Button</slot>
</button>

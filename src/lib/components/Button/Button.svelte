<script lang="ts">
  import "./Button.scss";
  import Link from "$lib/components/Link";
  import classNames from "$lib/util/classNames";
  import type { Variant, Type } from "./buttonOptions";

  export let isLink = false;

  export let disabled = false;

  export let unstyled = false;

  export let variant: Variant = "primary";

  const variantClassesDict: Record<Variant, string[]> = {
    primary: [],
    secondary: ["usa-button--secondary"],
    base: ["usa-button--base"],
    inverse: ["usa-button--inverse"],
    "text-only": ["usa-button--text-only"],
    outline: ["usa-button--outline"],
    "outline-inverse": ["usa-button--outline", "usa-button--outline-inverse"],
    big: ["usa-button--big"],
    "big-inverse": ["usa-button--big", "usa-button--big-inverse"],
  };

  $: variantClasses = variantClassesDict[variant];

  export let type: Type = "button";

  let className = "";
  export { className as class };
  $: classes = classNames(
    "usa-button",
    ...variantClasses,
    unstyled && "usa-button--unstyled",
    className
  );
</script>

{#if isLink}
  <Link class={classes} {...$$restProps}>
    <slot>Link</slot>
  </Link>
{:else}
  <button {type} {disabled} aria-disabled={disabled} class={classes} on:click>
    <slot>Button</slot>
  </button>
{/if}

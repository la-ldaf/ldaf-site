<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import classNames from "$lib/util/classNames";
  import "./Link.scss";

  // Note: All props not mentioned below will be passed directly to the <a/> element via $$props, e.g. href and target.
  type $$Props = HTMLAnchorAttributes & {
    class?: string;
    external?: boolean;
    alternate?: boolean;
  };

  // this isn't necessary but will suppress vite-plugin-svelte a11y warnings
  export let href: string | null | undefined = "";
  // additional classes to add
  let className = "";
  export { className as class };
  // render as an external link, with the "launch" icon rendered ::after
  export let external = false;
  // render with the alternate variation, for use on darker backgrounds
  export let alternate = false;

  $: linkClassNames = classNames(
    `usa-link`,
    external && "usa-link--external",
    alternate && "usa-link--alt",
    className,
  );
</script>

<a {...$$restProps} {href} class={linkClassNames} rel={external ? "external" : null} on:click>
  <slot />
</a>

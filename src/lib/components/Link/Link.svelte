<script lang="ts">
  import classNames from "$lib/classNames";
  import "./Link.scss";

  // Note: All props not mentioned below will be passed directly to the <a/> element via $$props, e.g. href and target.
  interface $$Props extends Partial<HTMLAnchorElement> {
    class?: string;
    external?: boolean;
    alternate?: boolean;
  }

  // this isn't necessary but will suppress vite-plugin-svelte a11y warnings
  export let href = "";
  // additional classes to add
  let className = "";
  export { className as class };
  // render as an external link, with the "launch" icon rendered ::after
  export let external = false;
  // render with the alternate variation, for use on darker backgrounds
  export let alternate = false;
</script>

<a
  {...$$restProps}
  {href}
  class={classNames(
    `usa-link`,
    external && "usa-link--external",
    alternate && "usa-link--alt",
    className
  )}
  rel={external ? "external" : null}
>
  <slot />
</a>

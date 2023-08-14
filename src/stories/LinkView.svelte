<script lang="ts">
  // Svelte's component API does not support <slot/>.
  // This file serves as a wrapper so that we can pass along some <slot/> content.
  // Major downsides of this are:
  //   1. needing this wrapper file at all
  //   2. having to duplicate prop declarations
  //   3. the "show code" in the stories will show <LinkView/> instead of <Link/>

  import Link from "$lib/components/Link";

  // TODO: Find a way to better support <slot/> in Storybook.
  export let slottedContent = "Link";
  export let href = "http://www.ldaf.la.gov";
  let className = "";
  export { className as class };
  export let external = false;
  export let alternate = false;
</script>

<Link {href} class={className} {external} {alternate} {...$$restProps}>{slottedContent}</Link>

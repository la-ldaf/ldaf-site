<svelte:options immutable />

<script lang="ts">
  import classNames from "$lib/util/classNames";

  // Size is taken from the USWDS implemention of icons in their icon component package (see
  // https://designsystem.digital.gov/components/icon/#using-the-icon-component-2 for more details).
  // Reason for undefined `size` value to start: "By default, icons will scale with font size.
  // If you want to specify an icon size, use one of the component’s size variants."
  export let size: 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined = undefined;

  let className = "";
  export { className as class };

  export let alt = "";
  export let src: string;
  export let plain = false;

  if (plain && size) console.warn('"size" prop has no effect when "plain" is set');
</script>

<img
  {...$$restProps}
  class={classNames(!plain && "usa-icon", !plain && size && `usa-icon--size-${size}`, className)}
  {src}
  {alt}
/>

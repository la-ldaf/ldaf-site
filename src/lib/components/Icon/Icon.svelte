<script lang="ts">
  import classNames from "$lib/classNames";
  import icons from "./icons";
  type IconName = Extract<keyof typeof icons, string>;

  export let name: IconName;
  // Size is taken from the USWDS implemention of icons in their icon component package (see
  // https://designsystem.digital.gov/components/icon/#using-the-icon-component-2 for more details).
  // Reason for undefined `size` value to start: "By default, icons will scale with font size.
  // If you want to specify an icon size, use one of the component’s size variants."
  export let size: 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined = undefined;
  export let className = "";

  // As a default value, make the alt just a more titleized version of the file name,
  // e.g., "arrow_upward" becomes "Arrow Upward"
  export let alt = name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!icons[name]) {
    throw new Error(`${name} is not a valid icon!`);
  }
</script>

<img
  {...$$restProps}
  class={classNames("usa-icon", size && `usa-icon--size-${size}`, className)}
  {alt}
  src={icons[name].default}
/>

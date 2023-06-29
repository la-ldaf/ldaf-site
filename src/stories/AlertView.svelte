<script lang="ts">
  import Alert from "$lib/components/Alert";
  import type { Variant } from "$lib/components/Alert";

  export let slottedContent = "This is some important information";
  let className = "";
  export { className as class };
  export let slim = false;
  export let noIcon = false;
  export let heading = "Alert Heading";
  export let variant: Variant = "info";
</script>

<Alert class={className} {heading} {slim} {noIcon} {variant} {...$$restProps}
  >{slottedContent}</Alert
>

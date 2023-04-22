<script lang="ts">
  import type { ComponentProps } from "svelte";
  import Button from "../Button.svelte";

  type $$Props = ComponentProps<Button> & {
    slot?: string;
  };

  export let slot: string | undefined = "Button";
</script>

<Button {...$$restProps} on:click>
  {slot}
</Button>

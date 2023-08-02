<script lang="ts">
  // Based on https://svelte.dev/repl/983851f4fb7044e8b5d66a53ca0b356b?version=3.48.0
  // When condition is met, wraps slot in the provided element.
  export let condition = false;
  export let tag = "div";
</script>

{#if condition && tag}
  <svelte:element this={tag} {...$$restProps}><slot /></svelte:element>
{:else}
  <slot />
{/if}

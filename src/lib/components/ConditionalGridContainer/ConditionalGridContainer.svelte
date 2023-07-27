<script>
  export let condition = false;
</script>

{#if condition}
  <div class="grid-container" {...$$restProps}><slot /></div>
{:else}
  <slot />
{/if}

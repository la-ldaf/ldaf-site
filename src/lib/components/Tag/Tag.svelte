<script lang="ts">
  export let big: boolean = false;
</script>

<span class={`text-no-uppercase usa-tag ${big ? "usa-tag--big" : ""}`}>
  <slot>example tag</slot>
</span>

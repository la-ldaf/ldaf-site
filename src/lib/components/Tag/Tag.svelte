<script lang="ts">
  import "./Tag.scss";
  export let big: boolean = false;
</script>

<span class={`ldaf-tag text-no-uppercase usa-tag ${big ? "usa-tag--big" : ""}`}>
  <slot>example tag</slot>
</span>

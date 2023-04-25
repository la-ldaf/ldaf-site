<script lang="ts">
  // The BlurhashRenderer renders blurhashes using a custom bundle created with
  // vite-plugin-import-as-bundle-string. This bundle is inlined at the end of the body and runs
  // immediately upon being parsed, which leads to much faster rendering of blurhashes than if we
  // relied on onMount or a reactive statement in a component.
  import source from "./renderBlurhash?bundlestring";
  const script = `<script>${source}${"<"}/script>`;
</script>

{@html script}

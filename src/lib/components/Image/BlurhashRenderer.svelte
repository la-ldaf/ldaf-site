<script lang="ts">
  import source from "./renderBlurhash?bundlestring";
  const script = `<script>${source}${"<"}/script>`;
</script>

{@html script}

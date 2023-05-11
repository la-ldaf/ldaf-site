# Vite import as bundle string plugin

This plugin allows importing a file as a separate Rollup bundle into the page as a minified JS string. This can then be included in inline on the page within a `<script>` tag to run pieces of JS before external resources have finished loading.

## Usage

```svelte
<script lang="ts">
  import source from "./another-file?bundlestring";
  const script = `<script>${source}${"<"}/script>`;
</script>

{@html script}
```

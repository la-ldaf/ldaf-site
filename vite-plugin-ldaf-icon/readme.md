# Vite LDAF Icon plugin

This plugin generates minified and inline-able versions of SVG icons contained in `node_modules/@uswds/uswds/dist/img/` and its subfolders. These can then be imported into JS/TS files using `import ... from "$icons/an-icon";` where `an-icon` is the filename-without-SVG-extension of the icon.

## Usage

```svelte
<script lang="ts">
  import { url as anIcon } from "$icons/an-icon";
</script>

<img src={anIcon} />
```

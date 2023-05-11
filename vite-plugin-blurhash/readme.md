# Vite Blurhash plugin

This plugin generates the following from a source image stored in the repo by importing it into a JS/TS file:

- Blurhash
- Mean color of image
- Width
- Height

This accepts the following input formats (adding more should be as simple as updating the filename regex used):

- `.jpg`
- `.webp`
- `.png`

WARNING: this plugin re-generates the blurhash on every build! Use this as minimally as possible and consider using a local dev image server that caches the images (currently in development) instead.

## Usage

Assuming we have a file at `sample.jpg`, we could use this plugin like so:

```svelte
<script lang="ts">
  import Image from "$lib/components/Image";
  import src from "sample.jpg"; // Standard Vite image import
  import blurhash, { mean, width, height } from "sample.jpg?blurhash";
</script>

<Image {src} {blurhash} {mean} {width} {height} />
```

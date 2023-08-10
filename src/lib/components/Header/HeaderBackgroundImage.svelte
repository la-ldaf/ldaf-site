<script lang="ts">
  import Image, { type Srcset } from "$lib/components/Image";

  const screenWidths = [1024, 1280, 1366, 1440, 1920, 2048, 2560, 3840];
  const displayedWidths = screenWidths.map((width) => Math.ceil(width * 0.3));

  const getSrcset = (urls: string[]): [string, number][] =>
    urls.map((url, i) => [url, displayedWidths[i]]);

  import jpegFallback from "$lib/assets/header-bg-original.jpg?quality=85&aspect=2.07:1&imagetools";
  import {
    width,
    height,
  } from "$lib/assets/header-bg-original.jpg?quality=85&aspect=2.0.7:1&as=meta:width;height&imagetoolsMetadata";

  import resizedURLs from "$lib/assets/header-bg-original.jpg?quality=85&aspect=2.07:1&w=307;384;410;432;576;614;788;1152&format=jpeg;webp;avif&imagetoolsMultiple";

  const [resizedJPEGs, resizedWebPs, resizedAVIFs] = resizedURLs.reduce(
    (acc, url, i) => {
      acc[i % 3].push(url);
      return acc;
    },
    [[], [], []] as [string[], string[], string[]]
  );

  const jpegSrcset: Srcset = [jpegFallback, ...getSrcset(resizedJPEGs)];

  import webpFallback from "$lib/assets/header-bg-original.jpg?format=webp&quality=85&aspect=2.07:1&imagetools";
  const webpSrcset: Srcset = [webpFallback, ...getSrcset(resizedWebPs)];

  import avifFallback from "$lib/assets/header-bg-original.jpg?format=avif&quality=85&aspect=2.07:1&imagetools";
  const avifSrcset: Srcset = [avifFallback, ...getSrcset(resizedAVIFs)];

  import blurhash from "$lib/assets/header-bg-original.jpg?blurhash";

  let className: string | undefined;
  export { className as class };
</script>

<Image
  class={className}
  alt=""
  src=""
  {width}
  {height}
  {blurhash}
  preserveAspectRatio={false}
  canUpscaleImage
  sources={[
    { type: "image/avif", srcset: avifSrcset, media: "(min-width: 1024px)" },
    { type: "image/webp", srcset: webpSrcset, media: "(min-width: 1024px)" },
    { type: "image/jpg", srcset: jpegSrcset, media: "(min-width: 1024px)" },
  ]}
  sizes="30vw"
/>

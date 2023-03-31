<script lang="ts">
  import "./Image.scss";
  import { decodeBlurHash } from "fast-blurhash";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import classNames from "$lib/classNames";

  let thisImg: HTMLImageElement;
  let thisBg: HTMLCanvasElement;

  let imageLoaded = false;

  export let src: string;
  export let alt: string;

  export let height: undefined | number = undefined;
  export let width: undefined | number = undefined;
  export let blurHash: undefined | string = undefined;

  let canvasWidth: undefined | number = undefined;
  let canvasHeight: undefined | number = undefined;

  if ((!width || !height) && blurHash) {
    console.warn("blurHash was set but width or height was missing");
  }

  onMount(() => {
    if (width && height && blurHash) {
      const aspectRatio = width / height,
        w = Math.ceil(150 * aspectRatio),
        h = 150;
      const pixels = decodeBlurHash(blurHash, w, h);
      const ctx = thisBg.getContext("2d");
      if (!ctx) return;
      const imageData = ctx.createImageData(w, h);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
    }
  });

  let className: string | undefined = undefined;
  export { className as class };

  let imageClassName: string | undefined = undefined;

  const imgProps = { class: imageClassName, width, height, border: 0, ...$$restProps };

  let imageStyleString = "opacity: 0;";
</script>

<div role="img" class={classNames("ldaf-lazy-img__container", className)}>
  <noscript>
    <img {src} {alt} {...imgProps} />
  </noscript>
  <img
    {...imgProps}
    {alt}
    class={classNames("ldaf-lazy-img__img", imageClassName)}
    style={imageLoaded ? undefined : imageStyleString}
    bind:this={thisImg}
  />
  {#if browser && !imageLoaded}
    <canvas
      class="ldaf-lazy-img__bg"
      bind:this={thisBg}
      width={canvasWidth}
      height={canvasHeight}
    />
  {/if}
</div>

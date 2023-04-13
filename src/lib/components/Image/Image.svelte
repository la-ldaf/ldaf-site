<script lang="ts">
  import "./Image.scss";
  import classNames from "$lib/classNames";
  import IntersectionObserver from "$lib/components/IntersectionObserver";
  import type { Color } from "./types";
  import { browser } from "$app/environment";

  export let src: string;
  export let alt: string;
  export let preload = false;
  export let height: undefined | number = undefined;
  export let width: undefined | number = undefined;
  export let blurhash: undefined | string = undefined;
  export let mean: undefined | Color = undefined;
  let className: string | undefined = undefined;
  export { className as class };
  export let imageClass: string | undefined = undefined;

  if ((!width || !height) && blurhash) {
    console.warn("blurhash was set but width or height was missing");
  }

  let nativeLazyLoading = false;
  if (browser) {
    nativeLazyLoading = "loading" in HTMLImageElement.prototype;
  }

  const canvasSize = 32;

  let thisBg: HTMLCanvasElement;
  let thisContainer: HTMLDivElement;

  let load = false;
  let imageLoaded = false;
  let intersecting = false;

  $: load = !!(intersecting && src) || preload;
  $: if (!load) imageLoaded = false;

  $: srcProp = preload
    ? { src }
    : nativeLazyLoading
    ? ({ src, loading: "lazy" } as const)
    : load
    ? { src }
    : {};

  $: imageLoadClass = imageLoaded
    ? "ldaf-lazy-img__loaded"
    : src
    ? "ldaf-lazy-img__loading"
    : "ldaf-lazy-img__unloaded";

  // This theoretically shouldn't be needed since the BlurhashRenderer script will have already run and
  // drawn the blurhash before Svelte has mounted and this runs. Unfortunately, when Svelte first
  // runs the component code it does something (not sure what) that clears the canvas, which
  // flashes the average-color background until the image loads. This line fixes
  // that. Unfortunately this does not solve the problem of drawing the blurhashes when the
  // BlurhashRenderer has been omitted, since this relies on the window global that is set by that
  // script.
  $: if (width && height && blurhash && thisBg && window.drawBlurhash) {
    window.drawBlurhash(thisBg, blurhash);
  }

  const imgProps = { class: imageClass, width, height, border: 0, ...$$restProps };
</script>

<IntersectionObserver
  target={thisContainer}
  once={true}
  onIntersect={() => (intersecting = true)}
  enabled={!preload && !nativeLazyLoading}
>
  <div
    role="img"
    aria-label={alt}
    class={classNames(
      "ldaf-lazy-img",
      "ldaf-lazy-img__container",
      preload && "ldaf-lazy-img__preload",
      className
    )}
    bind:this={thisContainer}
  >
    {#if !preload}
      <noscript>
        <img {...imgProps} class="ldaf-lazy-img__backup-img" {src} alt="" />
      </noscript>
    {/if}
    <img
      {...imgProps}
      alt=""
      class={classNames("ldaf-lazy-img__img", imageLoadClass, imageClass)}
      on:load={() => (imageLoaded = true)}
      {...srcProp}
    />
    {#if blurhash}
      <canvas
        class="ldaf-lazy-img__blur-bg"
        width={canvasSize}
        height={canvasSize}
        data-blurhash={blurhash}
        bind:this={thisBg}
      />
    {/if}
    <div
      class="ldaf-lazy-img__color-bg"
      style={mean && `background-color: rgb(${mean.r}, ${mean.g}, ${mean.b});`}
    />
  </div>
</IntersectionObserver>

<script lang="ts">
  import "./Image.scss";
  import { browser } from "$app/environment";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/support";
  import classNames from "$lib/util/classNames";
  import IntersectionObserver from "$lib/components/IntersectionObserver";
  import warn from "$lib/util/warn";
  import type { Color } from "./types";

  type Loading = "eager" | "lazy";

  export let src: string;
  export let alt: string;
  export let loading: Loading = "lazy";
  export let height: undefined | number = undefined;
  export let width: undefined | number = undefined;
  export let blurhash: undefined | string = undefined;
  export let mean: undefined | Color = undefined;
  let className: string | undefined = undefined;
  export { className as class };
  export let imageClass: string | undefined = undefined;

  if (!width || !height) warn("image width or height was missing!");

  const canvasSize = 32;

  let thisBg: HTMLCanvasElement;
  let thisContainer: HTMLDivElement;

  let imageLoaded = false;
  $: if (!src) imageLoaded = false;

  let intersecting = false;

  $: srcProps =
    loading === "eager" && src
      ? { src }
      : !browser || !src
      ? {}
      : lazyImageLoadingSupport || !intersectionObserverSupport || intersecting
      ? { src }
      : {};

  $: imageLoadClass = imageLoaded
    ? "ldaf-img__loaded"
    : src
    ? "ldaf-img__loading"
    : "ldaf-img__unloaded";

  // This theoretically shouldn't be needed since the BlurhashRenderer script will have already run and
  // drawn the blurhash before Svelte has mounted and this runs. Unfortunately, when Svelte first
  // runs the component code it does something (not sure what) that clears the canvas, which
  // flashes the average-color background until the image loads. This line fixes
  // that. Unfortunately this does not solve the problem of drawing the blurhashes when the
  // BlurhashRenderer has been omitted, since this relies on the window global that is set by that
  // script.
  $: if (blurhash && thisBg && window.drawBlurhash) {
    window.drawBlurhash(thisBg, blurhash);
  }

  const imgProps = { class: imageClass, width, height, border: 0, ...$$restProps };
</script>

<IntersectionObserver
  target={thisContainer}
  once={true}
  onIntersect={() => (intersecting = true)}
  enabled={loading === "lazy" && intersectionObserverSupport && !lazyImageLoadingSupport}
>
  <div
    role="img"
    aria-label={alt}
    class={classNames(
      "ldaf-img",
      "ldaf-img__container",
      loading === "eager" && "ldaf-img__eager",
      className
    )}
    bind:this={thisContainer}
  >
    {#if loading === "lazy"}
      <noscript>
        <img {...imgProps} class="ldaf-img__backup-img" {src} alt="" />
      </noscript>
    {/if}
    <img
      {...imgProps}
      alt=""
      class={classNames("ldaf-img__img", imageLoadClass, imageClass)}
      on:load={() => (imageLoaded = true)}
      {loading}
      {...srcProps}
    />
    {#if blurhash}
      <canvas
        class="ldaf-img__blur-bg"
        width={canvasSize}
        height={canvasSize}
        data-blurhash={blurhash}
        bind:this={thisBg}
      />
    {/if}
    {#if mean}
      <div
        class="ldaf-img__color-bg"
        style={`background-color: rgb(${mean.r}, ${mean.g}, ${mean.b});`}
      />
    {/if}
  </div>
</IntersectionObserver>

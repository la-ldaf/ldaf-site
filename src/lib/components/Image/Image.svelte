<script lang="ts">
  import "./Image.scss";
  import classNames from "$lib/classNames";
  import IntersectionObserver from "$lib/components/IntersectionObserver";
  import drawBlurhash from "./drawBlurhash";

  let thisImg: HTMLImageElement;
  let thisBg: HTMLCanvasElement;
  let thisContainer: HTMLDivElement;

  let imageLoaded = false;
  $: imageLoadClass = imageLoaded
    ? "ldaf-lazy-img__loaded"
    : thisImg && thisImg.src
    ? "ldaf-lazy-img__loading"
    : "ldaf-lazy-img__unloaded";

  export let src: string;
  export let preload = false;

  const preloadProps = preload ? { src } : {};

  export let alt: string;

  export let height: undefined | number = undefined;
  export let width: undefined | number = undefined;
  export let blurhash: undefined | string = undefined;
  type Color = { r: number; g: number; b: number };
  export let mean: undefined | Color = undefined;

  if ((!width || !height) && blurhash) {
    console.warn("blurhash was set but width or height was missing");
  }

  const canvasSize = 32;

  let intersecting = false;
  $: if (intersecting) thisImg.src = src;

  $: if (width && height && blurhash && thisBg) drawBlurhash(thisBg, blurhash);

  let className: string | undefined = undefined;
  export { className as class };

  let imageClass: string | undefined = undefined;

  const imgProps = { class: imageClass, width, height, border: 0, ...$$restProps };
</script>

<IntersectionObserver target={thisContainer} once={true} onIntersect={() => (intersecting = true)}>
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
      bind:this={thisImg}
      on:load={() => (imageLoaded = true)}
      {...preloadProps}
    />
    <canvas
      class="ldaf-lazy-img__blur-bg"
      width={canvasSize}
      height={canvasSize}
      data-blurhash={blurhash}
      bind:this={thisBg}
    />
    <div
      class="ldaf-lazy-img__color-bg"
      style={mean && `background-color: rgb(${mean.r}, ${mean.g}, ${mean.b});`}
    />
  </div>
</IntersectionObserver>

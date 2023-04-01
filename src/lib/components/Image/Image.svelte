<script lang="ts">
  import "./Image.scss";
  import classNames from "$lib/classNames";
  import IntersectionObserver from "$lib/components/IntersectionObserver";
  import drawBlurHash from "./drawBlurHash";

  let thisImg: HTMLImageElement;
  let thisBg: HTMLCanvasElement;
  let thisContainer: HTMLDivElement;

  let imageLoaded = false;
  $: imageStyleString = imageLoaded ? "" : "opacity: 0;";

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

  // const aspectRatio = width && height && width / height;
  const canvasSize = 32;

  let intersecting = false;
  $: if (intersecting) thisImg.src = src;

  $: width && height && blurhash && thisBg && drawBlurHash(thisBg, blurhash);

  let className: string | undefined = undefined;
  export { className as class };

  let imageClassName: string | undefined = undefined;

  const imgProps = { class: imageClassName, width, height, border: 0, ...$$restProps };
</script>

<IntersectionObserver target={thisContainer} once={false} onIntersect={() => (intersecting = true)}>
  <div
    role="img"
    aria-label={alt}
    class={classNames("ldaf-lazy-img", "ldaf-lazy-img__container", className)}
    bind:this={thisContainer}
  >
    <noscript>
      <img {...imgProps} class="ldaf-lazy-img__backup-img" {src} alt="" />
    </noscript>
    <img
      {...imgProps}
      alt=""
      class={classNames("ldaf-lazy-img__img", imageClassName)}
      style={imageStyleString}
      bind:this={thisImg}
      on:load={() => (imageLoaded = true)}
      {...preloadProps}
    />
    <canvas
      class="ldaf-lazy-img__blur-bg"
      bind:this={thisBg}
      width={canvasSize}
      height={canvasSize}
    />
    <div
      class="ldaf-lazy-img__color-bg"
      style={mean && `background-color: rgb(${mean.r}, ${mean.g}, ${mean.b});`}
    />
  </div>
</IntersectionObserver>

<script lang="ts">
  import "./Image.scss";
  import { browser } from "$app/environment";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import classNames from "$lib/util/classNames";
  import IntersectionObserver from "$lib/components/IntersectionObserver";
  import warn from "$lib/util/warn";
  import type { Loading, LazyLoading, Color, Sources, Srcset } from "./types";

  export let height: undefined | number = undefined;
  export let width: undefined | number = undefined;

  // Whether the image should fit its container
  export let fit = false;

  export let src: string;

  // Tuple of [src, width]
  const getSrcsetAttr = ([defaultSrc, ...widthsOrDPIStrings]: Srcset) => {
    const typeSet = new Set(widthsOrDPIStrings.map((w) => typeof w));
    if (typeSet.size > 1) {
      throw new Error(
        "srcset attribute must include either width or DPI annotations, but not both"
      );
    }
    const isWidths = typeSet.has("number");
    const withFilteredWidths = isWidths
      ? // we're smarter than typescript here, it doesn't know how sets work
        widthsOrDPIStrings.filter(([_, w]) => (width ?? 0) > (w as number))
      : widthsOrDPIStrings;
    return [
      ...withFilteredWidths.map(
        ([source, sourceWidthOrDPIString]) =>
          `${source} ${
            typeof sourceWidthOrDPIString === "string"
              ? sourceWidthOrDPIString
              : `${sourceWidthOrDPIString}w`
          }`
      ),
      defaultSrc,
    ].join(", ");
  };

  export let sources: Sources = [];

  export let alt: string;
  export let loading: Loading = "lazy";
  export let blurhash: undefined | string = undefined;
  export let mean: undefined | Color = undefined;
  let className: string | undefined = undefined;
  export { className as class };
  export let imageClass: string | undefined = undefined;

  const getLazyLoadingType = (
    loading: Loading,
    lazyImageLoadingSupport: boolean,
    intersectionObserverSupport: boolean,
    explicitLazyLoadingType?: LazyLoading
  ): LazyLoading => {
    if (explicitLazyLoadingType) return explicitLazyLoadingType;
    if (loading !== "lazy") return "none";
    if (lazyImageLoadingSupport) return "native";
    if (intersectionObserverSupport) return "intersectionObserver";
    return "none";
  };

  // Used to set the lazy loading type explicitly in Storybook
  let explicitLazyLoadingType: LazyLoading | undefined = undefined;
  export { explicitLazyLoadingType as lazyLoadingType };

  let lazyLoadingType: LazyLoading;
  $: lazyLoadingType = getLazyLoadingType(
    loading,
    lazyImageLoadingSupport,
    intersectionObserverSupport,
    explicitLazyLoadingType
  );

  if (!width || !height) warn("image width or height was missing!");

  $: decoding = loading === "lazy" ? ("async" as const) : ("auto" as const);

  const canvasSize = 32;

  let thisBg: HTMLCanvasElement;
  let thisContainer: HTMLDivElement;

  let imageLoaded = false;
  $: if (!src) imageLoaded = false;

  let intersecting = false;

  const withNoSrcProp = {};
  let srcProps = withNoSrcProp;
  $: withSrcProp = { src };
  $: if (!src) {
    srcProps = withNoSrcProp;
  } else if (loading === "eager") {
    srcProps = withSrcProp;
  } else if (!browser) {
    srcProps = withNoSrcProp;
  } else if (lazyLoadingType === "native" || lazyLoadingType === "none" || intersecting) {
    srcProps = withSrcProp;
  } else {
    srcProps = withNoSrcProp;
  }

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
  on:intersect={() => (intersecting = true)}
  enabled={lazyLoadingType === "intersectionObserver"}
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
    <picture>
      {#each sources as { media, type, srcset }}
        <source {media} {type} srcset={getSrcsetAttr(srcset)} />
      {/each}
      <img
        {...imgProps}
        alt=""
        class={classNames("ldaf-img__img", fit && "ldaf-img__img-fit", imageLoadClass, imageClass)}
        on:load={() => (imageLoaded = true)}
        {loading}
        {decoding}
        {...srcProps}
      />
    </picture>
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
        style={`background-color: rgb(${Math.round(mean.r)}, ${Math.round(mean.g)}, ${Math.round(
          mean.b
        )});`}
      />
    {/if}
  </div>
</IntersectionObserver>

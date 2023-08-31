<script lang="ts">
  import "./Image.scss";
  import { browser } from "$app/environment";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import type { SizeType } from "$lib/constants/images";
  import classNames from "$lib/util/classNames";
  import IntersectionObserver from "$lib/components/IntersectionObserver";
  import warn from "$lib/util/warn";
  import type { Loading, LazyLoading, Color, Sources } from "./types";
  import { getLazyLoadingType, getSizesAttr, getSrcsetAttr, resolveSources } from "./helpers";

  export let width: number | null | undefined = undefined;
  export let height: number | null | undefined = undefined;

  // Whether the image should fit its container
  export let fit = true;

  // The size type of the image
  export let sizeType: SizeType | "static" = "static";
  export let canUpscaleImage = sizeType === "full-bleed";
  export let preserveAspectRatio = (
    {
      static: true,
      card: false,
      "full-bleed": true,
      "col-9": true,
      "col-12": true,
    } satisfies Record<SizeType | "static", boolean>
  )[sizeType];

  export let src: string;

  let sourcesProp: Sources | undefined = undefined;
  export { sourcesProp as sources };

  $: resolvedSources = resolveSources(src, sourcesProp, sizeType, width, height);

  let overrideSizes: string | undefined = undefined;
  export { overrideSizes as sizes };

  export let alt: string;
  export let loading: Loading = "lazy";
  export let blurhash: string | null | undefined = undefined;
  export let mean: undefined | Color = undefined;
  let className: string | undefined = undefined;
  export { className as class };
  export let imageClass: string | undefined = undefined;

  // Used to set the lazy loading type explicitly in Storybook
  let explicitLazyLoadingType: LazyLoading | undefined = undefined;
  export { explicitLazyLoadingType as lazyLoadingType };

  let lazyLoadingType: LazyLoading;
  $: lazyLoadingType = getLazyLoadingType(
    loading,
    lazyImageLoadingSupport,
    intersectionObserverSupport,
    explicitLazyLoadingType,
  );

  $: if (!width || !height) warn("image width or height was missing!");

  $: decoding = loading === "lazy" ? ("async" as const) : ("auto" as const);

  const canvasSize = 32;

  let thisBg: HTMLCanvasElement;
  let thisContainer: HTMLDivElement;

  let imageLoaded = false;
  let lastSrc = src;

  $: {
    if (!src || src !== lastSrc) imageLoaded = false;
    lastSrc = src;
  }

  let intersecting = false;

  $: showSources =
    loading === "eager" ||
    (browser && (lazyLoadingType === "native" || lazyLoadingType === "none" || intersecting));

  const withNoSrcProp = {};
  let srcProps = withNoSrcProp;
  $: withSrcProp = { src };
  $: srcProps = src && showSources ? withSrcProp : withNoSrcProp;

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

  $: imgProps = { class: imageClass, width, height, border: 0, ...$$restProps };

  const getContainerStyleProps = (
    width: number | null | undefined,
    height: number | null | undefined,
    fit: boolean,
    preserveAspectRatio: boolean,
    canUpscaleImage: boolean,
  ) =>
    [
      ...(width && !canUpscaleImage ? [`max-width: ${width}px`] : []),
      ...(height && !canUpscaleImage ? [`max-height: ${height}px`] : []),
      ...(fit && preserveAspectRatio && width && height
        ? [`aspect-ratio: ${width} / ${height}`]
        : []),
    ].join("; ");

  $: styleProp =
    getContainerStyleProps(width, height, fit, preserveAspectRatio, canUpscaleImage) || undefined;
</script>

{#key src}
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
        className,
      )}
      bind:this={thisContainer}
      style={styleProp}
    >
      {#if loading === "lazy"}
        <noscript>
          <img {...imgProps} class="ldaf-img__backup-img" {src} alt="" />
        </noscript>
      {/if}
      <picture>
        {#if resolvedSources && showSources}
          {#each resolvedSources as { media, type, srcset }}
            {@const srcsetAttr = getSrcsetAttr(srcset, width)}
            {#if srcsetAttr}
              <source
                {media}
                {type}
                srcset={srcsetAttr}
                sizes={overrideSizes ?? getSizesAttr(sizeType, fit, width)}
              />
            {/if}
          {/each}
        {/if}
        <!-- the only place we use an on:click on an image is as an optional alternative to a button that's also present -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img
          {...imgProps}
          alt=""
          class={classNames(
            "ldaf-img__img",
            fit && "ldaf-img__img-fit",
            imageLoadClass,
            imageClass,
          )}
          on:load={() => (imageLoaded = true)}
          on:click
          on:keydown
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
          bind:this={thisBg}
          data-blurhash={blurhash}
        />
      {/if}
      {#if mean}
        <div
          class="ldaf-img__color-bg"
          style={`background-color: rgb(${Math.round(mean.r)}, ${Math.round(mean.g)}, ${Math.round(
            mean.b,
          )});`}
        />
      {/if}
    </div>
  </IntersectionObserver>
{/key}

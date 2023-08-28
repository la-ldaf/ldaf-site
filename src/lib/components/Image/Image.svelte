<script lang="ts">
  import "./Image.scss";
  import { browser } from "$app/environment";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { screenSizes, sizesByScreenSizeByType, type SizeType } from "$lib/constants/images";
  import classNames from "$lib/util/classNames";
  import IntersectionObserver from "$lib/components/IntersectionObserver";
  import warn from "$lib/util/warn";
  import type { Loading, LazyLoading, Color, Sources, GetSources, Srcset } from "./types";

  export let height: number | null | undefined = undefined;
  export let width: number | null | undefined = undefined;

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

  const getSrcsetAttr = (srcset: Srcset): string | undefined => {
    if (srcset.length === 0) return;
    const hasFallback = typeof srcset[0] === "string";
    const sourcesAndWidths = hasFallback ? srcset.slice(1) : srcset;
    return [
      ...sourcesAndWidths.map(([source, width]) => `${source} ${width}w`),
      ...(hasFallback ? [`${srcset[0]} ${width}w`] : []),
    ].join(", ");
  };

  export let sources: Sources | GetSources | undefined = undefined;

  const getWidths = (sizeType: SizeType): number[] => {
    const imageWidth = width;
    const unfilteredWidths = Object.values(sizesByScreenSizeByType[sizeType]);
    const unfilteredWidthsAndDoubleWidths = [
      ...new Set([...unfilteredWidths, ...unfilteredWidths.map((n) => n * 2)]),
    ].sort((a, b) => a - b);
    if (!imageWidth) return unfilteredWidthsAndDoubleWidths;
    return unfilteredWidthsAndDoubleWidths.filter((w) => w <= imageWidth);
  };

  const getResolvedSources = (
    src: string,
    sources: Sources | GetSources | undefined,
    sizeType: SizeType | "static",
  ): Sources => {
    if (!sources) return [];
    if (Array.isArray(sources)) return sources;
    if (sizeType === "static" && !width) return [{ srcset: [src] }];
    const widths = sizeType == "static" ? (width ? [width, width * 2] : []) : getWidths(sizeType);
    return sources(src, { widths, srcWidth: width, srcHeight: height });
  };

  $: resolvedSources = getResolvedSources(src, sources, sizeType);

  let overrideSizes: string | undefined = undefined;
  export { overrideSizes as sizes };

  const getSizesAttr = (sizeType: SizeType | "static", fit: boolean) => {
    if (overrideSizes) return overrideSizes;
    if (!fit) return `${width}px`;
    if (sizeType === "full-bleed") return "100vw";
    // 100vw in the following line is technically a lie but the worst it will do is load a slightly
    // larger version of an image explicitly marked "static", all of which should have sources
    // explicitly specified in the code.
    if (sizeType === "static") return `(max-width: ${width}px) 100vw, ${width}px`;
    const sizesByScreenSize = sizesByScreenSizeByType[sizeType];
    let lastSize: number = 0;
    const screenSizesAndSizes: [number, number][] = [];
    for (const screenSize of screenSizes) {
      const size = sizesByScreenSize[screenSize];
      if (size === lastSize) continue;
      lastSize = size;
      screenSizesAndSizes.push([screenSize, size]);
    }
    const maxSize = lastSize;
    const sizeStrings: string[] = [];
    for (const [screenSize, size] of screenSizesAndSizes) {
      if (size < maxSize) {
        sizeStrings.push(`(max-width: ${screenSize}px) ${size}px`);
        continue;
      }
      sizeStrings.push(`${size}px`);
      break;
    }
    return sizeStrings.join(", ");
  };

  export let alt: string;
  export let loading: Loading = "lazy";
  export let blurhash: string | null | undefined = undefined;
  export let mean: undefined | Color = undefined;
  let className: string | undefined = undefined;
  export { className as class };
  export let imageClass: string | undefined = undefined;

  const getLazyLoadingType = (
    loading: Loading,
    lazyImageLoadingSupport: boolean,
    intersectionObserverSupport: boolean,
    explicitLazyLoadingType?: LazyLoading,
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
    explicitLazyLoadingType,
  );

  if (!width || !height) {
    warn("image width or height was missing!");
  }

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

  $: styleProp = getContainerStyleProps(width, height, fit, preserveAspectRatio, canUpscaleImage);
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
            <source
              {media}
              {type}
              srcset={getSrcsetAttr(srcset)}
              sizes={getSizesAttr(sizeType, fit)}
            />
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

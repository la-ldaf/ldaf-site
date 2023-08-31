import { screenSizes, sizesByScreenSizeByType, type SizeType } from "$lib/constants/images";
import warn from "$lib/util/warn";
import type { LazyLoading, Loading, Sources, Srcset } from "./types";

export const getLazyLoadingType = (
  loading: Loading,
  lazyImageLoadingSupport: boolean,
  intersectionObserverSupport: boolean,
  explicitLazyLoadingType?: LazyLoading,
) => {
  if (explicitLazyLoadingType) return explicitLazyLoadingType;
  if (loading !== "lazy") return "none";
  if (lazyImageLoadingSupport) return "native";
  if (intersectionObserverSupport) return "intersectionObserver";
  return "none";
};

export const getGetWidths =
  <T extends string = SizeType>(sizesByScreenSizeByType: Record<T, Record<number, number>>) =>
  (sizeType: T, imageWidth?: number | null | undefined): number[] => {
    const unfilteredWidths = Object.values(sizesByScreenSizeByType[sizeType]);
    const unfilteredWidthsAndDoubleWidths = [
      ...new Set([...unfilteredWidths, ...unfilteredWidths.map((n) => n * 2)]),
    ];
    if (!imageWidth) return unfilteredWidthsAndDoubleWidths;
    return unfilteredWidthsAndDoubleWidths.filter((w) => w <= imageWidth);
  };

export const getWidths = getGetWidths(sizesByScreenSizeByType);

export const getResolveSources = <T extends string = SizeType>(
  sizesByScreenSizeByType: Record<T, Record<number, number>>,
) => {
  const getWidths = getGetWidths(sizesByScreenSizeByType);
  return (
    src: string,
    sources: Sources | undefined,
    sizeType: T | "static",
    imageWidth?: number | null | undefined,
    imageHeight?: number | null | undefined,
  ) => {
    if (!sources) return [];
    if (Array.isArray(sources)) return sources;
    const widths =
      sizeType === "static"
        ? imageWidth
          ? [imageWidth, imageWidth * 2]
          : []
        : getWidths(sizeType, imageWidth);
    return sources(src, { widths, srcWidth: imageWidth, srcHeight: imageHeight });
  };
};

export const resolveSources = getResolveSources(sizesByScreenSizeByType);

export const getSrcsetAttr = (
  srcset: Srcset,
  imageWidth?: number | null | undefined,
): string | undefined => {
  if (srcset.length === 0) return;
  const hasFallback = typeof srcset[0] === "string";
  const sourcesAndWidths = hasFallback ? srcset.slice(1) : srcset;
  return [
    ...sourcesAndWidths.map(([source, width]) => `${source} ${width}w`),
    ...(hasFallback ? [imageWidth ? `${srcset[0]} ${imageWidth}w` : srcset[0]] : []),
  ].join(", ");
};

export const getGetSizesAttr =
  <T extends string = SizeType>(
    sizesByScreenSizeByType: Record<T, Record<number, number>>,
    overrideSizes: Partial<Record<T, string>>,
    screenSizes: number[],
  ) =>
  (
    sizeType: T | "static",
    fit: boolean,
    imageWidth?: number | null | undefined,
  ): string | undefined => {
    if (sizeType === "static") {
      // 100vw in the following line is technically a lie but the worst it will do is load a slightly
      // larger version of an image explicitly marked "static", all of which should have sources
      // explicitly specified in the code.
      if (imageWidth) {
        if (fit) return `(max-width: ${imageWidth}px) 100vw, ${imageWidth}px`;
        return `${imageWidth}px`;
      }
      warn(`image with sizeType="static" had no image width set`);
      return undefined;
    }
    const overriddenSize = overrideSizes[sizeType];
    if (overriddenSize) return overriddenSize;
    if (!fit) return imageWidth ? `${imageWidth}px` : undefined;
    const sizesByScreenSize = sizesByScreenSizeByType[sizeType];
    let lastSize = 0;
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

export const getSizesAttr = getGetSizesAttr(
  sizesByScreenSizeByType,
  { "full-bleed": "100vw" },
  screenSizes,
);

export const getContainerStyleAttr = () => {};

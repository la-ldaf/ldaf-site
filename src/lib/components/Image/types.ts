export type Color = { r: number; g: number; b: number };
export type Loading = "eager" | "lazy";
export type LazyLoading = "none" | "native" | "intersectionObserver";

type SrcsetSrc = [string, number];
export type Srcset = [string, ...SrcsetSrc[]] | SrcsetSrc[];

export type Format = `image/${string}`;
export type Source = {
  media?: string;
  type?: Format;
  srcset: Srcset;
};

export type Sources = Source[];

export type GetSources = (
  url: string,
  options?: {
    widths: number[];
    srcWidth?: number | null | undefined;
    srcHeight?: number | null | undefined;
    maxHeight?: number | null | undefined;
  }
) => Sources;

export type FixedImage = { format: Format; size: number | "original"; src: string };
export type FixedSetOfImages = FixedImage[];

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

export type SourcesArr = Source[];

export type SourcesFn = (
  url: string,
  options?: {
    widths: number[];
    srcWidth?: number | null | undefined;
    srcHeight?: number | null | undefined;
  },
) => SourcesArr;

export type Sources = SourcesFn | SourcesArr;

export type FixedImage = { format: Format; size: number | "original"; src: string };
export type FixedSetOfImages = FixedImage[];

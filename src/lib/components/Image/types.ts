export type Color = { r: number; g: number; b: number };
export type Loading = "eager" | "lazy";
export type LazyLoading = "none" | "native" | "intersectionObserver";

export type SrcsetDefault = string;
export type SrcsetWidth = [string, number | string];
export type Srcset = [SrcsetDefault, ...SrcsetWidth[]];

export type Format = `image/${string}`;
export type Source = {
  media?: string;
  type?: Format;
  srcset: Srcset;
};

export type Sources = Source[];

export type FixedImage = { format: Format; size: number | "original"; src: string };
export type FixedSetOfImages = FixedImage[];

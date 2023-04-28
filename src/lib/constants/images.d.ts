declare module "$lib/constants/imageSizes.json" {
  export type ImageSize = number | "original";
  export type Format = `image/${string}`;
  export const sizes: ImageSize[];
  export const formats: Format[];
}

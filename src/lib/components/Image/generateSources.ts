import type { Srcset, Sources, Format, FixedImage, FixedSetOfImages } from "./types";
import { sizes as imageSizes, formats as imageFormatStrings } from "$lib/constants/images.json";

const imageFormats = imageFormatStrings.every((str) => str.startsWith("image/"))
  ? (imageFormatStrings as `image/${string}`[])
  : undefined;

if (imageFormats === undefined) {
  throw new Error(
    `the following formats do not have the correct MIME type structure: ${imageFormatStrings.filter(
      (str) => !str.startsWith("image/")
    )}`
  );
}

type FixedImageWithoutFormat = Omit<FixedImage, "format">;

const getSortedUniqueSizes = (sizes: FixedImageWithoutFormat[]) => {
  const sorted = [...sizes].sort(({ size: sizeA = "original" }, { size: sizeB = "original" }) => {
    if (sizeA === sizeB) return 0;
    if (sizeA === "original") return -1;
    if (sizeB === "original") return 1;
    return sizeA < sizeB ? -1 : 1;
  });
  const { arr } = sorted.reduce<{
    lastSize: number | "original" | undefined;
    arr: FixedImageWithoutFormat[];
  }>(
    (acc, img) => {
      if (img.size === acc.lastSize) return acc;
      acc.arr.push(img);
      return acc;
    },
    {
      lastSize: undefined,
      arr: [],
    }
  );
  return arr;
};

export const generateSourcesFromFixedSetOfImages = (
  images: FixedSetOfImages,
  sizes = imageSizes,
  formats = imageFormats
): Sources => {
  const byFormat = images.reduce<Record<Format, FixedImageWithoutFormat[]>>(
    (acc, { format, ...img }) => {
      if (!acc[format]) acc[format] = [];
      acc[format].push(img);
      return acc;
    },
    {}
  );
  return formats.map((format) => ({
    type: format,
    srcset: getSortedUniqueSizes(byFormat[format])
      .filter(({ size }) => size === "original" || sizes.includes(size))
      .map(({ size, src }) => (size === "original" ? src : [src, size])) as Srcset,
  }));
};

/* type ImageData = Record<never, never>;
 * const generateSourcesFromURLGenerator = (
 *   imageData: ImageData,
 *   generator: (imageData: ImageData, size: number) => Source,
 *   sizes = imageSizes,
 *   formats = imageFormats,
 * ) => {
 *   // TODO
 * }; */

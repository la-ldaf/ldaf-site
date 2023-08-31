import type { SourcesFn, Source } from "$lib/components/Image";
import { defaultWidths, formats, quality } from "$lib/constants/images";

const getURL = (url: string, format?: string, size?: number) =>
  `${url}?${Object.entries({
    fm: format,
    w: size,
    q: quality,
  })
    .filter(([_, val]) => Boolean(val))
    .map((x) => x.join("="))
    .join("&")}`;

const maxAvifMegapixels = 9;
const maxAvifPixels = maxAvifMegapixels * 1000000;

export const getSources: SourcesFn = (
  url,
  { widths, srcWidth, srcHeight } = { widths: [...defaultWidths] },
) => {
  const heightProportion = srcWidth && (srcHeight ? srcHeight / srcWidth : 1);
  return formats.map((format) => {
    const shortFormat = format.slice("image/".length).replace(/^jpeg$/, "jpg");
    const fallback = getURL(url, shortFormat);

    const includeFallback =
      shortFormat !== "avif" ||
      !srcWidth ||
      !heightProportion ||
      srcWidth * (srcWidth * heightProportion) <= maxAvifPixels;

    const filteredWidths =
      shortFormat === "avif" && heightProportion
        ? widths.filter((width) => {
            const height = width * heightProportion;
            const pixels = width * height;
            return pixels <= maxAvifPixels;
          })
        : widths;

    const srcsetEntries = filteredWidths.map((width): [string, number] => [
      getURL(url, shortFormat, width),
      width,
    ]);

    return {
      type: format,
      srcset: includeFallback ? [fallback, ...srcsetEntries] : srcsetEntries,
    } satisfies Source;
  });
};

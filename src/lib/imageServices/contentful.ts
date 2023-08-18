import type { GetSources, Source } from "$lib/components/Image";
import { defaultWidths, formats, quality } from "$lib/constants/images";

type Fit = "pad" | "fill" | "scale" | "crop" | "thumb";

type Options = { format?: string; width?: number; height?: number; fit?: Fit };

const getURL = (url: string, { format, width, height, fit }: Options) =>
  `${url}?${Object.entries({
    fm: format,
    w: width,
    h: height,
    q: quality,
    fit,
  })
    .filter(([_, val]) => Boolean(val))
    .map((x) => x.join("="))
    .join("&")}`;

const maxAvifMegapixels = 9;
const maxAvifPixels = maxAvifMegapixels * 1000000;

export const getSources: GetSources = (
  url,
  { widths, srcWidth, srcHeight, maxHeight } = { widths: [...defaultWidths] }
) => {
  const heightProportion = srcWidth && (srcHeight ? srcHeight / srcWidth : 1);
  return formats.map((longFormat) => {
    const format = longFormat.slice("image/".length).replace(/^jpeg$/, "jpg");
    const height =
      maxHeight && (!srcWidth || !heightProportion || srcWidth * heightProportion > maxHeight)
        ? maxHeight * 2
        : undefined;
    const fallback = getURL(url, {
      format,
      height,
      fit: height ? "crop" : undefined,
    });

    const includeFallback =
      format !== "avif" ||
      !srcWidth ||
      !heightProportion ||
      srcWidth * (srcWidth * heightProportion) <= maxAvifPixels;

    const filteredWidths =
      format === "avif" && heightProportion
        ? widths.filter((width) => {
            const height = width * heightProportion;
            const pixels = width * height;
            return pixels <= maxAvifPixels;
          })
        : widths;

    const srcsetEntries = filteredWidths.map((width): [string, number] => [
      getURL(url, {
        format,
        width,
        height:
          maxHeight && (!heightProportion || width * heightProportion > maxHeight)
            ? maxHeight * 2
            : undefined,
        fit: "fill",
      }),
      width,
    ]);

    return {
      type: longFormat,
      srcset: includeFallback ? [fallback, ...srcsetEntries] : srcsetEntries,
    } satisfies Source;
  });
};

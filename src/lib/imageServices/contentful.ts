import type { Sources } from "$lib/components/Image";
import { sizes, formats, quality } from "$lib/constants/images";

const getURL = (url: string, format?: string, size?: number) =>
  `${url}?${Object.entries({
    fm: format,
    w: size,
    q: quality,
  })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, val]) => Boolean(val))
    .map((x) => x.join("="))
    .join("&")}`;

export const getSources = (url: string): Sources =>
  formats.map((format) => {
    const shortFormat = format.slice("image/".length).replace(/^jpeg$/, "jpg");
    return {
      type: format,
      srcset: [
        getURL(url, shortFormat),
        ...sizes.map((size): [string, number] => [getURL(url, shortFormat, size), size]),
      ],
    };
  });

import partition from "lodash/partition";

export const sizeTypes = ["full-bleed", "col-12", "col-9"] as const;
export type SizeType = (typeof sizeTypes)[number];

type ScreenSize = number;

const screenSizesInit = [360, 412, 720, 960, 1024, 1280, 1366, 1440, 1920, 2560, 3840];
export const screenSizes = [
  ...new Set([...screenSizesInit, ...screenSizesInit.map((n) => n * 2)]),
].sort((a, b) => a - b);

const [mobileScreenSizes, desktopScreenSizes] = partition(screenSizes, (n) => n < 1024);
const mobilePadding = 32;

const mobileSizesInGrid = Object.fromEntries(
  mobileScreenSizes.map((size) => [size, size - mobilePadding])
) as Record<ScreenSize, number>;

export const defaultWidths = [...screenSizes, ...screenSizes.map((n) => n * 2)].sort(
  (a, b) => a - b
);

export const sizesByScreenSizeByType: Record<SizeType, Record<ScreenSize, number>> = {
  // typescript doesn't type the return value of Object.fromEntries as cleanly as it could, so the
  // "as" is necessary. we know it's safe because it's based solely on "as const" values above
  "full-bleed": Object.fromEntries(screenSizes.map((size) => [size, size])),
  "col-12": {
    ...mobileSizesInGrid,
    ...Object.fromEntries(desktopScreenSizes.map((size) => [size, 960])),
  },
  "col-9": {
    ...mobileSizesInGrid,
    ...Object.fromEntries(desktopScreenSizes.map((size) => [size, 712])),
  },
};

export const formats: `image/${string}`[] = ["image/avif", "image/webp", "image/jpeg"];
export const quality = 85;

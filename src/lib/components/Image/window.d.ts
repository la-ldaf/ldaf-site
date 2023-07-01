import type drawBlurhash from "./drawBlurhash";

declare global {
  interface Window {
    drawBlurhash: typeof drawBlurhash;
  }
}

import type drawBlurhash from "./drawBlurhash";
import type { PublicLogger } from "$lib/logger/types";

declare global {
  interface Window {
    drawBlurhash: typeof drawBlurhash;
    logger: PublicLogger;
  }
}

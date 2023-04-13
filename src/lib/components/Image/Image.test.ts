import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { vi, describe, it, expect } from "vitest";
import sampleImage from "../../../sample.jpg";
import sampleImageBlurhash, {
  width as sampleImageWidth,
  height as sampleImageHeight,
  mean as sampleImageMean,
} from "../../../sample.jpg?blurhash";

vi.mock("$app/environment", () => ({
  browser: false,
}));

vi.mock("$lib/support", () => ({
  lazyImageLoadingSupport: false,
  intersectionObserverSupport: false,
}));

import * as environment from "$app/environment";
import * as support from "$lib/support";
import Image from "./Image.svelte";

const withBrowser = (value = true) => ((environment as Record<"browser", boolean>).browser = value);
const withSupport = <T extends keyof typeof support>(key: T, value = true) =>
  ((support as Record<T, boolean>)[key] = value);

const getContainer = () => screen.getAllByRole("img").find((n) => n instanceof HTMLDivElement)!;
const getImage = () => screen.getAllByRole("img").find((n) => n instanceof HTMLImageElement)!;
const getBlurBg = () => getContainer().querySelector(".ldaf-img__blur-bg");
const getMeanBg = () => getContainer().querySelector(".ldaf-img__color-bg");

afterEach(() => vi.resetAllMocks());

describe("Image", () => {
  describe("on the server", () => {
    beforeEach(() => withBrowser(false));

    it('renders without src when loading="lazy"', () => {
      render(Image, {
        props: { src: sampleImage, alt: "", loading: "lazy" },
      });
      expect(getImage()).not.toHaveAttribute("src");
    });

    it('renders with src when loading="eager"', () => {
      render(Image, {
        props: { src: sampleImage, alt: "", loading: "eager" },
      });
      expect(getImage()).toHaveAttribute("src", sampleImage);
    });
  });

  describe("in the browser", () => {
    beforeEach(() => withBrowser(true));

    it('renders with src in the browser when loading="lazy" is available', () => {
      withSupport("intersectionObserverSupport");
      withSupport("lazyImageLoadingSupport");
      render(Image, {
        props: { src: sampleImage, alt: "" },
      });
      expect(getImage()).toHaveAttribute("src", sampleImage);
    });

    it('renders with src in the browser when neither IntersectionObserver nor loading="lazy" is available', () => {
      withSupport("intersectionObserverSupport", false);
      withSupport("lazyImageLoadingSupport", false);
      render(Image, {
        props: { src: sampleImage, alt: "" },
      });
      const image = screen.getAllByRole("img").find((el) => el instanceof HTMLImageElement);
      expect(image).toHaveAttribute("src", sampleImage);
    });
  });
});

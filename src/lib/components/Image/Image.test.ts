import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { vi, describe, it, expect } from "vitest";
import sampleImage from "../../../sample.jpg";
import sampleImageBlurhash, {
  width as sampleImageWidth,
  height as sampleImageHeight,
  mean as sampleImageMean,
} from "../../../sample.jpg?blurhash";

import * as environment from "$app/environment";
import * as support from "$lib/support";
import Image from "./Image.svelte";

vi.mock("$app/environment", () => ({
  browser: false,
}));

vi.mock("$lib/support", () => ({
  lazyImageLoadingSupport: false,
  intersectionObserverSupport: false,
}));

const withBrowser = (value = true) => ((environment as Record<"browser", boolean>).browser = value);
const withSupport = <T extends keyof typeof support>(key: T, value = true) =>
  ((support as Record<T, boolean>)[key] = value);

const getContainer = () => {
  const container = screen.getAllByRole("img").find((n) => n.className.includes("ldaf-img"));
  if (!container) throw new Error("no container found!");
  return container;
};

const getImage = () => {
  const image = screen
    .getAllByRole("img")
    .find((n) => n.className.includes("ldaf-img__img") && n instanceof HTMLImageElement);
  if (!image) throw new Error("no image found!");
  return image;
};

const getBlurBg = () => getContainer().querySelector("canvas.ldaf-img__blur-bg");
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

    describe('when loading="lazy" is available', () => {
      beforeEach(() => {
        withSupport("intersectionObserverSupport");
        withSupport("lazyImageLoadingSupport");
      });
      it("renders with src", () => {
        render(Image, {
          props: { src: sampleImage, alt: "" },
        });
        expect(getImage()).toHaveAttribute("src", sampleImage);
      });
    });

    describe('when loading="lazy" is not available but IntersectionObserver is available', () => {
      beforeEach(() => {
        withSupport("intersectionObserverSupport");
        withSupport("lazyImageLoadingSupport", false);
      });
      it("renders without src", () => {
        render(Image, {
          props: { src: sampleImage, alt: "" },
        });
        expect(getImage()).not.toHaveAttribute("src");
      });
    });

    describe('when neither loading="lazy" nor IntersectionObserver is available', () => {
      beforeEach(() => {
        withSupport("intersectionObserverSupport", false);
        withSupport("lazyImageLoadingSupport", false);
      });
      it('renders with src when neither IntersectionObserver nor loading="lazy" is available', () => {
        render(Image, {
          props: { src: sampleImage, alt: "" },
        });
        expect(getImage()).toHaveAttribute("src", sampleImage);
      });
    });

    describe("when mean color of image is provided", () => {
      it("renders a background div with the mean background color", () => {
        render(Image, {
          props: { src: sampleImage, alt: "", mean: sampleImageMean },
        });
        expect(getMeanBg()).toHaveAttribute(
          "style",
          `background-color: rgb(${sampleImageMean.r}, ${sampleImageMean.g}, ${sampleImageMean.b});`
        );
      });
    });

    describe("when blurhash of image is provided", () => {
      it("renders a background canvas", () => {
        render(Image, {
          props: { src: sampleImage, alt: "", blurhash: sampleImageBlurhash },
        });
        expect(getBlurBg()).toBeInTheDocument();
      });
    });

    describe("when width and height is provided", () => {
      it("uses explicit width and height", () => {
        render(Image, {
          props: { src: sampleImage, alt: "", width: sampleImageWidth, height: sampleImageHeight },
        });
        const image = getImage();
        expect(image).toHaveAttribute("width", `${sampleImageWidth}`);
        expect(image).toHaveAttribute("height", `${sampleImageHeight}`);
      });
    });
  });
});

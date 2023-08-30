import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/svelte";
import { vi, describe, it, expect } from "vitest";
import sampleImage from "../../../sample.jpg";
import sampleImageBlurhash, {
  width as sampleImageWidth,
  height as sampleImageHeight,
  mean as sampleImageMean,
} from "../../../sample.jpg?blurhash";

import * as environment from "$app/environment";
import * as support from "$lib/constants/support";
import Image from "./Image.svelte";
import { mock as intersectionObserverMock } from "../IntersectionObserver/__tests__/IntersectionObserverMock";
import type { ComponentProps } from "svelte";

vi.mock("$app/environment", () => ({
  browser: false,
}));

vi.mock("$lib/constants/support", () => ({
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

const getPicture = () => {
  const picture = getContainer().querySelector(":scope > picture") as HTMLPictureElement;
  if (!picture) throw new Error("no picture found!");
  return picture;
}

const getImage = () => {
  const image = screen
    .getAllByRole("img")
    .find((n) => n.className.includes("ldaf-img__img") && n instanceof HTMLImageElement);
  if (!image) throw new Error("no image found!");
  return image;
};

const getBlurBg = () => getContainer().querySelector("canvas.ldaf-img__blur-bg");
const getMeanBg = () => getContainer().querySelector(".ldaf-img__color-bg");

afterEach(() => vi.restoreAllMocks());

const hasChildOfType = (element: HTMLElement, tagName: string) => !![...element.children].find((element) => element.tagName.toLowerCase() === tagName)

const defaultProps: Pick<ComponentProps<Image>, "src" | "sources" | "alt"> = {
  src: sampleImage,
  sources: [{ type: "image/jpeg", srcset: [sampleImage, [sampleImage, 100]] }],
  alt: "",
}

describe("Image", () => {
  describe("on the server", () => {
    beforeEach(() => withBrowser(false));
    it('renders without src when loading="lazy"', () => {
      render(Image, {
        props: {
          ...defaultProps,
          loading: "lazy",
        },
      });
      expect(getImage()).not.toHaveAttribute("src");
      expect(hasChildOfType(getPicture(), "source")).toEqual(false);
    });

    it('renders with src when loading="eager"', () => {
      render(Image, {
        props: {
          ...defaultProps,
          loading: "eager",
        },
      });
      expect(getImage()).toHaveAttribute("src", sampleImage);
      expect(hasChildOfType(getPicture(), "source")).toEqual(true);
    });
  });

  describe("in the browser", () => {
    beforeEach(() => withBrowser(true));

    describe('when loading="lazy" is available', () => {
      beforeEach(() => {
        withSupport("intersectionObserverSupport");
        withSupport("lazyImageLoadingSupport");
        render(Image, {props: defaultProps});
      });
      it("renders with src", () => {
        expect(getImage()).toHaveAttribute("src", sampleImage);
        expect(hasChildOfType(getPicture(), "source")).toEqual(true);
      });
    });

    describe('when loading="lazy" is not available but IntersectionObserver is available', () => {
      beforeAll(() => {
        intersectionObserverMock.setup();
        return () => intersectionObserverMock.teardown();
      });
      beforeEach(async () => {
        withSupport("intersectionObserverSupport");
        withSupport("lazyImageLoadingSupport", false);
        render(Image, { props: defaultProps });
        return () => intersectionObserverMock.restore();
      });
      it("renders without src", () => {
        expect(getImage()).not.toHaveAttribute("src")
        expect(hasChildOfType(getPicture(), "source")).toEqual(false);
      });
      it("adds src on intersect", async () => {
        await waitFor(() => expect(intersectionObserverMock.observe).toHaveBeenCalledOnce());
        intersectionObserverMock.intersect();
        await waitFor(() => {
          expect(getImage()).toHaveAttribute("src", sampleImage);
          expect(hasChildOfType(getPicture(), "source")).toEqual(true);
        });
      });
    });

    describe('when neither loading="lazy" nor IntersectionObserver is available', () => {
      beforeEach(() => {
        withSupport("intersectionObserverSupport", false);
        withSupport("lazyImageLoadingSupport", false);
        render(Image, { props: defaultProps });
      });
      it("renders with src", () => {
        expect(getImage()).toHaveAttribute("src", sampleImage)
        expect(hasChildOfType(getPicture(), "source")).toEqual(true)
      });
    });

    describe("when mean color of image is provided", () => {
      beforeEach(() =>
        render(Image, { props: { ...defaultProps, mean: sampleImageMean } }),
      );
      it("renders a background div with the mean background color", () => {
        expect(getMeanBg()).toHaveAttribute(
          "style",
          `background-color: rgb(${Math.round(sampleImageMean.r)}, ${Math.round(
            sampleImageMean.g,
          )}, ${Math.round(sampleImageMean.b)});`,
        );
      });
    });

    describe("when blurhash of image is provided", () => {
      it("renders a background canvas", () => {
        render(Image, {
          props: { ...defaultProps, blurhash: sampleImageBlurhash },
        });
        expect(getBlurBg()).toBeInTheDocument();
      });
    });

    describe("when width and height is provided", () => {
      it("uses explicit width and height", () => {
        render(Image, {
          props: { ...defaultProps, width: sampleImageWidth, height: sampleImageHeight },
        });
        const image = getImage();
        expect(image).toHaveAttribute("width", `${sampleImageWidth}`);
        expect(image).toHaveAttribute("height", `${sampleImageHeight}`);
      });
    });
  });
});

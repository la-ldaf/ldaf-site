import "@testing-library/jest-dom";
import "$lib/__tests__/extendExpect";
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
import type { SourcesArr, SourcesFn } from "./types";

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
};

const getImg = () => {
  const image = screen
    .getAllByRole("img")
    .find((n) => n.className.includes("ldaf-img__img") && n instanceof HTMLImageElement);
  if (!image) throw new Error("no image found!");
  return image;
};

const getBlurBg = () => getContainer().querySelector("canvas.ldaf-img__blur-bg");
const getMeanBg = () => getContainer().querySelector(".ldaf-img__color-bg");

afterEach(() => vi.restoreAllMocks());

const hasChildOfType = (element: HTMLElement, tagName: string) =>
  !![...element.children].find((element) => element.tagName.toLowerCase() === tagName);

const defaultProps: Pick<ComponentProps<Image>, "src" | "sources" | "alt"> = {
  src: sampleImage,
  sources: [{ type: "image/jpeg", srcset: [sampleImage, [sampleImage, 100]] }],
  alt: "",
};

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
      expect(getImg()).not.toHaveAttribute("src");
      expect(hasChildOfType(getPicture(), "source")).toEqual(false);
    });

    it('renders with src when loading="eager"', () => {
      render(Image, {
        props: {
          ...defaultProps,
          loading: "eager",
        },
      });
      expect(getImg()).toHaveAttribute("src", sampleImage);
      expect(hasChildOfType(getPicture(), "source")).toEqual(true);
    });
  });

  describe("in the browser", () => {
    beforeEach(() => withBrowser(true));

    describe('when loading="lazy" is available', () => {
      beforeEach(() => {
        withSupport("intersectionObserverSupport");
        withSupport("lazyImageLoadingSupport");
        render(Image, { props: defaultProps });
      });
      it("renders with src", () => {
        expect(getImg()).toHaveAttribute("src", sampleImage);
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
        expect(getImg()).not.toHaveAttribute("src");
        expect(hasChildOfType(getPicture(), "source")).toEqual(false);
      });
      it("adds src on intersect", async () => {
        await waitFor(() => expect(intersectionObserverMock.observe).toHaveBeenCalledOnce());
        intersectionObserverMock.intersect();
        await waitFor(() => {
          expect(getImg()).toHaveAttribute("src", sampleImage);
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
        expect(getImg()).toHaveAttribute("src", sampleImage);
        expect(hasChildOfType(getPicture(), "source")).toEqual(true);
      });
    });

    describe("when mean color of image is provided", () => {
      beforeEach(() => render(Image, { props: { ...defaultProps, mean: sampleImageMean } }));
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
        const image = getImg();
        expect(image).toHaveAttribute("width", `${sampleImageWidth}`);
        expect(image).toHaveAttribute("height", `${sampleImageHeight}`);
      });
    });
  });

  // passthru template literal tag to hint to editors to indent and highlight html
  const html = (strings: TemplateStringsArray, ...substitutions: unknown[]) =>
    strings.reduce((acc, item, i) => `${acc}${item}${substitutions[i]}`);

  describe("snapshots", () => {
    const staticSources: SourcesArr = [
      { type: "image/jpeg", srcset: ["jpegFallback", ["jpeg100", 100], ["jpeg200", 200]] },
      {
        type: "image/avif",
        srcset: [
          ["avif100", 100],
          ["avif200", 200],
        ],
      },
    ];
    const dynamicSources: SourcesFn = (url, options) => [];
    const cases: [string, ComponentProps<Image>, string][] = [
      [
        "basic",
        { src: "src", alt: "alt" },
        html`
          <div role="img" aria-label="alt">
            <picture><img alt="" loading="lazy" decoding="async" src="src" /></picture>
          </div>
        `,
      ],
      [
        "explicit eager loading",
        { src: "src", alt: "alt", loading: "eager" },
        html`
          <div role="img" aria-label="alt">
            <picture><img alt="" loading="eager" decoding="auto" src="src" /></picture>
          </div>
        `,
      ],
      [
        "basic with blurhash",
        { src: "src", alt: "alt", blurhash: "blurhash" },
        html`
          <div role="img" aria-label="alt">
            <picture><img alt="" loading="lazy" decoding="async" src="src" /></picture>
            <canvas width="32" height="32" data-blurhash="blurhash" />
          </div>
        `,
      ],
      [
        "basic with blurhash and mean color",
        { src: "src", alt: "alt", blurhash: "blurhash", mean: { r: 50, g: 100, b: 150 } },
        html`
          <div role="img" aria-label="alt">
            <picture><img alt="" loading="lazy" decoding="async" src="src" /></picture>
            <canvas width="32" height="32" data-blurhash="blurhash" />
            <div style="background-color: rgb(50, 100, 150)" />
          </div>
        `,
      ],
      [
        "image with static sources, no width, and no sizes",
        { src: "src", alt: "alt", sources: staticSources },
        html`
          <div role="img" aria-label="alt">
            <picture>
              <source type="image/jpeg" srcset="jpeg100 100w, jpeg200 200w, jpegFallback" />
              <source type="image/avif" srcset="avif100 100w, avif200 200w" />
              <img alt="" loading="lazy" decoding="async" src="src" />
            </picture>
          </div>
        `,
      ],
      [
        "image with static sources, a set width, and no sizes",
        { src: "src", alt: "alt", width: 300, sources: staticSources },
        html`
          <div role="img" aria-label="alt" style="max-width: 300px">
            <picture>
              <source
                type="image/jpeg"
                srcset="jpeg100 100w, jpeg200 200w, jpegFallback 300w"
                sizes="(max-width: 300px) 100vw, 300px"
              />
              <source
                type="image/avif"
                srcset="avif100 100w, avif200 200w"
                sizes="(max-width: 300px) 100vw, 300px"
              />
              <img alt="" loading="lazy" decoding="async" src="src" width="300" />
            </picture>
          </div>
        `,
      ],
      [
        "image with static sources, a set width, and sizes",
        {
          src: "src",
          alt: "alt",
          width: 300,
          sources: [
            { type: "image/jpeg", srcset: ["jpegFallback", ["jpeg100", 100], ["jpeg200", 200]] },
            {
              type: "image/avif",
              srcset: [
                ["avif100", 100],
                ["avif200", 200],
              ],
            },
          ],
          sizes: "(max-width: 500px) 200px, 300px",
        },
        html`
          <div role="img" aria-label="alt" style="max-width: 300px">
            <picture>
              <source
                type="image/jpeg"
                srcset="jpeg100 100w, jpeg200 200w, jpegFallback 300w"
                sizes="(max-width: 500px) 200px, 300px"
              />
              <source
                type="image/avif"
                srcset="avif100 100w, avif200 200w"
                sizes="(max-width: 500px) 200px, 300px"
              />
              <img alt="" loading="lazy" decoding="async" src="src" width="300" />
            </picture>
          </div>
        `,
      ],
      [
        "image with dynamic sources, no sizeType, and no width",
        { src: "src", alt: "alt", sources: dynamicSources },
        html`<div></div>`,
      ],
    ];

    cases.forEach(([message, props, expectedDOM]) => {
      it(message, async () => {
        render(Image, { props });
        await expect(getContainer()).toMatchDOMNodes(expectedDOM, {
          ignoreAttributes: ["class", "border"],
        });
      });
    });
  });
});

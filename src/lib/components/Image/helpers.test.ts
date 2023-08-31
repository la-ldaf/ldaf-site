import { vi, describe, it, expect } from "vitest";
import { getGetSizesAttr, getGetWidths, getResolveSources, getSrcsetAttr } from "./helpers";
import type { SourcesArr, SourcesFn, Srcset } from "./types";

const sizesByScreenSizeByType = {
  "size-1": { 100: 50, 200: 100, 300: 150 },
  "size-2": { 100: 25, 200: 50, 300: 75 },
};

describe("getWidths", () => {
  const getWidths = getGetWidths(sizesByScreenSizeByType);

  it("doubles widths", () => {
    expect(getWidths("size-1")).toEqual([50, 100, 150, 200, 300]);
    expect(getWidths("size-2")).toEqual([25, 50, 75, 100, 150]);
  });

  it("filters widths wider than the image", () => {
    expect(getWidths("size-1", 100)).toEqual([50, 100]);
    expect(getWidths("size-2", 100)).toEqual([25, 50, 75, 100]);
  });
});

describe("getSrcsetAttr", () => {
  const cases: [string, [Srcset] | [Srcset, number], ReturnType<typeof getSrcsetAttr>][] = [
    ["returns undefined if srcset is an empty array", [[]], undefined],
    [
      "handles srcset without fallback",
      [
        [
          ["src1", 100],
          ["src2", 200],
        ],
      ],
      "src1 100w, src2 200w",
    ],
    [
      "handles srcset with fallback without image width",
      [["fallback", ["src1", 100], ["src2", 200]]],
      "src1 100w, src2 200w, fallback",
    ],
    [
      "handles srcset with fallback with image width",
      [["fallback", ["src1", 100], ["src2", 200]], 300],
      "src1 100w, src2 200w, fallback 300w",
    ],
  ];
  cases.forEach(([message, [srcset, imageWidth], expected]) => {
    it(message, () => expect(getSrcsetAttr(srcset, imageWidth)).toEqual(expected));
  });
});

describe("resolveSources", () => {
  const resolveSources = getResolveSources(sizesByScreenSizeByType);
  const sourcesFn = vi.fn();

  it("returns sources parameter if it is an array", () => {
    const sources: SourcesArr = [
      { type: "image/jpeg", srcset: ["src", ["src100", 100], ["src200", 200]] },
    ];
    expect(resolveSources("src", sources, "size-1")).toEqual(sources);
    expect(resolveSources("src", sources, "size-2")).toEqual(sources);
    expect(resolveSources("src", sources, "static")).toEqual(sources);
  });

  const cases: [string, Parameters<typeof resolveSources>, Parameters<SourcesFn>][] = [
    [
      'sizeType="static" with no image width',
      ["src", sourcesFn, "static"],
      ["src", { widths: [] }],
    ],
    [
      'sizeType="static" with image width',
      ["src", sourcesFn, "static", 100],
      ["src", { widths: [100, 200], srcWidth: 100 }],
    ],
    [
      "sizeType present in sizesByScreenSizeByType with no dimensions",
      ["src", sourcesFn, "size-1"],
      ["src", { widths: [50, 100, 150, 200, 300] }],
    ],
    [
      "sizeType present in sizesByScreenSizeByType with dimensions",
      ["src", sourcesFn, "size-1", 100, 100],
      ["src", { widths: [50, 100], srcWidth: 100, srcHeight: 100 }],
    ],
  ];

  beforeEach(() => sourcesFn.mockRestore());
  cases.forEach(([message, args, expectedCall]) => {
    it(message, () => {
      resolveSources(...args);
      expect(sourcesFn).toHaveBeenCalledWith(...expectedCall);
    });
  });
});

describe("getSizesAttr", () => {
  const getSizesAttr = getGetSizesAttr(
    sizesByScreenSizeByType,
    { "size-2": "100vw" },
    [100, 200, 300],
  );

  const cases: [Parameters<typeof getSizesAttr>, ReturnType<typeof getSizesAttr>][] = [
    [["static", false], undefined],
    [["static", false, 100], "100px"],
    [["static", true], undefined],
    [["static", true, 100], "(max-width: 100px) 100vw, 100px"],
    [["size-2", false], "100vw"],
    [["size-2", false, 100], "100vw"],
    [["size-2", true], "100vw"],
    [["size-2", true, 100], "100vw"],
    [["size-1", false], undefined],
    [["size-1", false], undefined],
    [["size-1", true], "(max-width: 100px) 50px, (max-width: 200px) 100px, 150px"],
    [["size-1", true, 100], "(max-width: 100px) 50px, (max-width: 200px) 100px, 150px"],
  ];

  cases.forEach(([args, expected]) => {
    const sizeLabels = { static: `"static"`, "size-1": "regular", "size-2": "overridden" };
    const [sizeType, fit, imageWidth] = args;
    const message = `${sizeLabels[sizeType]} size, fit is ${fit}, and imageWidth is${
      imageWidth === undefined ? " not" : ""
    } provided`;
    it(message, () => expect(getSizesAttr(...args)).toEqual(expected));
  });
});

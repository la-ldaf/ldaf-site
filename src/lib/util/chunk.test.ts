import { describe, it, expect } from "vitest";

import chunk from "./chunk";

const alphabet = ["a", "b", "c", "d", "e"];

describe("util/chunk", () => {
  it("returns an empty array if size is zero", () => {
    expect(chunk(alphabet, 0)).toEqual([]);
  });
  it("returns a 2D array where each item from input is its own array when size is one", () => {
    expect(chunk(alphabet, 1)).toEqual([["a"], ["b"], ["c"], ["d"], ["e"]]);
  });
  it("returns a 2D array where input is divided into arrays when size is two", () => {
    expect(chunk(alphabet, 2)).toEqual([["a", "b"], ["c", "d"], ["e"]]);
  });
});

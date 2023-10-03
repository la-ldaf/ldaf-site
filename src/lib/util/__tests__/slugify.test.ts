import { describe, it, expect } from "vitest";
import slugify from "../slugify";

describe("slugify", () => {
  it("handles normal text", () => {
    const title = "This one is normal";

    expect(slugify(title)).toEqual("this-one-is-normal");
  });
  it("handles numbers, apostrophes, and colons", () => {
    const title = "Title 2: This time it's personal";

    expect(slugify(title)).toEqual("title-2-this-time-its-personal");
  });
  it("handles hyphens", () => {
    const title = "This-one-has hyphens";

    expect(slugify(title)).toEqual("this-one-has-hyphens");
  });
  it("handles underscores", () => {
    const title = "this-one has a_mixture22";
    const title2 = "this-one has a_mixture22-2-1_33";

    expect(slugify(title)).toEqual("this-one-has-a_mixture22");
    expect(slugify(title2)).toEqual("this-one-has-a_mixture22-2-1_33");
  });
  it("handles ampersands", () => {
    const title = "Planning, preparation, & practice";

    expect(slugify(title)).toEqual("planning-preparation-&-practice");
  });
});

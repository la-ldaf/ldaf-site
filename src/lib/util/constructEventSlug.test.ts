import { describe, it, expect } from "vitest";
import constructEventSlug from "./constructEventSlug";

describe("constructEventSlug", () => {
  it("returns a string based on the provided date and slug", () => {
    expect(constructEventSlug(new Date("2024-10-15T09:30:00.000-05:00"), "slug")).toEqual(
      "2024-10-15-slug",
    );
  });
});

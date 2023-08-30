import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import Tag from ".";

describe("Tag", () => {
  it("renders", async () => {
    render(Tag);
    const tag = screen.getByText("example tag");
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass("usa-tag");
    expect(tag).not.toHaveClass("usa-tag--big");
  });
  it("renders with larger variation", async () => {
    render(Tag, { big: true });
    const tag = screen.getByText("example tag");
    expect(tag).toHaveClass("usa-tag--big");
  });
});

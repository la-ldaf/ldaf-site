import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import Icon from "./Icon.svelte";

describe("Icon", () => {
  it("renders with default values", () => {
    render(Icon, { props: { name: "rss_feed" } });
    expect(screen.getByAltText("Rss Feed")).toHaveClass("usa-icon");
    expect(screen.getByRole("img")).toHaveClass("usa-icon");
  });
  it("renders with a custom alt value", () => {
    render(Icon, { props: { name: "rss_feed", alt: "RSS feed Icon" } });
    expect(screen.getByAltText("RSS feed Icon")).toHaveClass("usa-icon");
    expect(screen.getByRole("img")).toHaveClass("usa-icon");
  });
  it("renders with a different size", () => {
    render(Icon, { props: { name: "rss_feed", size: 6 } });
    expect(screen.getByAltText("Rss Feed")).toHaveClass("usa-icon");
    expect(screen.getByRole("img")).toHaveClass("usa-icon");
    expect(screen.getByAltText("Rss Feed")).toHaveClass("usa-icon--size-6");
  });
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import { url as rssIcon } from "$icons/rss_feed";

import Icon from "./Icon.svelte";

describe("Icon", () => {
  it("renders with default values", () => {
    render(Icon, { props: { src: rssIcon, alt: "RSS Feed" } });
    expect(screen.getByAltText("RSS Feed")).toHaveClass("usa-icon");
    expect(screen.getByRole("img")).toHaveClass("usa-icon");
  });
  it("renders with a different size", () => {
    render(Icon, { props: { src: rssIcon, alt: "RSS Feed", size: 6 } });
    expect(screen.getByAltText("RSS Feed")).toHaveClass("usa-icon");
    expect(screen.getByRole("img")).toHaveClass("usa-icon");
    expect(screen.getByAltText("RSS Feed")).toHaveClass("usa-icon--size-6");
  });
});

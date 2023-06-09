import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import SlotWrapper from "$lib/components/__tests__/SlotWrapper.svelte";
import Link from "./Link.svelte";

const slotContent = "link text";

describe("Link", () => {
  it("renders", () => {
    render(SlotWrapper, { props: { Component: Link, slotContent, href: "/about" } });
    expect(screen.getByText(slotContent)).toHaveAttribute("href", "/about");
  });
  it("renders with an external link", () => {
    render(SlotWrapper, {
      props: {
        Component: Link,
        slotContent,
        href: "https://designsystem.digital.gov",
        external: true,
      },
    });
    expect(screen.getByText(slotContent)).toHaveAttribute("rel", "external");
  });
  it("renders with an alternate variation", () => {
    render(SlotWrapper, {
      props: { Component: Link, slotContent, href: "/", alternate: true },
    });
    // Ideally we would check the color here, but toHaveStyle doesn't work.
    expect(screen.getByText(slotContent)).toHaveClass("usa-link--alt");
  });
});

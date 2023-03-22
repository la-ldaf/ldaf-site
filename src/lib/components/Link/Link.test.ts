import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import LinkTest from "./LinkTest.svelte";
import Link from "./Link.svelte";

describe("Link", () => {
  it("renders", () => {
    render(LinkTest, { props: { Component: Link, href: "/about" } });
    expect(screen.getByText("link text")).toHaveAttribute("href", "/about");
  });
  it("renders with an external link", () => {
    render(LinkTest, {
      props: { Component: Link, href: "https://designsystem.digital.gov", external: true },
    });
    expect(screen.getByText("link text")).toHaveAttribute("rel", "external");
  });
  it("renders with an alternate variation", () => {
    render(LinkTest, { props: { Component: Link, href: "/", alternate: true } });
    // Ideally we would check the color here, but toHaveStyle doesn't work.
    expect(screen.getByText("link text")).toHaveClass("usa-link--alt");
  });
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import Header from "./Header.svelte";

describe("Header", () => {
  it("renders", () => {
    render(Header);
    expect(screen.getByAltText("LDAF Logo")).toBeVisible();
  });
  it("opens nav on menu button click and closes it on close button click", async () => {
    render(Header, { props: { navItems: [{ id: "1", link: "/", name: "test" }] } });
    const navContainer = screen.getByLabelText("Primary navigation");
    expect(navContainer).not.toHaveClass("is-visible");
    await screen.getByText("Menu").click();
    expect(navContainer).toHaveClass("is-visible");
    await screen.getByAltText("Close").click();
    expect(navContainer).not.toHaveClass("is-visible");
  });
});

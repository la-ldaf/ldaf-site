import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import Footer from "./Footer.svelte";

import { footerNavTestContent } from "./__tests__/FooterTestContent";
import titleTestContent from "$lib/components/Header/Title/__tests__/TitleTestContent";

describe("Footer", () => {
  it("renders", () => {
    render(Footer, { props: { navItems: footerNavTestContent, siteTitle: titleTestContent } });
    expect(screen.getByText("SubMenu 1")).toBeVisible();
    expect(screen.getByText("Department of Agriculture and Forestry")).toBeVisible();
  });
  it("handles user events to toggle menus", async () => {
    window.innerWidth = 360;
    const user = userEvent.setup();
    render(Footer, { props: { navItems: footerNavTestContent, siteTitle: titleTestContent } });
    const button = screen.getByRole("button", { name: "SubMenu 1" });
    expect(button.getAttribute("aria-expanded")).toBe("false");
    // open with user click.
    await user.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
    // close with keyboard "Enter"
    await user.keyboard("{Enter}");
    expect(button.getAttribute("aria-expanded")).toBe("false");
    // re-open with keyboard "Space"
    await user.keyboard("{ }");
    expect(button.getAttribute("aria-expanded")).toBe("true");
  });
  // TODO: Test afterNavigate to ensure the expandedIndex gets reset.
});

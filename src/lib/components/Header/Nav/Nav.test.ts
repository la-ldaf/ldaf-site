import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import Nav from "./Nav.svelte";

describe("Header.Nav", () => {
  it("renders", () => {
    render(Nav, { props: { items: [{ id: "1", link: "/", name: "test" }] } });
    expect(screen.getByText("test")).toBeVisible();
  });
  it("handles user events to open and close menus", async () => {
    const user = userEvent.setup();
    render(Nav, {
      props: {
        items: [
          {
            id: "1",
            name: "basic menu",
            children: [
              {
                id: "1",
                name: "nav item 1",
                link: "/1",
              },
              {
                id: "2",
                name: "nav item 2",
                link: "/2",
              },
            ],
          },
        ],
      },
    });
    const button = screen.getByRole("button", { name: "basic menu" });
    const menu = document.getElementById("extended-mega-nav-section-1");
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(menu).not.toBeVisible();
    // open with user click.
    await user.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
    expect(menu).toBeVisible();
    // close with keyboard "Enter"
    await user.keyboard("{Enter}");
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(menu).not.toBeVisible();
    // re-open with keyboard "Space"
    await user.keyboard("{ }");
    expect(menu).toBeVisible();
    // expect menu to stay open while using tab navigation
    await user.tab();
    expect(menu?.firstChild?.firstChild).toHaveFocus();
    // force focus loss with tab navigation forwards
    //   (once more through second item, once again to exit)
    await user.tab();
    await user.tab();
    expect(menu).not.toBeVisible();
    // re-open and force focus loss with tab navigation backward
    await user.click(button);
    expect(menu).toBeVisible();
    await user.tab({ shift: true });
    expect(menu).not.toBeVisible();
    // re-open and force focus loss with mouse
    await user.click(button);
    expect(menu).toBeVisible();
    await user.click(document.getElementsByName("body")[0]);
    expect(menu).not.toBeVisible();
  });
});

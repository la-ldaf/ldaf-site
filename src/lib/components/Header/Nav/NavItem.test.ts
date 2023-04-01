import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import NavItem from "./NavItem.svelte";
import TestSlotWrapper from "$lib/components/TestSlotWrapper.svelte";

const generateMenuItems = (n: number) =>
  [...Array(n)].map((_, i) => ({
    id: `${i + 1}`,
    name: `nav item ${i + 1}`,
    link: `/${i + 1}`,
  }));

const basicMenuProps = {
  props: {
    Component: NavItem,
    slotContent: "basic menu",
    id: "0",
    children: generateMenuItems(2),
  },
};

describe("Header.NavItem", () => {
  it("renders with basic nav link", () => {
    render(TestSlotWrapper, {
      props: { Component: NavItem, slotContent: "nav item", id: "0", link: "/0", isCurrent: true },
    });
    expect(screen.getByText("nav item")).toBeVisible();
  });
  it("renders with basic menu layout", () => {
    render(TestSlotWrapper, basicMenuProps);
    const button = screen.getByRole("button", { name: "basic menu" });
    const menu = document.getElementById("extended-mega-nav-section-0");
    expect(button).toHaveTextContent("basic menu");
    expect(menu?.firstChild).toHaveTextContent("nav item 1");
  });
  it("renders with even mega menu layout", () => {
    // 3 columns, 1 item each
    render(TestSlotWrapper, {
      props: {
        Component: NavItem,
        slotContent: "mega menu",
        id: "0",
        megaMenuColumns: 3,
        children: generateMenuItems(3),
      },
    });
    const columns = document.getElementsByClassName("usa-col");
    expect(columns.length).toBe(3);
    for (const column of columns) {
      expect(column.getElementsByTagName("li").length).toBe(1);
    }
  });
  it("renders with uneven mega menu layout", () => {
    // 5 columns, 9 items total
    render(TestSlotWrapper, {
      props: {
        Component: NavItem,
        slotContent: "mega menu",
        id: "0",
        megaMenuColumns: 5,
        children: generateMenuItems(9),
      },
    });
    const columns = document.getElementsByClassName("usa-col");
    expect(columns.length).toBe(5);
    expect(columns[0].getElementsByTagName("li").length).toBe(2);
    expect(columns[4].getElementsByTagName("li").length).toBe(1);
  });
  it("handles user events to open and close the menu", async () => {
    const user = userEvent.setup();
    render(TestSlotWrapper, basicMenuProps);
    const button = screen.getByRole("button", { name: "basic menu" });
    const menu = document.getElementById("extended-mega-nav-section-0");
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

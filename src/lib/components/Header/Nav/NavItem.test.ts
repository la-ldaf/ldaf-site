import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
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
      props: { Component: NavItem, slotContent: "nav item", id: "0", link: "/0", current: true },
    });
    // getByText will grab <span> but we want the parent <a>
    const navItem = screen.getByText("nav item").parentElement;
    expect(navItem).toBeVisible();
    expect(navItem).toHaveClass("usa-current");
    expect(navItem).toHaveAttribute("href", "/0");
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
        current: true,
        columns: 3,
        children: generateMenuItems(3),
      },
    });
    const button = screen.getByRole("button", { name: "mega menu" });
    expect(button).toHaveClass("usa-current");
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
        columns: 5,
        children: generateMenuItems(9),
      },
    });
    const columns = document.getElementsByClassName("usa-col");
    expect(columns.length).toBe(5);
    expect(columns[0].getElementsByTagName("li").length).toBe(2);
    expect(columns[4].getElementsByTagName("li").length).toBe(1);
  });
});

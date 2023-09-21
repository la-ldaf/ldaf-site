import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import SideNav from "./SideNav.svelte";
import sideNavTestContent from "./__tests__/SideNavTestContent";

describe("SideNav", () => {
  it("renders", async () => {
    render(SideNav, {
      props: {
        tree: sideNavTestContent,
        currentPath: "#bc",
      },
    });
    const parentItem = screen.getByText("SideNav Link 0");
    const childItem = screen.getByText("Child Link 0");
    const currentItem = screen.getByText("Child Link 2");
    expect(parentItem).toBeVisible();
    expect(parentItem.closest("a")).toHaveAttribute("href", "#a");
    expect(childItem).toBeVisible();
    expect(childItem.closest("a")).toHaveAttribute("href", "#ba");
    expect(currentItem).toBeVisible();
    expect(currentItem.closest("a")).toHaveAttribute("class", "ldaf-sidenav-link usa-current");
  });
});

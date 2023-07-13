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
        activeItem: "3",
      },
    });
    const parentItem = screen.getByText("SideNav Link 0");
    const childItem = screen.getByText("Child Link 0");
    const currentItem = screen.getByText("SideNav Link 3");
    expect(parentItem).toBeVisible();
    expect(parentItem).toHaveAttribute("href", "/");
    expect(childItem).toBeVisible();
    expect(childItem).toHaveAttribute("href", "/");
    expect(currentItem).toBeVisible();
    expect(currentItem).toHaveAttribute("class", "usa-link usa-current");
  });
});

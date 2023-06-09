import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import SideNav from "./SideNav.svelte";

describe("SideNav", () => {
  it("renders", async () => {
    render(SideNav, {
      props: {
        tree: [
          {
            id: "0",
            title: "Item 0",
            link: "/",
            isCurrent: false,
            children: [
              {
                id: "00",
                title: "Child Item 0",
                link: "/",
                isCurrent: false,
              },
            ],
          },
          { id: "1", title: "Item 1", link: "/", isCurrent: false },
          { id: "2", title: "Item 2", link: "/", isCurrent: true },
        ],
      },
    });
    const parentItem = screen.getByText("Item 0");
    const childItem = screen.getByText("Child Item 0");
    const currentItem = screen.getByText("Item 2");
    expect(parentItem).toBeVisible();
    expect(parentItem).toHaveAttribute("href", "/");
    expect(childItem).toBeVisible();
    expect(childItem).toHaveAttribute("href", "/");
    expect(currentItem).toBeVisible();
    expect(currentItem).toHaveAttribute("class", "usa-link usa-current");
  });
});

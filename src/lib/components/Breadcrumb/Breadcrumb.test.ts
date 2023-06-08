import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import Breadcrumb from "./Breadcrumb.svelte";

describe("Breadcrumb", () => {
  it("renders", async () => {
    render(Breadcrumb, {
      props: {
        path: [
          { id: "0", title: "Home", link: "/" },
          { id: "1", title: "About", link: "/about" },
        ],
        currentPageTitle: "Current",
      },
    });
    const link1 = screen.getByText("Home").parentElement;
    const link2 = screen.getByText("About").parentElement;
    const currentPage = screen.getByText("Current");
    expect(link1).toBeInTheDocument();
    expect(link1).toHaveAttribute("href", "/");
    expect(link2).toBeInTheDocument();
    expect(link2).toHaveAttribute("href", "/about");
    expect(currentPage).toBeInTheDocument();
  });
});

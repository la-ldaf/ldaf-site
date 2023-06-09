import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import Breadcrumb from "./Breadcrumb.svelte";
import breadcrumbTestContent from "./__tests__/BreadcrumbTestContent";

describe("Breadcrumb", () => {
  it("renders", async () => {
    render(Breadcrumb, {
      props: {
        path: breadcrumbTestContent,
        currentPageTitle: "Current",
      },
    });
    const link = screen.getByText("Breadcrumb 0").parentElement;
    const currentPage = screen.getByText("Current");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
    expect(currentPage).toBeInTheDocument();
  });
});

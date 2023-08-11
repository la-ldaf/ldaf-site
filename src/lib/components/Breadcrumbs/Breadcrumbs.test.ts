import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import Breadcrumbs from "./Breadcrumbs.svelte";
import breadcrumbsTestContent from "./__tests__/BreadcrumbsTestContent";

describe("Breadcrumbs", () => {
  it("renders", async () => {
    render(Breadcrumbs, {
      props: {
        breadcrumbs: breadcrumbsTestContent,
      },
    });
    const link = screen.getByText("Breadcrumb 0").parentElement;
    const currentPage = screen.getByText("Current");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
    expect(currentPage).toBeInTheDocument();
  });
});

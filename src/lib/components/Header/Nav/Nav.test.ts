import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import Nav from "./Nav.svelte";

describe("Header.Nav", () => {
  it("renders", () => {
    render(Nav, { props: { items: [{ id: "1", link: "/", name: "test" }] } });
    expect(screen.getByText("test")).toBeVisible();
  });
});

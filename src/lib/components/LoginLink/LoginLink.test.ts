import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import LoginLink from "./LoginLink.svelte";

describe("LoginLink", () => {
  it("renders", () => {
    render(LoginLink, {});
    expect(screen.getByRole("link")).toHaveTextContent("Login");
  });
});

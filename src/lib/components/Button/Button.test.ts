import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import ButtonTest from "./ButtonTest.svelte";

describe("Button", () => {
  it("renders", async () => {
    render(ButtonTest, { slot: "Test Button" });
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Test Button");
  });

  it("clicks", async () => {
    const { component } = render(ButtonTest);
    const onClick = vi.fn();
    component.$on("click", onClick);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("does not click when disabled", async () => {
    const { component } = render(ButtonTest, { disabled: true });
    const onClick = vi.fn();
    component.$on("click", onClick);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import type { Variant } from "./buttonOptions";

import ButtonTest from "./__tests__/ButtonTest.svelte";

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

  type VariantAndClass = [Variant, string];

  (
    [
      ["primary", "usa-button"],
      ["base", "usa-button usa-button--base"],
      ["inverse", "usa-button usa-button--inverse"],
      ["text-only", "usa-button usa-button--text-only"],
      ["outline", "usa-button usa-button--outline"],
      ["outline-inverse", "usa-button usa-button--outline usa-button--outline-inverse"],
      ["big", "usa-button usa-button--big"],
      ["big-inverse", "usa-button usa-button--big usa-button--big-inverse"],
    ] satisfies VariantAndClass[]
  )
    .flatMap(([variant, expectedClass]): [{ variant: Variant; unstyled?: boolean }, string][] => [
      [{ variant }, expectedClass],
      [{ variant, unstyled: true }, `${expectedClass} usa-button--unstyled`],
    ])
    .forEach(([props, expectedClass]) => {
      it(`renders the variant ${props.variant}${
        props.unstyled ? " unstyled" : ""
      } with the expected CSS classes`, () => {
        render(ButtonTest, props);
        expect(screen.getByRole("button")).toHaveAttribute("class", expectedClass);
      });
    });
});

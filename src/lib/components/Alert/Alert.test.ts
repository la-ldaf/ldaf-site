import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import SlotWrapper from "$lib/components/__tests__/SlotWrapper.svelte";
import Alert from "./Alert.svelte";

const slotContent = "Something important";

describe("Link", () => {
  it("renders", () => {
    render(SlotWrapper, { props: { Component: Alert, slotContent } });
    expect(screen.getByText(slotContent)).toHaveClass("usa-alert__text");
  });
  it("renders with a slim variation", () => {
    render(SlotWrapper, {
      props: { Component: Alert, slotContent, slim: true },
    });
    expect(screen.getByRole("region")).toHaveClass("usa-alert--slim");
  });
  it("renders without an Icon", () => {
    render(SlotWrapper, {
      props: { Component: Alert, slotContent, noIcon: true },
    });
    expect(screen.getByRole("region")).toHaveClass("usa-alert--no-icon");
  });
});

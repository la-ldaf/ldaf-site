import "@testing-library/jest-dom";
import { waitFor, render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

// TODO: CardView is getting utilized here in addition to Storybook.
//  When slots are better supported, we should update this test to handle it more cleanly.
import CardView from "../../../stories/CardView.svelte";

describe("Link", () => {
  it("renders the default view", async () => {
    render(CardView, {
      props: {
        header: "Primary Card",
        body: "Body text",
        footer: "Action or link",
        showImage: true,
        showFooter: true,
      },
    });
    expect(screen.getByText("Primary Card")).toBeVisible();
    expect(screen.getByText("Body text")).toBeVisible();
    expect(screen.getByText("Action or link")).toBeVisible();
    await waitFor(() => expect(screen.getByLabelText("Primary view placeholder")).toBeVisible());
  });
  it("renders the default view without an image", async () => {
    render(CardView, {
      props: {
        header: "Primary Card",
        body: "Body text",
        footer: "Action or link",
        showImage: false,
        showFooter: true,
      },
    });
    expect(screen.getByText("Primary Card")).toBeVisible();
    expect(screen.getByText("Body text")).toBeVisible();
    expect(screen.getByText("Action or link")).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
  });
});

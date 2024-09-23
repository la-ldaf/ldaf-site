import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

// AccordionView functions similarly to CardView.svelte
import { AccordionView } from "stories/AccordionView.svelte";

const defaultProps = {
  accordionOneContent: "Content 1",
  accordionTwoContent: "Content 2",
  titleOne: "Title 1",
  titleTwo: "Title 2",
  multiselectable: false,
};

describe("Accordion", () => {
  it("renders the default view", async () => {
    render(AccordionView, { props: defaultProps });
    expect(screen.getByText("Title 1")).toBeVisible();
    expect(screen.getByText("Title 2")).toBeVisible();
    expect(screen.getByText("Content 1")).not.toBeVisible();
    expect(screen.getByText("Content 2")).not.toBeVisible();
  });
  it("Only displays AccordionItem contents one at a time by default", async () => {
    render(AccordionView, { props: defaultProps });
    // Initial Render
    expect(screen.getByText("Content 1")).not.toBeVisible();
    expect(screen.getByText("Content 2")).not.toBeVisible();

    await screen.getByText("Title 1").click();
    expect(screen.getByText("Content 1")).toBeVisible();
    expect(screen.getByText("Content 2")).not.toBeVisible();

    await screen.getByText("Title 2").click();
    expect(screen.getByText("Content 1")).not.toBeVisible();
    expect(screen.getByText("Content 2")).toBeVisible();
  });
  it("Displays multiple AccordionItems when multiselectable is true", async () => {
    render(AccordionView, {
      props: {
        ...defaultProps,
        multiselectable: true,
      },
    });
    // Initial Render
    expect(screen.getByText("Content 1")).not.toBeVisible();
    expect(screen.getByText("Content 2")).not.toBeVisible();

    await screen.getByText("Title 1").click();
    expect(screen.getByText("Content 1")).toBeVisible();
    expect(screen.getByText("Content 2")).not.toBeVisible();

    await screen.getByText("Title 2").click();
    expect(screen.getByText("Content 1")).toBeVisible();
    expect(screen.getByText("Content 2")).toBeVisible();

    await screen.getByText("Title 1").click();
    expect(screen.getByText("Content 1")).not.toBeVisible();
    expect(screen.getByText("Content 2")).toBeVisible();
  });
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";

import CopyToClipboard from "./CopyToClipboard.svelte";

const writeText = vi.fn();
Object.assign(navigator, { clipboard: { writeText } });

describe("CopyToClipboard", () => {
  it("renders", () => {
    render(CopyToClipboard);
    expect(screen.getByTitle("Copy to clipboard")).toBeVisible();
  });
  it("copies provided content on click and displays provided success message", () => {
    render(CopyToClipboard, {
      props: {
        contentToCopy: "content to copy",
        successMessage: "success",
      },
    });
    screen.getByRole("button").click();
    expect(writeText).toHaveBeenCalledWith("content to copy");
    expect(screen.getByText("success")).toBeVisible();
  });
});

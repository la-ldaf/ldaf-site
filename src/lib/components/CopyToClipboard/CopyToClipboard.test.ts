import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import CopyToClipboard from "./CopyToClipboard.svelte";

const writeText = vi.fn();
Object.assign(navigator, { clipboard: { writeText } });

describe("CopyToClipboard", () => {
  it("renders", () => {
    render(CopyToClipboard, { props: { contentToCopy: "content to copy" } });
    expect(screen.getByTitle("Copy to clipboard")).toBeVisible();
  });
  it("copies provided content on click and displays provided success message", async () => {
    render(CopyToClipboard, {
      props: {
        contentToCopy: "content to copy",
        successMessage: "success",
      },
    });
    await userEvent.click(screen.getByRole("button"));
    expect(writeText).toHaveBeenCalledWith("content to copy");
    const successMessage = screen.getByText("success");
    expect(successMessage).toBeVisible();
    expect(successMessage).toHaveAttribute("role", "alert");
  });
});

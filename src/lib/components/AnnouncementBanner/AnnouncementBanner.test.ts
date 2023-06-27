import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import AnnouncementBanner from "./AnnouncementBanner.svelte";

describe("AnnouncementBanner", () => {
  it("renders", () => {
    render(AnnouncementBanner);
    expect(screen.getByText("Here's a site-wide announcement!")).toBeVisible();
  });
});

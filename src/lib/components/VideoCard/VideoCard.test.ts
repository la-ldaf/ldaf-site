import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import VideoCard from "$lib/components/VideoCard";
import VideoCardTestContent from "./__tests__/VideoCardTestContent";

describe("VideoCard", () => {
  it("renders with provided title and description", () => {
    render(VideoCard, {
      props: VideoCardTestContent,
    });
    expect(screen.getByText("Louisiana Department of Agriculture and Forestry")).toBeVisible();
  });
});

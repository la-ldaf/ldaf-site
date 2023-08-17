import { describe, expect, it, vi, type Mock } from "vitest";

import { getYoutubeVideoData } from "./getYoutubeVideoData";

const sampleData = {
  items: [{ snippet: "test data" }],
};

vi.mock("$env/static/public", () => ({ PUBLIC_YOUTUBE_API_KEY: "d4e5f6" }));

describe("YouTube Fetch", () => {
  it("calls YouTube API", async () => {
    const fetch = vi.fn(async () => Promise.resolve({ ok: true, json: () => sampleData })) as Mock;
    const snippet = await getYoutubeVideoData("a1b2c3", { fetch });
    expect(fetch).toHaveBeenCalledWith(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=a1b2c3&key=d4e5f6`
    );
    expect(snippet).toEqual("test data");
  });
});

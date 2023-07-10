import type { Link } from "./types";

const fakeAssets: Record<string, Link> = {
  "sample.jpg": {
    sys: { id: "SAMPLE_JPG_ID" },
    contentType: "image/jpeg",
    title: "Sample",
    description: "A sample image",
    url: "/assets/sample.jpg",
    size: 10 ** 6,
    width: 1280,
    height: 720,
  },
};

export default fakeAssets;

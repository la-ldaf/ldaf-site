import type { Link } from "./types";

const fakeAssets: Record<string, Link> = {
  "sample.jpg": {
    sys: { id: "SAMPLE_JPG_ID" },
    contentType: "image/jpeg",
    title: "Sample image",
    description: "A sample image",
    url: "/assets/sample.jpg",
    size: 10 ** 6,
    width: 1280,
    height: 720,
  },
  "sample.pdf": {
    sys: { id: "SAMPLE_PDF_ID" },
    contentType: "application/pdf",
    title: "Sample PDF",
    description: "A sample PDF",
    url: "/assets/sample.pdf",
    size: 10 ** 6,
  },
};

export default fakeAssets;

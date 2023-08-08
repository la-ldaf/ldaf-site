import type { HomePage } from "../+page.server";

export default {
  homePage: {
    pageMetadata: { sys: { id: "0" } },
    heroVideo: {
      videoUrl: "https://www.youtube.com/watch?v=3HRGzFjA_cU",
    },
    featuredServiceCardsCollection: {
      items: [{ pageMetadata: { sys: { id: "1" } } }],
    },
    featuredServices: [
      {
        title: "Featured Service Card 1",
        subheading: "This is a description for the featured service card.",
        pageMetadata: { sys: { id: "1" } },
        heroImage: {
          imageSource: {
            sys: { id: "3" },
            contentType: "image/jpeg",
            title: "This is a test image",
            description: null,
            url: "https://placehold.co/600x400",
            width: 600,
            height: 400,
            blurhash: null,
          },
        },
        url: "/.build-info",
      },
    ],
  },
} satisfies HomePage;

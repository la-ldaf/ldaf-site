import type { HomePage } from "../+page.server";

export default {
  homePage: {
    pageMetadata: { sys: { id: "0" } },
    heroVideo: {
      videoUrl: "https://www.youtube.com/watch?v=3HRGzFjA_cU",
    },
    popularResources: [],
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
    commissionerGreeting: {
      json: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "From the Commissioner",
                nodeType: "text",
              },
            ],
            nodeType: "heading-2",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Tortor consequat id porta nibh venenatis cras sed felis. Arcu bibendum at varius vel pharetra vel turpis nunc. Risus viverra adipiscing at in tellus.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "Vestibulum lectus mauris ultrices eros in cursus turpis. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Vitae et leo duis ut diam quam nulla porttitor. Velit scelerisque in dictum non consectetur a erat nam at. A condimentum vitae sapien pellentesque. Nunc faucibus a pellentesque sit. Convallis a cras semper auctor neque vitae tempus. Ipsum suspendisse ultrices gravida dictum. Gravida neque convallis a cras semper.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
    },
    commissionerByline: "- The Commissioner",
    commissionerHeadshot: {
      altText: "Some alt text for this test image",
      linkedImage: {
        sys: { id: "4" },
        contentType: "image/jpeg",
        title: "This is another test image",
        description: null,
        url: "https://placehold.co/300x300",
        width: 600,
        height: 400,
        blurhash: null,
      },
    },
  },
  pageMetadata: {
    sys: { id: "0" },
    url: "/",
    metaTitle: "Home",
    metaDescription: "Description of home page.",
  },
} satisfies HomePage;

import type { ServiceGroupPage } from "../+page.server";
import documentWithParagraphData from "$lib/components/ContentfulRichText/__tests__/documents";

export default {
  serviceGroup: {
    sys: { id: "0" },
    heroImage: {
      imageSource: {
        sys: { id: "0" },
        url: "",
        description: "",
      },
      imageTitle: "",
      altField: "",
      fotogCredit: "",
    },
    title: "Sample Service Group Page",
    subheading:
      "This page is loaded with test data since a connection with Contentful could not be established.",
    description: {
      json: documentWithParagraphData.documentWithParagraph.document,
      links: {
        assets: { block: [], hyperlink: [] },
        entries: { block: [], hyperlink: [] },
      },
    },
    contactInfoCollection: {
      items: [
        {
          sys: { id: "2" },
          entityName: "Contact Person 1",
          phone: "(123) 456-7890",
          email: "contact1@example.com",
        },
        {
          sys: { id: "3" },
          entityName: "Contact Person 2",
          phone: "(789) 012-3456",
          email: "contact2@example.com",
        },
      ],
    },
    additionalResources: {
      json: documentWithParagraphData.documentWithParagraph.document,
      links: {
        assets: { block: [], hyperlink: [] },
        entries: { block: [], hyperlink: [] },
      },
    },
    serviceListName: "Sample service list name",
  },
  imageGallery: {
    images: [],
    blurhashes: {},
  },
  childServiceEntries: [
    {
      __typename: "ServiceEntry",
      sys: { id: "0" },
      entryTitle: "Sample Service Entry",
      description: {
        links: {
          assets: { block: [], hyperlink: [] },
          entries: { block: [], hyperlink: [] },
        },
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: "Here's a service entry",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
          ],
          nodeType: "document",
        },
      },
    },
  ],
  childServiceGroups: [],
} satisfies ServiceGroupPage;

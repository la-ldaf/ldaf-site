import type { ServiceGroup } from "$lib/services/contentful/schema";
import documentWithParagraphData from "$lib/components/ContentfulRichText/__tests__/documents";

export default {
  sys: { id: "0", environmentId: "", spaceId: "" },
  contentfulMetadata: { tags: [] },
  heroImage: {
    contentfulMetadata: { tags: [] },
    sys: { id: "0", environmentId: "", spaceId: "" },
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
      entries: { block: [], hyperlink: [], inline: [] },
      resources: { block: [] },
    },
  },
  contactInfoCollection: {
    limit: 100,
    skip: 0,
    total: 2,
    items: [
      {
        sys: { id: "2", environmentId: "", spaceId: "" },
        contentfulMetadata: { tags: [] },
        entityName: "Contact Person 1",
        phone: "(123) 456-7890",
        phoneExt: "123",
        email: "contact1@example.com",
      },
      {
        sys: { id: "3", environmentId: "", spaceId: "" },
        contentfulMetadata: { tags: [] },
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
      entries: { block: [], hyperlink: [], inline: [] },
      resources: { block: [] },
    },
  },
  serviceListName: "Sample service list name",
} satisfies ServiceGroup;

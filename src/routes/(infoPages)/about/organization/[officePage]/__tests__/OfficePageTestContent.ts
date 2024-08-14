import type { OfficePage } from "$lib/services/server/contentful/schema";
import documentWithParagraphData from "$lib/components/ContentfulRichText/__tests__/documents";

export default {
  _id: "0",
  sys: { id: "0", environmentId: "", spaceId: "" },
  contentfulMetadata: { tags: [] },
  pageTitle: "Sample Office Page",
  subheading:
    "This page is loaded with test data since a connection with Contentful could not be established.",
  description: {
    json: documentWithParagraphData.documentWithParagraph.document,
    links: {
      assets: { block: [], hyperlink: [] },
      entries: { block: [], hyperlink: [], inline: [] },
      resources: { block: [], hyperlink: [], inline: [] },
    },
  },
  servicesAndPrograms: {
    json: documentWithParagraphData.documentWithParagraph.document,
    links: {
      assets: { block: [], hyperlink: [] },
      entries: { block: [], hyperlink: [], inline: [] },
      resources: { block: [], hyperlink: [], inline: [] },
    },
  },
  mailingAddress: {
    _id: "1",
    sys: {
      id: "1",
      environmentId: "",
      spaceId: "",
    },
    contentfulMetadata: { tags: [] },
    name: "Sample Office",
    streetAddress1: "123 Main Street",
    streetAddress2: "Suite 456",
    city: "City",
    state: "ST",
    zip: "12345",
  },
  contactsCollection: {
    limit: 100,
    skip: 0,
    total: 2,
    items: [
      {
        _id: "2",
        sys: { id: "2", environmentId: "", spaceId: "" },
        contentfulMetadata: { tags: [] },
        entityName: "Contact Person 1",
        phone: "(123) 456-7890",
        phoneExt: "123",
        email: "contact1@example.com",
      },
      {
        _id: "3",
        sys: { id: "3", environmentId: "", spaceId: "" },
        contentfulMetadata: { tags: [] },
        entityName: "Contact Person 2",
        phone: "(789) 012-3456",
        email: "contact2@example.com",
      },
    ],
  },
} satisfies OfficePage;

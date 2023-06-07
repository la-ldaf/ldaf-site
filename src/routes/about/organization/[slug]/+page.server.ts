import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import contentfulFetch, { contentfulConnected } from "$lib/services/contentful";
import documentWithParagraphData from "$lib/components/ContentfulRichText/__tests__/documents";

import type { PageServerLoad } from "./$types";
import type { OfficePage } from "$lib/services/contentful/schema";
import type { OfficePageQuery } from "./$queries.generated";

const query = gql`
  query OfficePage {
    officePageCollection {
      items {
        sys {
          id
        }
        pageTitle
        subheading
        description {
          json
        }
        servicesAndPrograms {
          json
        }
        mailingAddress {
          ... on ContentTypeLocation {
            name
            streetAddress1
            streetAddress2
            city
            state
            zip
          }
        }
        contactsCollection {
          items {
            ... on Contact {
              sys {
                id
              }
              entityName
              phone
              email
            }
          }
        }
        metadata {
          ... on PageMetadata {
            slug
            metaTitle
            metaDescription
          }
        }
      }
    }
  }
`;

export const load = (async ({ params }): Promise<OfficePage> => {
  const { slug } = params;
  if (contentfulConnected()) {
    const data = await contentfulFetch<OfficePageQuery>(printQuery(query));
    if (data) {
      const officePages = data?.officePageCollection?.items as OfficePage[];
      const matchedOfficePage = officePages.find(
        (officePage) => officePage.metadata?.slug === slug
      );
      if (matchedOfficePage) {
        return matchedOfficePage;
      }
    }
    throw error(404);
  } else {
    return {
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
        },
      },
      servicesAndPrograms: {
        json: documentWithParagraphData.documentWithParagraph.document,
        links: {
          assets: { block: [], hyperlink: [] },
          entries: { block: [], hyperlink: [], inline: [] },
        },
      },
      mailingAddress: {
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
            sys: { id: "2", environmentId: "", spaceId: "" },
            contentfulMetadata: { tags: [] },
            entityName: "Contact Person 1",
            phone: "1-123-456-7890",
            email: "contact1@example.com",
          },
          {
            sys: { id: "3", environmentId: "", spaceId: "" },
            contentfulMetadata: { tags: [] },
            entityName: "Contact Person 2",
            phone: "1-123-456-7890",
            email: "contact2@example.com",
          },
        ],
      },
    };
  }
}) satisfies PageServerLoad;

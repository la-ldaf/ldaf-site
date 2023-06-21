import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import contentfulFetch, { contentfulConnected } from "$lib/services/contentful";
import OfficePageTestContent from "./__tests__/OfficePageTestContent";

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
  if (!contentfulConnected()) {
    return OfficePageTestContent;
  }
  const data = await contentfulFetch<OfficePageQuery>(printQuery(query));
  if (data) {
    const officePages = data?.officePageCollection?.items as OfficePage[];
    const matchedOfficePage = officePages.find((officePage) => officePage.metadata?.slug === slug);
    if (matchedOfficePage) {
      return matchedOfficePage;
    }
  }
  throw error(404);
}) satisfies PageServerLoad;

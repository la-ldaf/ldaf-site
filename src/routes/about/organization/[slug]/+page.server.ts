import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
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
        pageMetadata {
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
  if (CONTENTFUL_SPACE_ID && CONTENTFUL_DELIVERY_API_TOKEN) {
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const data = await client.fetch<OfficePageQuery>(printQuery(query));
    if (data) {
      const officePages = data?.officePageCollection?.items as OfficePage[];
      const matchedOfficePage = officePages.find(
        (officePage) => officePage.pageMetadata?.slug === slug
      );
      if (matchedOfficePage) {
        return matchedOfficePage;
      }
    }
  } else {
    return OfficePageTestContent;
  }
  throw error(404);
}) satisfies PageServerLoad;

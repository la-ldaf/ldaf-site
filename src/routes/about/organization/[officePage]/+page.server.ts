import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import OfficePageTestContent from "./__tests__/OfficePageTestContent";

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
            sys {
              id
            }
            slug
          }
        }
      }
    }
  }
`;

export const load = async ({ parent, params }) => {
  const { pageMetadataMap } = await parent();
  const slug = params.officePage;
  if (CONTENTFUL_SPACE_ID && CONTENTFUL_DELIVERY_API_TOKEN) {
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const data = await client.fetch<OfficePageQuery>(printQuery(query));
    if (data) {
      const matchedOfficePage = data?.officePageCollection?.items?.find(
        (officePage) => officePage?.metadata?.slug === slug
      );
      if (matchedOfficePage) {
        const pageMetadataId = matchedOfficePage?.metadata?.sys?.id;
        if (pageMetadataId) {
          const pageMetadata = pageMetadataMap.get(pageMetadataId);
          if (pageMetadata) {
            return {
              officePage: matchedOfficePage,
              pageMetadata,
            };
          }
        }
      }
    }
  } else {
    return { officePage: OfficePageTestContent, pageMetadata: {} };
  }
  throw error(404);
};

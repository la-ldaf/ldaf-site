import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import officePageTestContent from "./__tests__/OfficePageTestContent";

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
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) {
    return { officePage: officePageTestContent, pageMetadata: {} };
  }
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
  });
  const data = await client.fetch<OfficePageQuery>(printQuery(query));
  const officePages = data?.officePageCollection?.items;
  if (!officePages) throw error(404);
  const matchedOfficePage = officePages.find(
    (officePage) => officePage?.pageMetadata?.slug === slug
  );
  if (matchedOfficePage) {
    const pageMetadataId = matchedOfficePage?.pageMetadata?.sys?.id;
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
  throw error(404);
};

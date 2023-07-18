import { error } from "@sveltejs/kit";
import gql from "graphql-tag";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import officePageTestContent from "./__tests__/OfficePageTestContent";

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

export const load = (async ({ fetch, params }): Promise<OfficePage> => {
  const { slug } = params;
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) return officePageTestContent;
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
    fetch,
  });
  const data = await client.fetch<OfficePageQuery>(query);
  const officePages = data?.officePageCollection?.items;
  if (!officePages) throw error(404);
  const matchedOfficePage = officePages.find(
    (officePage) => officePage?.pageMetadata?.slug === slug
  );
  // TODO: remove this type assertion and either use a predicate to assert "matchedOfficePage is
  // OfficePage" or use the query type in the front-end and account for potentially missing data.
  if (matchedOfficePage) return matchedOfficePage as OfficePage;
  throw error(404);
}) satisfies PageServerLoad;

import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import contentfulFetch from "$lib/services/contentful";
import type { OfficePage } from "$lib/services/contentful/schema";
import type { OfficePageQuery } from "./$queries.generated";

const query = gql`
  query OfficePage {
    officePageCollection {
      items {
        officePageTitle
        subheader
        description {
          json
        }
        servicesAndPrograms {
          json
        }
        contactInfo {
          ... on ContactEntry {
            name
            streetAddress
            suiteFloorEtc
            city
            state
            zipCode
            phoneNumber
            email
          }
        }
        metadata {
          ... on PageMetadata {
            slug
          }
        }
      }
    }
  }
`;

export async function load({ params }): Promise<OfficePage> {
  const { slug } = params;
  const data = await contentfulFetch<OfficePageQuery>(printQuery(query));
  if (data) {
    const officePages = data?.officePageCollection?.items as OfficePage[];
    const matchedOfficePage = officePages.find((officePage) => officePage.metadata?.slug === slug);
    if (matchedOfficePage) {
      return matchedOfficePage;
    }
  }
  throw error(404);
}

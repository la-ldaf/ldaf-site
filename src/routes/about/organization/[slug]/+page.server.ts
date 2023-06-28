import { error } from "@sveltejs/kit";
import gql from "graphql-tag";

import officePageTestContent from "./__tests__/OfficePageTestContent";

import type { PageServerLoad } from "./$types";
import type { OfficePageQuery, OfficePageQueryVariables } from "./$queries.generated";

const query = gql`
  query OfficePage($slug: String, $preview: Boolean = false) {
    officePageCollection(preview: $preview, where: { metadata: { slug: $slug } }, limit: 1) {
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

type OfficePage = NonNullable<OfficePageQuery["officePageCollection"]>["items"][number];

export const load = (async ({
  locals: { contentfulClient },
  params: { slug },
}): Promise<OfficePage> => {
  if (!contentfulClient) return officePageTestContent;
  const data = await contentfulClient.fetch<OfficePageQuery, OfficePageQueryVariables>(query, {
    variables: { slug },
  });
  if (!data) throw error(404);
  const [officePage] = data?.officePageCollection?.items ?? [];
  if (!officePage) throw error(404);
  return officePage;
}) satisfies PageServerLoad;

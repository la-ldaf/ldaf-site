import { error } from "@sveltejs/kit";
import gql from "graphql-tag";

import officePageTestContent from "./__tests__/officePageTestContent";

import type { PageServerLoad } from "./$types";
import type { OfficePageQuery, OfficePageQueryVariables } from "./$queries.generated";
import type { PageMetadataMapItem } from "../../../../loadPageMetadataMap";

const query = gql`
  query OfficePage($slug: String, $preview: Boolean = false) {
    officePageCollection(preview: $preview, where: { pageMetadata: { slug: $slug } }, limit: 1) {
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

type OfficePage = NonNullable<
  NonNullable<OfficePageQuery["officePageCollection"]>["items"][number]
>;

export const load = (async ({
  parent,
  locals: { contentfulClient, logger },
  params: { officePage: slug },
}): Promise<{ officePage: OfficePage; pageMetadata?: PageMetadataMapItem }> => {
  const parentPromise = parent();
  if (!contentfulClient) return { officePage: officePageTestContent };
  const data = await contentfulClient.fetch<OfficePageQuery, OfficePageQueryVariables>(query, {
    variables: { slug },
  });
  if (!data) {
    logger.logError(new Error("query returned no response"));
    throw error(404);
  }
  const [officePage] = data?.officePageCollection?.items ?? [];
  if (!officePage) throw error(404);
  const metadataID = officePage?.pageMetadata?.sys?.id;

  let pageMetadata: PageMetadataMapItem | undefined;
  assignPageMetadata: {
    if (!metadataID) {
      await logger.logError(
        new Error(`page ${officePage?.sys?.id ?? "(unknown id)"} had no metadata ID`)
      );
      break assignPageMetadata;
    }
    const { pageMetadataMap } = await parentPromise;
    pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) {
      await logger.logError(
        new Error(
          `page ${
            officePage?.sys?.id ?? "(unknown id)"
          } with the metadata ID ${metadataID} was missing in page metadata map`
        )
      );
    }
  }

  return { officePage, pageMetadata };
}) satisfies PageServerLoad;

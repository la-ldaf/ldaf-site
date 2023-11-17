import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import assetPropsFragment from "$lib/fragments/assetProps";
import entryPropsFragment from "$lib/fragments/entryProps";
import { getBlurhashMapFromRichText } from "$lib/services/blurhashes";
import officePageTestContent from "./__tests__/OfficePageTestContent";

import type { OfficePageQuery } from "./$queries.generated";

const query = gql`
  # eslint-disable @graphql-eslint/selection-set-depth
  ${assetPropsFragment}
  ${entryPropsFragment}
  query OfficePage($metadataID: String!, $preview: Boolean = false) {
    officePageCollection(
      where: { pageMetadata: { sys: { id: $metadataID } } }
      limit: 1
      preview: $preview
    ) {
      items {
        sys {
          id
        }
        pageTitle
        subheading
        description {
          json
          links {
            assets {
              block {
                ...AssetProps
              }
              hyperlink {
                ...AssetProps
              }
            }
            entries {
              block {
                ...EntryProps
              }
              hyperlink {
                ...EntryProps
              }
            }
          }
        }
        servicesAndPrograms {
          json
          links {
            assets {
              block {
                ...AssetProps
              }
              hyperlink {
                ...AssetProps
              }
            }
            entries {
              block {
                ...EntryProps
              }
              hyperlink {
                ...EntryProps
              }
            }
          }
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

export const load = async ({
  parent,
  params: { officePage },
  locals: { contentfulClient },
  fetch,
}) => {
  if (!contentfulClient) {
    return { officePage: officePageTestContent, pageMetadata: {} };
  }
  const { pageMetadataMap, pathsToIDs } = await parent();
  const path = `/about/organization/${officePage}`;
  fetchData: {
    const metadataID = pathsToIDs.get(path);
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;

    const data = await contentfulClient.fetch<OfficePageQuery>(printQuery(query), {
      variables: { metadataID },
    });
    if (!data) break fetchData;
    const [officePageData] = data?.officePageCollection?.items ?? [];
    if (!officePageData) break fetchData;

    const descriptionBlurhashesPromise =
      officePageData.description &&
      getBlurhashMapFromRichText(officePageData.description, { fetch });

    const servicesAndProgramsBlurhashesPromise =
      officePageData.servicesAndPrograms &&
      getBlurhashMapFromRichText(officePageData.servicesAndPrograms, { fetch });

    const [descriptionBlurhashes, servicesAndProgramsBlurhashes] = await Promise.all([
      descriptionBlurhashesPromise,
      servicesAndProgramsBlurhashesPromise,
    ]);

    return {
      officePage: {
        ...officePageData,
        description: officePageData.description
          ? { ...officePageData.description, blurhashes: descriptionBlurhashes }
          : undefined,
        servicesAndPrograms: officePageData.servicesAndPrograms
          ? { ...officePageData.servicesAndPrograms, blurhashes: servicesAndProgramsBlurhashes }
          : undefined,
      },
      pageMetadata,
    };
  }
  throw error(404);
};

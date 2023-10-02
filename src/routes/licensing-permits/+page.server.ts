import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";
import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import slugify from "$lib/util/slugify";

import assetProps from "$lib/fragments/assetProps";
import entryProps from "$lib/fragments/entryProps";

import type { AggregationPageQuery, TaggedServicesQuery } from "./$queries.generated";

type TaggedService =
  | {
      id: string;
      title: string;
      url: string;
      parentTitle: string;
    }
  | undefined;

const aggregationPageQuery = gql`
  # eslint-disable @graphql-eslint/selection-set-depth
  ${assetProps}
  ${entryProps}
  query AggregationPage($metadataID: String!) {
    aggregationCollection(where: { pageMetadata: { sys: { id: $metadataID } } }, limit: 1) {
      items {
        contentfulMetadata {
          tags {
            id
          }
        }
        title
        subhead
        body {
          json
          links {
            assets {
              hyperlink {
                ...AssetProps
              }
            }
            entries {
              hyperlink {
                ...EntryProps
              }
            }
          }
        }
        pageMetadata {
          sys {
            id
          }
        }
      }
    }
  }
  # eslint-enable @graphql-eslint/selection-set-depth
`;

const taggedServicesQuery = gql`
  query TaggedServices($aggregationTag: String!) {
    serviceEntryCollection(
      where: { contentfulMetadata: { tags: { id_contains_some: [$aggregationTag] } } }
      order: [entryTitle_ASC]
    ) {
      items {
        sys {
          id
        }
        entryTitle
        linkedFrom {
          serviceGroupCollection(limit: 1) {
            items {
              pageMetadata {
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const load = async ({ parent }) => {
  const { pageMetadataMap, pathsToIDs } = await parent();
  fetchData: {
    const metadataID = pathsToIDs.get(`/licensing-permits`);
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });

    // Fetch content for the page as well as the tag used for aggregation
    const aggregationPageData = await client.fetch<AggregationPageQuery>(
      printQuery(aggregationPageQuery),
      {
        variables: { metadataID },
      },
    );
    if (!aggregationPageData?.aggregationCollection?.items) break fetchData;
    const [aggregationPage] = aggregationPageData.aggregationCollection.items;
    const aggregationPageTags =
      aggregationPage?.contentfulMetadata?.tags?.map((tag) => tag?.id) ?? [];
    const aggregationTag = aggregationPageTags.find((tag) => tag?.startsWith("type-"));
    if (!aggregationTag) break fetchData;

    // Use the aggregation tag to grab all the relevant services
    const taggedServicesData = await client.fetch<TaggedServicesQuery>(
      printQuery(taggedServicesQuery),
      { variables: { aggregationTag } },
    );
    if (!taggedServicesData?.serviceEntryCollection?.items) break fetchData;
    // Create array of all tagged services and create links.
    const taggedServices: TaggedService[] = taggedServicesData.serviceEntryCollection.items.map(
      (taggedService) => {
        // The Core Content entry that the service appears on.
        const [serviceGroupEntry] = taggedService?.linkedFrom?.serviceGroupCollection?.items ?? [];
        const pageMetadataID = serviceGroupEntry?.pageMetadata?.sys.id;
        if (taggedService?.entryTitle && pageMetadataID) {
          const pageMetadataForServiceGroup = pageMetadataMap.get(pageMetadataID);
          if (pageMetadataForServiceGroup?.title) {
            const url = `${pageMetadataForServiceGroup.url}#${slugify(taggedService.entryTitle)}`;
            return {
              id: taggedService?.sys.id,
              title: taggedService?.entryTitle,
              url,
              parentTitle: pageMetadataForServiceGroup.title,
            };
          }
        }
      },
    );
    // Organize tagged services under their respective Core Content pages.
    const taggedServicesByParent: Record<string, TaggedService[]> = {};
    taggedServices.forEach((taggedService) => {
      if (taggedService && taggedService.parentTitle) {
        const mapEntry = taggedServicesByParent[taggedService.parentTitle];
        if (mapEntry) {
          taggedServicesByParent[taggedService.parentTitle].push(taggedService);
        } else {
          taggedServicesByParent[taggedService.parentTitle] = [taggedService];
        }
      }
    });

    return {
      pageMetadata,
      aggregationPage,
      taggedServicesByParent,
    };
  }
  throw error(404);
};

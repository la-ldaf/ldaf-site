import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";
import slugify from "$lib/util/slugify";

import assetProps from "$lib/fragments/assetProps";
import entryProps from "$lib/fragments/entryProps";

import type { AggregationPageQuery, TaggedServicesQuery } from "./$queries.generated";

type TaggedService =
  | {
      id: string;
      title: string;
      url: string;
    }
  | undefined;

const aggregationPageQuery = gql`
  # eslint-disable @graphql-eslint/selection-set-depth
  ${assetProps}
  ${entryProps}
  query AggregationPage($metadataID: String!, $preview: Boolean = false) {
    aggregationCollection(
      where: { pageMetadata: { sys: { id: $metadataID } } }
      limit: 1
      preview: $preview
    ) {
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
`;

const taggedServicesQuery = gql`
  query TaggedServices($aggregationTag: String!, $preview: Boolean = false) {
    serviceEntryCollection(
      where: { contentfulMetadata: { tags: { id_contains_some: [$aggregationTag] } } }
      order: [entryTitle_ASC]
      preview: $preview
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
              subheading
            }
          }
        }
      }
    }
  }
`;

export const load = async ({ parent, locals: { contentfulClient } }) => {
  fetchData: {
    if (!contentfulClient) break fetchData;
    const { pageMetadataMap, pathsToIDs } = await parent();
    const metadataID = pathsToIDs.get(`/licensing-permits`);
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;
    // Fetch content for the page as well as the tag used for aggregation
    const aggregationPageData = await contentfulClient.fetch<AggregationPageQuery>(
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

    // Use the aggregation tag to grab all the relevant services and their
    //   parent pages.
    const taggedServicesData = await contentfulClient.fetch<TaggedServicesQuery>(
      printQuery(taggedServicesQuery),
      { variables: { aggregationTag } },
    );
    if (!taggedServicesData?.serviceEntryCollection?.items) break fetchData;

    // Create a map where the key is the page metadata ID for a core content
    //   page, and the value is an object containing page information and the
    //   services that appear on that page.
    const serviceGroupMap = new Map<
      string,
      {
        id: string;
        title: string;
        subheading: string | null | undefined;
        url: string | null | undefined;
        services: TaggedService[];
      }
    >();

    taggedServicesData.serviceEntryCollection.items.forEach((taggedService) => {
      // Get information about the core content entry that houses the service.
      // Every service should appear on only one page.
      const [serviceGroupEntry] = taggedService?.linkedFrom?.serviceGroupCollection?.items ?? [];
      const pageMetadataID = serviceGroupEntry?.pageMetadata?.sys?.id;
      // To construct the URL to the service accordion, we'll need the service
      //   title and the core content page URL.
      if (!taggedService?.entryTitle || !pageMetadataID) return;
      // To render everything on the page, we'll also need the page metadata
      //   title. The core content page subheading is optional.
      const pageMetadataForServiceGroup = pageMetadataMap.get(pageMetadataID);
      if (!pageMetadataForServiceGroup?.title) return;
      // Construct the URL for the service accordion.
      const url = `${pageMetadataForServiceGroup.url}#${slugify(taggedService.entryTitle)}`;
      // Add the service group to the map if it doesn't already exist, then
      //   add the service under it.
      const serviceGroupMapEntry = serviceGroupMap.get(pageMetadataID) ?? {
        id: pageMetadataID,
        title: pageMetadataForServiceGroup.title,
        subheading: serviceGroupEntry.subheading,
        url: pageMetadataForServiceGroup.url,
        services: [],
      };
      serviceGroupMapEntry.services.push({
        id: taggedService?.sys.id,
        title: taggedService?.entryTitle,
        url,
      });
      serviceGroupMap.set(pageMetadataID, serviceGroupMapEntry);
    });

    // Convert our map into an array and sort it alphabetically by title.
    const serviceGroups = Array.from(serviceGroupMap, ([_, serviceGroup]) => serviceGroup).sort(
      (a, b) => (a.title > b.title ? 1 : -1),
    );

    return {
      pageMetadata,
      aggregationPage,
      serviceGroups,
    };
  }
  throw error(404);
};

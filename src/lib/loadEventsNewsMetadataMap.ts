import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import constructEventSlug from "./util/constructEventSlug";
import type { ContentfulClient } from "$lib/services/server/contentful";
import type { PageMetadataMapItem } from "$lib/loadPageMetadataMap";

import type { NewsAndEventsCollectionQuery } from "./$queries.generated";

const queryNewsAndEvents = gql`
  query NewsAndEventsCollection {
    newsCollection(where: { indexInSearch: true }, order: [publicationDate_DESC]) {
      items {
        sys {
          id
        }
        type
        title
        subhead
        publicationDate
        slug
        byline
        metaTitle
        metaDescription
      }
    }
    eventEntryCollection(where: { indexInSearch: true }, order: [eventDateAndTime_ASC]) {
      items {
        sys {
          id
        }
        slug
        shortTitle
        eventSummary
        eventDateAndTime
        metaTitle
        metaDescription
      }
    }
  }
`;

type NewsSearchIndexingMetadataMapItem = NonNullable<
  NewsAndEventsCollectionQuery["newsCollection"]
>["items"][number];
type EventSearchIndexingMetadataMapItem = NonNullable<
  NewsAndEventsCollectionQuery["eventEntryCollection"]
>["items"][number];

export type SearchIndexingMetadataMapItem =
  | PageMetadataMapItem
  | (NewsSearchIndexingMetadataMapItem & { url?: string | null; children?: string[] })
  | (EventSearchIndexingMetadataMapItem & { url?: string | null; children?: string[] });
// type SearchIndexingMetadataMapItem = Omit<
//   PageMetadataMapItem & NewsSearchIndexingMetadataMapItem & EventSearchIndexingMetadataMapItem,
//   "__typename"
// > & {
//   __typename?: "PageMetadata" | "News" | "EventEntry" | undefined;
// };

export const loadEventsAndNewsMap = async ({
  contentfulClient,
}: {
  contentfulClient?: ContentfulClient;
}): Promise<Map<string, SearchIndexingMetadataMapItem>> => {
  const entryMap: NonNullable<Map<string, SearchIndexingMetadataMapItem>> = new Map();

  if (!contentfulClient) return entryMap;

  const data = await contentfulClient.fetch<NewsAndEventsCollectionQuery>(
    printQuery(queryNewsAndEvents),
  );

  if (data?.newsCollection?.items && data?.newsCollection?.items.length > 0) {
    const allNewsMetadata = data.newsCollection.items;
    allNewsMetadata.forEach((item) => {
      if (!item) return;
      const url = "about/news/article/" + item.slug;
      entryMap.set(item.sys.id, { ...item, url });
    });
  }
  if (data?.eventEntryCollection?.items && data?.eventEntryCollection?.items.length > 0) {
    const allEventMetadata = data.eventEntryCollection.items;

    allEventMetadata.forEach((item) => {
      if (!item || !item.eventDateAndTime || !item.slug) return;
      // if event date has changed, the URL should update as well
      const url =
        item.eventDateAndTime && item.slug
          ? `/about/events/event/${constructEventSlug(new Date(item.eventDateAndTime), item.slug)}`
          : null;
      entryMap.set(item.sys.id, { ...item, url });
    });
  }

  return entryMap;
};

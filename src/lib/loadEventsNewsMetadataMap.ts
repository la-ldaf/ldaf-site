import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { ContentfulClient } from "$lib/services/server/contentful";
import { type MetadataMapItem } from "./types";

const queryNewsAndEvents =  gql`
  query newsCollection {
    newsCollection(
      where: { indexInSearch: true }
      order: [publicationDate_DESC]
    ) {
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
      }
    }
    eventEntryCollection(
      where: { indexInSearch: true }
      order: [eventDateAndTime_ASC]
    ) {
      items {
        sys {
          id
        }
        slug
        shortTitle
        eventDescription
        eventDateAndTime
      }
    }
  }
`;

// generated query types are not returning
type NewsAndEventsCollectionQuery = {
  newsCollection: {
    items: {
      sys: { id: string };
      __typename?: "News";
      title?: string | null;
      publicationDate?: string | null;
      slug?: string | null;
    }[]
  }
  eventEntryCollection: {
    items: {
      sys: {
        id: string
      }
      __typename?: "News";
      title?: string | null;
      slug?: string | null;
      eventDateAndTime?: string | null;
      eventDescription?: string | null;
    }[]
  }
}

// TODO: remove
const constructEventSlug = (date: Date, slug: string): string =>
  `${date.toISOString().split("T")[0]}-${slug}`;

export const loadEventsAndNewsMap = async (
  {contentfulClient}: {contentfulClient?: ContentfulClient;}
): Promise<Map<string, MetadataMapItem>> => {

  const entryMap: NonNullable<Map<string, MetadataMapItem>> = new Map();

  if (!contentfulClient) return entryMap;

  const data = await contentfulClient.fetch<NewsAndEventsCollectionQuery>(
    printQuery(
      queryNewsAndEvents,
    )
  );

  if (data?.newsCollection?.items && data?.newsCollection?.items.length > 0) {
    const allNewsMetadata = data.newsCollection.items;
    allNewsMetadata.forEach(item => {
      if (!item) return;
      const url = "about/news/article/" + item.slug;
      entryMap.set(item.sys.id, {...item, url})
    });
  }
  if (data?.eventEntryCollection?.items && data?.eventEntryCollection?.items.length > 0) {
    const allEventMetadata = data.eventEntryCollection.items;

    allEventMetadata.forEach(item => {
      if (!item || !item.eventDateAndTime || !item.slug) return;
      // if event date has changed, the URL should update as well
      const url = item.eventDateAndTime && item.slug 
        ? `/about/events/event/${constructEventSlug(new Date(item.eventDateAndTime), item.slug)}`
        : null;
      entryMap.set(item.sys.id, {...item, url})
    });
  }

  return entryMap;
}
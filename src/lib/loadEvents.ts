import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import type { ContentfulClient } from "$lib/services/server/contentful";
import type { EventCollectionQuery } from "./$queries.generated";

type EventItem = NonNullable<EventCollectionQuery["eventEntryCollection"]>["items"][number];

const query = gql`
  query EventCollection($preview: Boolean = false) {
    # TODO: A limit of 500 works until it doesn't. We should set up a way to paginate.
    eventEntryCollection(limit: 500, order: [eventDateAndTime_ASC], preview: $preview) {
      items {
        eventDateAndTime
        slug
      }
    }
  }
`;

export const loadEvents = async ({
  contentfulClient,
}: {
  contentfulClient?: ContentfulClient;
}): Promise<Array<EventItem>> => {
  let eventItems: Array<EventItem> = [];
  if (!contentfulClient) return eventItems;
  const data = await contentfulClient.fetch<EventCollectionQuery>(printQuery(query));
  if (data?.eventEntryCollection?.items) {
    eventItems = data.eventEntryCollection.items;
  }
  return eventItems;
};

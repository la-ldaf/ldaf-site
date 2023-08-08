import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import type { ContentfulClient } from "$lib/services/contentful";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import type { EventsQuery } from "../$queries.generated";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

const limit = 20;

export const query = gql`
  query Events($limit: Int = 20, $skip: Int = 0) {
    eventEntryCollection(limit: $limit, skip: $skip, order: [eventDateAndTime_DESC]) {
      total
      items {
        sys {
          id
        }
        internalName
        shortTitle
        eventDescription
        eventDateAndTime
        eventDocumentsCollection {
          items {
            ... on DocumentWrapper {
              docWrapperName
              documentDescription
            }
            ... on Contact {
              entityName
              phone
              phoneExt
              email
              location {
                name
                streetAddress1
                streetAddress2
                city
                state
                zip
              }
            }
          }
        }
      }
    }
  }
`;

export const loadEventsPage = async ({
  params: { page },
}: Pick<Parameters<PageServerLoad>[0], "params">) => {
  const pageNumber = parseInt(page);
  fetchData: {
    if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) break fetchData;
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const eventsData = await client.fetch<EventsQuery>(printQuery(query), {
      variables: {
        limit,
        skip: limit * Math.max(pageNumber - 1, 0),
      },
    });
    if (eventsData.eventEntryCollection.items.length === 0) break fetchData;
    return {
      currentPageNumber: pageNumber,
      totalPages: Math.ceil(eventsData.eventEntryCollection.total / limit),
      events: eventsData.eventEntryCollection.items,
      totalEvents: eventsData.eventEntryCollection.total,
    };
  }
  throw error(404);
};

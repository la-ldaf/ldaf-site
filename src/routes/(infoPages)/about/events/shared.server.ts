import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import type { ContentfulClient } from "$lib/services/contentful";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import type { EventsQuery } from "./$queries.generated";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./page/[page]/$types";
import type { PageMetadataMap } from "$lib/loadPageMetadataMap";

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
  parent,
  params: { page },
}: Pick<Parameters<PageServerLoad>[0], "params" | "parent">) => {
  fetchData: {
    const {
      pageMetadataMap,
      pathsToIDs,
    }: { pageMetadataMap: PageMetadataMap; pathsToIDs: Map<string, string> } = await parent();
    const aboutPageMetadataID = pathsToIDs.get("/about");
    const { breadcrumbs: aboutPageBreadcrumbs = [] } = aboutPageMetadataID
      ? pageMetadataMap.get(aboutPageMetadataID) ?? {}
      : {};
    const pageNumber = parseInt(page);
    if (isNaN(pageNumber)) break fetchData;
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
    if (
      !eventsData?.eventEntryCollection?.items ||
      eventsData?.eventEntryCollection?.items?.length === 0
    ) {
      break fetchData;
    }
    return {
      currentPageNumber: pageNumber,
      totalPages: Math.ceil(eventsData.eventEntryCollection.total / limit),
      events: eventsData.eventEntryCollection.items,
      totalEvents: eventsData.eventEntryCollection.total,
      breadcrumbs: [...aboutPageBreadcrumbs, { title: "Events", link: "/about/events" }],
    };
  }
  throw error(404);
};

import gql from "graphql-tag";
import type { EventsQuery } from "./$queries.generated";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./page/[page]/$types";
import type { Breadcrumbs } from "$lib/components/Breadcrumbs";
import { events as testEvents, pages as testEventPages } from "./__tests__/eventsTestContent";

const limit = 20;

// TODO: filter to only future events. this will require thinking about timezones
export const query = gql`
  query Events($limit: Int = 20, $skip: Int = 0, $preview: Boolean = false) {
    eventEntryCollection(
      limit: $limit
      skip: $skip
      order: [eventDateAndTime_ASC]
      preview: $preview
    ) {
      total
      items {
        sys {
          id
        }
        slug
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

export const loadBaseBreadcrumbs = async ({
  parent,
}: Pick<Parameters<PageServerLoad>[0], "parent">): Promise<Breadcrumbs> => {
  const { pageMetadataMap, pathsToIDs } = await parent();
  const aboutPageMetadataID = pathsToIDs.get("/about");
  if (!aboutPageMetadataID) return [];
  const { breadcrumbs } = pageMetadataMap.get(aboutPageMetadataID) ?? {};
  return [...(breadcrumbs ?? []), { title: "Events", link: "/about/events" }];
};

export const loadEventsPage = async ({
  parent,
  params: { page },
  locals: { contentfulClient },
}: Pick<Parameters<PageServerLoad>[0], "params" | "parent" | "locals">) => {
  fetchData: {
    const pageNumber = parseInt(page);
    if (isNaN(pageNumber)) break fetchData;
    const breadcrumbsPromise = loadBaseBreadcrumbs({ parent }).then((baseBreadcrumbs) => [
      ...baseBreadcrumbs,
      ...(pageNumber > 1
        ? [{ title: `Page ${pageNumber}`, link: `/about/events/page/${pageNumber}` }]
        : []),
    ]);
    if (!contentfulClient) {
      return {
        currentPageNumber: pageNumber,
        totalPages: Math.ceil(testEvents.length / limit),
        events: testEventPages[pageNumber - 1].items,
        totalEvents: testEvents.length,
        breadcrumbs: breadcrumbsPromise,
      };
    }
    const eventsData = await contentfulClient.fetch<EventsQuery>(query, {
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
    eventsData?.eventEntryCollection?.items?.[0]?.eventDateAndTime;
    return {
      pageMetadata: {
        metaTitle: pageNumber <= 1 ? "Events" : `Events - page ${pageNumber}`,
        breadcrumbs: await breadcrumbsPromise,
      },
      currentPageNumber: pageNumber,
      totalPages: Math.ceil(eventsData.eventEntryCollection.total / limit),
      events: eventsData.eventEntryCollection.items,
      totalEvents: eventsData.eventEntryCollection.total,
    };
  }
  throw error(404);
};

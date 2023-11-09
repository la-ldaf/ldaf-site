import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import type { EventsQuery } from "./$queries.generated";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./page/[page]/$types";
import type { Breadcrumbs } from "$lib/components/Breadcrumbs";
import { events as testEvents, pages as testEventPages } from "./__tests__/eventsTestContent";
import { eventIANATimezone } from "$lib/constants/date";
import { getCurrentDateInTZ, getStartOfDayForDateInTZ } from "$lib/util/dates";

const eventsBasePath = "/about/events";
const limit = 20;

// TODO: filter to only future events. this will require thinking about timezones
export const query = gql`
  query Events($startDate: DateTime!, $limit: Int = 20, $skip: Int = 0) {
    eventEntryCollection(
      limit: $limit
      skip: $skip
      order: [eventDateAndTime_ASC]
      where: { eventDateAndTime_gte: $startDate }
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
  return [...(breadcrumbs ?? []), { title: "Events", link: eventsBasePath }];
};

export const loadEventsPage = async ({
  parent,
  params: { page },
  locals: { contentfulClient },
}: Pick<Parameters<PageServerLoad>[0], "params" | "parent" | "locals">) => {
  const startDate = getStartOfDayForDateInTZ(
    getCurrentDateInTZ(eventIANATimezone),
    eventIANATimezone,
  );
  fetchData: {
    const pageNumber = parseInt(page);
    if (isNaN(pageNumber)) break fetchData;
    const breadcrumbsPromise = loadBaseBreadcrumbs({ parent }).then((baseBreadcrumbs) => [
      ...baseBreadcrumbs,
      ...(pageNumber > 1
        ? [{ title: `Page ${pageNumber}`, link: `${eventsBasePath}/page/${pageNumber}` }]
        : []),
    ]);
    if (!contentfulClient) {
      return {
        currentPageNumber: pageNumber,
        totalPages: Math.ceil(testEvents.length / limit),
        events: testEventPages[pageNumber - 1].items,
        breadcrumbs: breadcrumbsPromise,
      };
    }
    const { pageMetadataMap, pathsToIDs } = await parent();
    const pageMetadataID = pathsToIDs.get(eventsBasePath);
    if (!pageMetadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(pageMetadataID);
    if (!pageMetadata) break fetchData;
    const eventsData = await contentfulClient.fetch<EventsQuery>(printQuery(query), {
      variables: {
        startDate,
        limit,
        skip: limit * Math.max(pageNumber - 1, 0),
      },
    });
    if (!eventsData?.eventEntryCollection?.items) {
      break fetchData;
    }
    return {
      pageMetadata: {
        ...pageMetadata,
        metaTitle:
          pageNumber <= 1
            ? pageMetadata.metaTitle
            : `${pageMetadata.metaTitle} - page ${pageNumber}`,
        url: pageNumber <= 1 ? eventsBasePath : `${eventsBasePath}/page/${pageNumber}`,
        breadcrumbs: await breadcrumbsPromise,
      },
      currentPageNumber: pageNumber,
      totalPages: Math.ceil(eventsData.eventEntryCollection.total / limit),
      events: eventsData.eventEntryCollection.items,
    };
  }
  throw error(404);
};

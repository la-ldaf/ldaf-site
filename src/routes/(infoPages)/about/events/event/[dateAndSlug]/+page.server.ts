import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { CONTENTFUL_DELIVERY_API_TOKEN, CONTENTFUL_SPACE_ID } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import type { PageServerLoad } from "./$types";
import type { EventQuery } from "./$queries.generated";
import { loadBaseBreadcrumbs } from "../../shared.server";
import { eventIANATimezone } from "$lib/constants/date";
import { zonedEndOfDay, zonedStartOfDay } from "$lib/util/dates";
import zonedTimeToUtc from "date-fns-tz/zonedTimeToUtc";

const query = gql`
  query Event($dateStart: DateTime!, $dateEnd: DateTime!, $slug: String!) {
    eventEntryCollection(
      limit: 1
      where: { eventDateAndTime_gte: $dateStart, eventDateAndTime_lt: $dateEnd, slug: $slug }
    ) {
      items {
        sys {
          id
        }
        slug
        shortTitle
        internalName
        eventDescription
        eventDateAndTime
        eventDocumentsCollection {
          items {
            __typename
            ... on DocumentWrapper {
              sys {
                id
              }
              docWrapperName
              documentDescription
              wrappedDocumentName {
                url
              }
            }
            ... on Contact {
              sys {
                id
              }
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

export const load = (async ({ params: { dateAndSlug }, parent }) => {
  // dateAndSlug should be constructed like 2023-08-10-some-slug
  // TODO: write route matcher that enforces this
  const [_, dateString, slug] = dateAndSlug.match(/(\d{4}-\d{2}-\d{2})-([a-z1-9-]+)/) ?? [];
  if (!dateString || !slug) throw error(404);
  const date = zonedTimeToUtc(dateString, eventIANATimezone);
  const dateStart = zonedStartOfDay(date, eventIANATimezone).toISOString();
  const dateEnd = zonedEndOfDay(date, eventIANATimezone).toISOString();
  // TODO: example contents
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) throw error(404);
  const baseBreadcrumbsPromise = loadBaseBreadcrumbs({ parent });
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
  });
  const variables = {
    dateStart,
    dateEnd,
    slug,
  };
  const eventDataPromise = client.fetch<EventQuery>(printQuery(query), {
    variables,
  });
  const [baseBreadcrumbs, eventData] = await Promise.all([
    baseBreadcrumbsPromise,
    eventDataPromise,
  ]);
  const [event] = eventData?.eventEntryCollection?.items ?? [];
  if (!event) throw error(404);
  return {
    event,
    pageMetadata: {
      metaTitle: `Event - ${event.shortTitle}`,
      breadcrumbs: [
        ...baseBreadcrumbs,
        { title: event.shortTitle, link: `/about/events/event/${dateAndSlug}` },
      ],
    },
  };
}) satisfies PageServerLoad;

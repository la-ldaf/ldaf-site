import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { day } from "$lib/constants/date";
import type { PageServerLoad } from "./$types";
import type { EventQuery } from "./$queries.generated";
import { loadBaseBreadcrumbs } from "../../shared.server";

const query = gql`
  query Event(
    $dateStart: DateTime!
    $dateEnd: DateTime!
    $slug: String!
    $preview: Boolean = false
  ) {
    eventEntryCollection(
      limit: 1
      where: { eventDateAndTime_gte: $dateStart, eventDateAndTime_lt: $dateEnd, slug: $slug }
      preview: $preview
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

export const load = (async ({ params: { dateAndSlug }, parent, locals: { contentfulClient } }) => {
  // dateAndSlug should be constructed like 2023-08-10-some-slug
  const [_, dateString, slug] = dateAndSlug.match(/(\d{4}-\d{2}-\d{2})-([a-z1-9-]+)/) ?? [];
  if (!dateString || !slug) throw error(404);
  const date = new Date(dateString);
  const dateStart = date.toISOString();
  const dateEnd = new Date(date.getTime() + 1 * day).toISOString();
  // TODO: example contents
  if (!contentfulClient) throw error(404);
  const baseBreadcrumbsPromise = loadBaseBreadcrumbs({ parent });
  const variables = {
    dateStart,
    dateEnd,
    slug,
  };
  const eventDataPromise = contentfulClient.fetch<EventQuery>(query, {
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

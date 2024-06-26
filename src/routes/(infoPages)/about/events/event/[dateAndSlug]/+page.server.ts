import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import type { PageServerLoad } from "./$types";
import type { EventQuery } from "./$queries.generated";
import { loadBaseBreadcrumbs } from "../../shared.server";
import assetPropsFragment from "$lib/fragments/assetProps";
import entryPropsFragment from "$lib/fragments/entryProps";
import { eventIANATimezone } from "$lib/constants/date";
import { getEndOfDayForDateInTZ, getStartOfDayForDateInTZ } from "$lib/util/dates";

const query = gql`
  # eslint-disable @graphql-eslint/selection-set-depth
  ${assetPropsFragment}
  ${entryPropsFragment}

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
        eventRichTextDescription {
          json
          links {
            assets {
              block {
                ...AssetProps
              }
              hyperlink {
                ...AssetProps
              }
            }
            entries {
              block {
                ...EntryProps
              }
              hyperlink {
                ...EntryProps
              }
            }
          }
        }
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

export const load = (async ({ params: { dateAndSlug }, locals: { contentfulClient }, parent }) => {
  // dateAndSlug should be constructed like 2023-08-10-some-slug
  // TODO: write route matcher that enforces this
  const [_, dateString, slug] = dateAndSlug.match(/^(\d{4}-\d{2}-\d{2})-([a-z1-9-]+)$/) ?? [];
  if (!dateString || !slug) throw error(404);
  const dateStart = getStartOfDayForDateInTZ(dateString, eventIANATimezone);
  const dateEnd = getEndOfDayForDateInTZ(dateString, eventIANATimezone);
  // TODO: example contents
  if (!contentfulClient) throw error(404);
  const baseBreadcrumbsPromise = loadBaseBreadcrumbs({ parent });
  const variables = {
    dateStart,
    dateEnd,
    slug,
  };
  const eventDataPromise = contentfulClient.fetch<EventQuery>(printQuery(query), {
    variables,
  });
  const [baseBreadcrumbs, eventData] = await Promise.all([
    baseBreadcrumbsPromise,
    eventDataPromise,
  ]);
  const [event] = eventData?.eventEntryCollection?.items ?? [];
  if (!event) throw error(404);
  const url = `/about/events/event/${dateAndSlug}`;
  return {
    event,
    pageMetadata: {
      metaTitle: `Event - ${event.shortTitle}`,
      url,
      breadcrumbs: [...baseBreadcrumbs, { title: event.shortTitle, link: url }],
    },
  };
}) satisfies PageServerLoad;

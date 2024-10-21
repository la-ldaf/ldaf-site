import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";

export const GET = (async ({ locals: { contentfulClient } }) => {
  const queryServiceEntries = gql`
    query UnlinkedServiceEntriesWithPagination($limit: Int!, $skip: Int!) {
      serviceEntryCollection(limit: $limit, skip: $skip, preview: false) {
        total
        skip
        limit

        items {
          sys {
            id
          }
          __typename
          entryTitle
          description {
            json
          }
          linkedFrom {
            serviceGroupCollection(preview: true) {
              total
            }
          }
        }
      }
    }
  `;

  const limit = 100;
  let skip = 0;
  let allUnlinkedEntries = [];
  let totalProcessed = 0;
  let hasMore = true;

  while (hasMore) {
    const response = await contentfulClient.fetch(printQuery(queryServiceEntries), {
      variables: { limit, skip },
    });

    const { total, items } = response.serviceEntryCollection;
    const unlinkedEntries = items.filter(
      (item) => item.linkedFrom.serviceGroupCollection.total === 0,
    );

    allUnlinkedEntries = allUnlinkedEntries.concat(unlinkedEntries);
    totalProcessed += items.length;
    skip += limit;
    hasMore = totalProcessed < total;

    console.log(
      `Processed ${totalProcessed} of ${total} entries. Found ${allUnlinkedEntries.length} unlinked entries so far.`,
    );
  }
  return json(allUnlinkedEntries.map((entry) => entry.entryTitle).sort());
}) satisfies RequestHandler;

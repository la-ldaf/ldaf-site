import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import lodash from "lodash";

export const GET = (async ({ locals: { contentfulClient } }) => {
  const queryServiceEntries = gql`
    query CoreContentwCTAs {
      # We only want service entries that live on core content pages,
      # i.e., within service groups
      serviceGroupCollection(limit: 175, preview: true) {
        total
        skip
        limit

        items {
          sys {
            id
          }
          __typename
          title
          serviceEntriesCollection(limit: 50) {
            items {
              ... on ServiceEntry {
                #       sys {
                #         id
                #       }
                __typename
                entryTitle
                description {
                  json
                }
              }

              ... on ServiceGroup {
                title
              }
            }
          }
        }
      }
    }
  `;

  queryServiceEntries;

  const data = await contentfulClient?.fetch(printQuery(queryServiceEntries));

  processData: {
    if (!data) break processData;
    console.log("number of core content collections", data?.serviceGroupCollection?.items.length);

    let serviceEntries = [];
    // let nestedServiceGroups = [];
    const serviceEntryDescriptions = [];
    // console.log(data);
    data?.serviceGroupCollection?.items.forEach((serviceGroup) => {
      // console.log(serviceGroup);
      serviceEntries.push(serviceGroup?.serviceEntriesCollection?.items);
      // nestedServiceGroups.push(serviceGroup?.serv);

      serviceGroup?.serviceEntriesCollection.items.forEach((serviceEntry) => {
        serviceEntryDescriptions.push(serviceEntry.entryTitle);
      });
    });

    const flattenedServiceEntries = serviceEntries
      .flat()
      .filter((item) => item.__typename === "ServiceEntry" || item.__typename == "ServiceGroup")
      .map((item) => {
        if (item.__typename === "ServiceEntry") return item.entryTitle;
        if (item.__typename === "ServiceGroup") return item.title;
      })
      .sort();

    const serviceEntriesSet = new Set(flattenedServiceEntries);

    const duplicates = flattenedServiceEntries.filter((val, i) =>
      flattenedServiceEntries.includes(val, i + 1),
    );
    // console.log("duplicates", duplicates, duplicates.length);
    console.log(serviceEntries.length, serviceEntriesSet.size);
    return json(Array.from(serviceEntriesSet).sort());
  }
  return json(data);
}) satisfies RequestHandler;

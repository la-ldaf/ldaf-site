import fs from "fs";
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
      serviceGroupCollection(limit: 175) {
        items {
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
            }
          }
        }
      }
    }
  `;

  queryServiceEntries;

  // const pageId = "4ZuI4Al26srXFlSrZvPjUh";
  // const data = await contentfulClient.fetch(printQuery(queryServiceEntries), {
  //   variables: { pageId },
  // });
  const data = await contentfulClient?.fetch(printQuery(queryServiceEntries));

  processData: {
    if (!data) break processData;
    console.log("number of core content collections", data.serviceGroupCollection.items.length);
    // let serviceEntries = 0;
    let serviceEntries = [];
    const serviceEntryDescriptions = [];
    data.serviceGroupCollection.items.forEach((serviceGroup) => {
      serviceEntries.push(serviceGroup?.serviceEntriesCollection.items);
      serviceGroup?.serviceEntriesCollection.items.forEach((serviceEntry) => {
        console.log({ ...serviceEntry, serviceGroup: serviceGroup.title });
        // serviceEntryDescriptions.push(documentToPlainTextString(serviceEntry?.description?.json));
        serviceEntryDescriptions.push(serviceEntry.entryTitle);
      });
    });
    // console.log("service entries", serviceEntries);
    // serviceEntriesSet = new Set(serviceEntries.flat());
    const serviceEntriesSet = new Set(
      serviceEntries
        .flat()
        .filter((item) => item.__typename === "ServiceEntry")
        .map((item) => item.entryTitle)
        .sort(),
    );
    // console.log(serviceEntriesSet);
    console.log(serviceEntriesSet.size);
    // data.serviceGroupCollection.items[0].serviceEntriesCollection.items.map((item) => {
    //   // console.log(item);
    //   const plainText = documentToPlainTextString(item?.description?.json);
    //   console.log(plainText);
    // });
    // console.log(serviceEntryDescriptions.length);
    console.log(serviceEntryDescriptions);
    const descriptionsSet = new Set(serviceEntryDescriptions.filter(Boolean));
    console.log(descriptionsSet.size);

    // console.log(descriptionsSet);

    fs.writeFileSync(
      "/Users/danhinze/Downloads/serviceEntries1.json",
      JSON.stringify(Array.from(serviceEntriesSet).sort(), null, 2),
    );
    fs.writeFileSync(
      "/Users/danhinze/Downloads/serviceEntries2.json",
      JSON.stringify(Array.from(descriptionsSet).sort(), null, 2),
    );
    console.log("DIFF");
    const diff = lodash.difference(Array.from(serviceEntriesSet), Array.from(descriptionsSet));
    console.log(diff);
    console.log(serviceEntriesSet.size - descriptionsSet.size);
  }
  return json(data);
}) satisfies RequestHandler;

import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import type { PageMetadataMap } from "$lib/loadPageMetadataMap";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";
import slugify from "$lib/util/slugify";

export const GET = (async ({ locals: { contentfulClient } }) => {
  const queryServiceEntries = gql`
    query CoreContentwCTAs {
      # A few other important details:
      # - The preview flag is implicitly false, but explicitly stating it in the query
      #   because there are service *entries* that are published in Contentful
      #   but are referenced within service groups that *not* published.
      # - There are some service entries that are published in Contentful but not
      #   linked to any service groups. We don't want to include these, since there would
      #   be nothing to link to for those service entries. Stated plainly, we only want
      #   service entries that live on core content pages (i.e service groups).
      #
      #  Be mindful of those details when monitoring the number of service entries returned
      #  here vs the total number of entries that are published in Contentful.
      serviceGroupCollection(limit: 175, preview: false) {
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
                sys {
                  id
                }
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

  const data = await contentfulClient?.fetch(printQuery(queryServiceEntries));
  const entryCount = {};

  processData: {
    if (!data) break processData;
    // console.log("number of core content collections", data?.serviceGroupCollection?.items.length);

    let serviceEntries = [];
    const serviceEntryDescriptions = [];

    data?.serviceGroupCollection?.items.forEach((serviceGroup) => {
      // serviceEntries.push(serviceGroup?.serviceEntriesCollection?.items);

      serviceGroup?.serviceEntriesCollection.items.forEach((serviceEntry) => {
        // serviceEntryDescriptions.push(documentToPlainTextString(serviceEntry?.description?.json));
        // serviceEntryDescriptions.push(serviceEntry.entryTitle);
        // if (entryCount[serviceEntry.entryTitle]) {
        //   entryCount[serviceEntry.entryTitle] += 1;
        // } else {
        //   entryCount[serviceEntry.entryTitle] = 1;
        // }
        if (serviceEntry?.description?.json) {
          serviceEntryDescriptions.push({
            serviceGroupTitle: serviceGroup.title,
            serviceEntryTitle: serviceEntry.entryTitle || "no title",
            description: documentToPlainTextString(serviceEntry?.description?.json),
          });
        }
      });
    });

    // const flattenedServiceEntries = serviceEntries
    //   .flat()
    //   .filter((item) => item.__typename === "ServiceEntry") //|| item.__typename == "ServiceGroup")
    //   .map((item) => {
    //     if (item.__typename === "ServiceEntry") return item.entryTitle;
    //     //if (item.__typename === "ServiceGroup") return item.title;
    //   })
    //   .sort();

    // const serviceEntriesSet = new Set(flattenedServiceEntries);
    //
    // break processData;
    // return json(Array.from(new Set(serviceEntryDescriptions)).sort());
    return json(
      serviceEntryDescriptions
        .map(
          (serviceEntry) => `${serviceEntry.serviceGroupTitle} - ${serviceEntry.serviceEntryTitle}`,
        )
        .sort(),
    );
    console.log(serviceEntryDescriptions.length);
    return json(
      Array.from(
        new Set(
          serviceEntryDescriptions.map((item) => {
            return item?.serviceEntryTitle;
            // return {
            //   title: item?.serviceEntryTitle,
            // };
          }),
        ),
      ),
    );
    return json(
      Array.from(
        new Set(
          serviceEntryDescriptions.map((item) => {
            // if (item.description) {
            //   return console.log("null item ", item);
            // }
            return item.description || console.log("NO DESCRIPTION", item);
          }),
        ),
      ),
    );
  }
  for (const [entry, count] of Object.entries(entryCount)) {
    if (count === 1 || entry === "undefined") {
      delete entryCount[entry];
    }
  }
  return json(entryCount);
}) satisfies RequestHandler;

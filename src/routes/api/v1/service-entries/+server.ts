import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import type { ExtractQueryType } from "$lib/util/types";
import type { CoreContentwCtAsQuery } from "./$queries.generated";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";
import slugify from "$lib/util/slugify";
import type { SearchIndexServiceEntry } from "../types";

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
      #
      #  The current number of service groups as of 10/31/2024 is 148. 200 gives us a
      #  reasonable buffer while still staying under query complexity limits.
      serviceGroupCollection(limit: 200, preview: false) {
        total

        items {
          pageMetadata {
            sys {
              id
            }
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

  const data = await contentfulClient?.fetch<CoreContentwCtAsQuery>(
    printQuery(queryServiceEntries),
  );
  type serviceEntries = ExtractQueryType<
    CoreContentwCtAsQuery,
    ["serviceGroupCollection", "items", "serviceEntryCollection", "items"]
  >;

  const serviceEntries: SearchIndexServiceEntry[] = [];
  const duplicateEntries: Record<string, { count: number; parents: string[] }> = {};

  processData: {
    if (!data) break processData;

    const { pageMetadataMap } = await loadPageMetadataMap({ contentfulClient });

    data?.serviceGroupCollection?.items.forEach((serviceGroup) => {
      serviceGroup?.serviceEntriesCollection?.items.forEach((serviceEntry) => {
        if (
          // appease TypeScript errors
          serviceEntry &&
          "entryTitle" in serviceEntry &&
          serviceEntry.entryTitle &&
          serviceGroup.title
        ) {
          if (duplicateEntries[serviceEntry?.entryTitle]) {
            duplicateEntries[serviceEntry.entryTitle].count += 1;
            duplicateEntries[serviceEntry.entryTitle].parents.push(serviceGroup.title);
          } else {
            duplicateEntries[serviceEntry.entryTitle] = {
              count: 1,
              parents: [serviceGroup.title],
            };
          }

          if (serviceEntry?.description?.json) {
            const parentPage = pageMetadataMap.get(serviceGroup?.pageMetadata?.sys?.id ?? "");
            serviceEntries.push({
              // objectID is the property needed to index content in Algolia,
              objectID: serviceEntry.sys?.id,
              url: `${parentPage?.url}#${slugify(serviceEntry.entryTitle)}`,
              metaTitle: `${serviceGroup.title} | ${serviceEntry.entryTitle}`,
              metaDescription: documentToPlainTextString(serviceEntry?.description?.json),
              entryType: "Service Entry",
            });
          }
        }
      });
    });
  }

  for (const [entry, metadata] of Object.entries(duplicateEntries)) {
    if (metadata.count == 1 || entry === "undefined") {
      delete duplicateEntries[entry];
    }
    metadata.parents.sort();
  }

  /**
   * - `serviceEntries` are the properties needed for the search index
   * - `duplicates` provides metadata on which service entries are linked
   *    to across multiple pages
   */
  return json({
    serviceEntries: serviceEntries,
    duplicates: duplicateEntries,
  });
}) satisfies RequestHandler;

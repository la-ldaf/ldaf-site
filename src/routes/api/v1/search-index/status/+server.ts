import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import {
  loadPageMetadataMap,
  type PageMetadataMapItem,
  type PageMetadataMapItemWithObjectID,
} from "$lib/loadPageMetadataMap";
import uniq from "lodash/uniq";
import isEqual from "lodash/isEqual";
import algoliasearch from "algoliasearch";
import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_INDEX } from "$env/static/public";
import { ALGOLIA_API_KEY } from "$env/static/private";

const algoliaClient = algoliasearch(PUBLIC_ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = algoliaClient.initIndex(PUBLIC_ALGOLIA_INDEX);

export const GET = (async ({ locals: { contentfulClient } }) => {
  const { pageMetadataMap } = await loadPageMetadataMap({ contentfulClient });

  let hits: PageMetadataMapItem[] = [];

  await index.browseObjects({
    query: "",
    batch: (batch) => {
      // objectID doesn't exist on the Contentful side, so remove it
      // from Algolia records so we can properly compare for mismatches
      const transformedHits = batch.map((hit) => {
        const { objectID: _objectID, ...hitWithoutObjectID } =
          hit as PageMetadataMapItemWithObjectID;
        return hitWithoutObjectID;
      });
      hits = hits.concat(transformedHits);
    },
  });

  const algoliaMap = new Map();
  hits.forEach((hit) => algoliaMap.set(hit.sys.id, hit));

  const getMismatchedKeys = (oldData: PageMetadataMapItem, newData: PageMetadataMapItem) => {
    const data = uniq([...Object.keys(oldData), ...Object.keys(newData)]);
    const keys = [];
    for (const key of data as (keyof PageMetadataMapItem)[]) {
      if (!isEqual(oldData[key], newData[key])) {
        keys.push(key);
      }
    }

    return keys as (keyof PageMetadataMapItem)[];
  };

  const nullURLs = [];
  const missingInAlgolia = [];
  const missingInContentful = [];
  const mismatches = [];

  for (const [key, contentfulValue] of pageMetadataMap) {
    if (contentfulValue.url === null) {
      nullURLs.push(key);
      continue;
    }
    if (contentfulValue.isRoot) {
      continue;
    }
    const algoliaValue = algoliaMap.get(key);
    if (algoliaValue === undefined) {
      continue;
    }
    // isEqual needs any arrays to be in the same order
    // to properly detect any mismatches between objects.
    if (algoliaValue?.children) {
      algoliaValue.children.sort();
    }
    if (contentfulValue?.children) {
      contentfulValue.children.sort();
    }

    if (!isEqual(contentfulValue, algoliaValue)) {
      const mismatchedKeys = getMismatchedKeys(algoliaValue, contentfulValue);
      mismatches.push({
        id: key,
        mismatched_values: mismatchedKeys.map((key: keyof typeof contentfulValue) => ({
          key,
          contentful_value: contentfulValue[key],
          algolia_value: algoliaValue[key],
        })),
      });
    }
  }

  for (const [key, value] of algoliaMap) {
    if (!pageMetadataMap.get(key)) {
      missingInContentful.push(value);
    }
  }
  for (const [key, value] of pageMetadataMap) {
    // filter out isRoot. We expect Algolia to have one less record
    // than Contentful, since the home page isn't included in search.
    if (!algoliaMap.get(key) && value.url !== null && !value.isRoot) {
      missingInAlgolia.push(value);
    }
  }

  const results = {
    total_contentful_records: pageMetadataMap.size,
    total_algolia_records: algoliaMap.size,
    // Subtracting 1 at the end of expected Algolia Records size accounts for omitting the home page
    expected_algolia_records: pageMetadataMap.size - nullURLs.length - missingInAlgolia.length - 1,
    // non-zero values here indicate that new records aren't getting added properly
    missing_in_algolia: missingInAlgolia,
    // We should never encounter records in Algolia that aren't in Contentful.
    // If we do, they've been unpublished/deleted and so should also be deleted from Algolia
    missing_in_contentful: missingInContentful,
    mismatched_record_total: mismatches.length,
    nullURLs_in_contentful: nullURLs,
    mismatches,
  };

  return json(results);
}) satisfies RequestHandler;

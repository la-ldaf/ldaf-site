import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";
import uniq from "lodash/uniq";
import isEqual from "lodash/isEqual";
import algoliasearch from "algoliasearch";
import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_INDEX } from "$env/static/public";
import { ALGOLIA_API_KEY } from "$env/static/private";

const algoliaClient = algoliasearch(PUBLIC_ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = algoliaClient.initIndex(PUBLIC_ALGOLIA_INDEX);

export const GET = (async () => {
  const { pageMetadataMap } = await loadPageMetadataMap({ includeBreadcrumbs: false });

  let hits = [];

  await index.browseObjects({
    query: "",
    batch: (batch) => {
      // objectID doesn't exist on the contentful side, so remove it
      // from Algolia records so we can properly compare for mismatches
      const transformedHits = batch.map((hit) => {
        const { objectID, ...hitWithoutObjectID } = hit;
        return hitWithoutObjectID;
      });
      hits = hits.concat(transformedHits);
    },
  });

  const algoliaMap = new Map();
  hits.forEach((hit) => algoliaMap.set(hit.sys.id, hit));

  const getMismatchedKeys = (oldData, newData) => {
    const data = uniq([...Object.keys(oldData), ...Object.keys(newData)]);
    const keys = [];
    for (const key of data) {
      if (!isEqual(oldData[key], newData[key])) {
        keys.push(key);
      }
    }

    return keys;
  };

  let misMatchCount = 0;
  let nullURLs = 0;
  const missingInAlgolia = [];
  const missingInContentful = [];

  for (const [key, contentfulValue] of pageMetadataMap) {
    if (contentfulValue.url === null) {
      nullURLs++;
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
      misMatchCount++;

      const mismatchedKeys = getMismatchedKeys(algoliaValue, contentfulValue);
      console.log("--------------------------------------");
      console.log(`Mismatches for id ${key}`);
      console.log("--------------------------------------");
      mismatchedKeys.forEach((key) => {
        console.log(`Key: ${key}`);
        console.log(`Algolia Value: ${algoliaValue[key]}`);
        console.log(`Contentful Value: ${contentfulValue[key]}`);
        console.log("--------------------------------------\n\n");
      });
    }
  }

  for (const [key, value] of algoliaMap) {
    if (!pageMetadataMap.get(key)) {
      missingInContentful.push(key);
      console.log(`No entry in Contenful for ${value.url}\n`);
    }
  }
  for (const [key, value] of pageMetadataMap) {
    // filter out isRoot. We expect Algolia to have one less record
    // than Contentful, since the home page isn't included in search.
    if (!algoliaMap.get(key) && value.url !== null && !value.isRoot) {
      missingInAlgolia.push(key);
      console.log(`No entry in Algolia for ${value.url}\n`);
    }
  }

  console.log("--------------------------------------");
  console.log(`Total records with mismatched values: ${misMatchCount}`);
  console.log(`Null urls in Contentful: ${nullURLs}`);
  if (missingInAlgolia.length > 0) {
    console.log(`${missingInAlgolia.length} Records missing from Algolia: ${missingInAlgolia}`);
  }
  if (missingInContentful.length > 0) {
    // We should never encounter records in Algolia that aren't in Contentful.
    // If we do, they've been unpublished/deleted and so should also be deleted from Algolia
    console.log(
      `${missingInContentful.length} Records missing from Contentful: ${missingInContentful}`
    );
  }
  console.log("--------------------------------------\n");

  console.log("--------------------------------------");
  console.log(`Total Contentful Records: ${pageMetadataMap.size}`);
  // Subtracting 1 at the end of expected Algolia Records size accounts for omitting the home page
  console.log(
    `Expected Algolia Records size: ${
      pageMetadataMap.size - nullURLs - missingInAlgolia.length - 1
    }`
  );
  console.log(`Total Algolia Records: ${algoliaMap.size}`);
  console.log("--------------------------------------\n\n");

  return json(Array.from(pageMetadataMap.values()).filter((page) => page.url && !page.isRoot));
}) satisfies RequestHandler;

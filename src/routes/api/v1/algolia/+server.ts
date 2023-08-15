import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";
import uniq from "lodash/uniq";
import isEqual from "lodash/isEqual";
import algoliasearch from "algoliasearch";
const ALGOLIA_API_KEY = "dcb19121a82a95ceafc9f00fb74c3a1c";
import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_INDEX } from "$env/static/public";

const algoliaClient = algoliasearch(PUBLIC_ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = algoliaClient.initIndex(PUBLIC_ALGOLIA_INDEX);

export const GET = (async () => {
  const { pageMetadataMap } = await loadPageMetadataMap({ includeBreadcrumbs: false });
  let hits = [];
  let hitsWithoutIDs = [];

  await index.browseObjects({
    query: "",
    batch: (batch) => {
      const transformedHits = batch.map((hit) => {
        const { objectID, ...hitWithoutObjectID } = hit;
        return hitWithoutObjectID;
      });
      hits = hits.concat(batch);
      hitsWithoutIDs = hitsWithoutIDs.concat(transformedHits);
    },
  });

  const algoliaMap = new Map();
  const algoliaMapWithIDs = new Map();
  hitsWithoutIDs.forEach((hit, index) => {
    algoliaMap.set(hit.sys.id, hit);
    algoliaMapWithIDs.set(hit.sys.id, hits[index]);
  });

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
  let missingInAlgolia = [];

  for (const [key, contentfulValue] of pageMetadataMap) {
    const algoliaValue = algoliaMap.get(key);
    if (algoliaValue === undefined) {
      missingInAlgolia.push(key);
      console.log(`No algolia entry for key ${key}`);
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
      mismatchedKeys.forEach((key) => {
        console.log(`Key: ${key}`);
        console.log(`Algolia Value: ${algoliaValue[key]}`);
        console.log(`Contentful Value: ${contentfulValue[key]}`);
      });
    }
  }

  console.log(`Total Contentful Records: ${pageMetadataMap.size}`);
  console.log(`Total Algolia Records: ${algoliaMap.size}`);
  for (const [key, value] of algoliaMap) {
    if (!pageMetadataMap.get(key)) {
      console.log(`No entry in Contenful for ${JSON.stringify(value, null, 2)}`);
    }
  }
  for (const [key, value] of pageMetadataMap) {
    if (!algoliaMap.get(key)) {
      console.log(`No entry in Algolia for ${JSON.stringify(value, null, 2)}`);
    }
  }
  // missingInAlgolia.forEach((id) => console.log(id));
  console.log(`Total Mismatches: ${misMatchCount}`);
  // return json({ hello: "world" });
  // return json(hitsWithoutIDs);
  return json(Array.from(pageMetadataMap.values()).filter((page) => page.url && !page.isRoot));
}) satisfies RequestHandler;

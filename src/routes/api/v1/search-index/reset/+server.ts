import { json } from "@sveltejs/kit";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";
import algoliasearch from "algoliasearch";
import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_INDEX } from "$env/static/public";
import { ALGOLIA_API_KEY } from "$env/static/private";
import { authenticateRequest } from "$lib/services/server";

const algoliaClient = algoliasearch(PUBLIC_ALGOLIA_APP_ID, ALGOLIA_API_KEY);

/**
 * This endpoint does a wholesale reset of the page metadata map in Algolia.
 * Since it requires each record to have an objectID, a reset call won't result
 * in any duplication of metadata records in the Algolia index, just a replacement
 * of the previous object value with the current value in contentful
 * TODO: secure this somehow to prevent unnecessary operations
 **/
export const POST = async ({ request }) => {
  authenticateRequest(request);

  const { pageMetadataMap } = await loadPageMetadataMap({ includeBreadcrumbs: false });
  const index = algoliaClient.initIndex(PUBLIC_ALGOLIA_INDEX);

  /**
   * Filter to ignore the records we don't wont to add to Algolia
   * (i.e., omit the home page and any null urls)
   */
  const metadataValues = Array.from(pageMetadataMap.values()).filter(
    (page) => page.url && !page.isRoot
  );

  const algoliaRecords = metadataValues.map((metadataValue) => {
    const {
      sys: { id: objectID },
    } = metadataValue;

    /**
     * Algolia requires each record to have an unique objectID key.
     * Making this 1:1 with the Contentful's sys.id for easier update operations.
     */
    return {
      ...metadataValue,
      objectID,
    };
  });

  try {
    // TODO: investigate changing to `index.replaceAllObjects` for a "hard" reset
    const response = await index.saveObjects(algoliaRecords);

    return json(response);
  } catch (error) {
    return json(error);
  }
};

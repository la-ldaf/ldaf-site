import { json } from "@sveltejs/kit";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";
import algoliasearch from "algoliasearch";
import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_INDEX } from "$env/static/public";
import { ALGOLIA_API_KEY } from "$env/static/private";
import { authenticateRequest } from "$lib/services/server";

const algoliaClient = algoliasearch(PUBLIC_ALGOLIA_APP_ID, ALGOLIA_API_KEY);

/**
 * This endpoint does a wholesale reset of the page metadata values in Algolia.
 * Since it requires each record to have an objectID, a reset call *won't* result
 * in any duplication of metadata records in the Algolia index, just a replacement
 * of the previous object value with the current value in Contentful
 **/
export const POST = async ({ request, params: { recordId }, locals: { contentfulClient } }) => {
  // export const POST = async (data) => {
  console.log(recordId);
  // authenticateRequest(request);
  return json({});
  // return json(request.url);

  // const { pageMetadataMap } = await loadPageMetadataMap({
  //   includeBreadcrumbs: false,
  //   contentfulClient,
  // });
  // const index = algoliaClient.initIndex(PUBLIC_ALGOLIA_INDEX);

  // /**
  //  * Filter to ignore the records we don't wont to add to Algolia
  //  * (i.e., omit the home page and any null urls)
  //  */
  // const metadataValues = Array.from(pageMetadataMap.values()).find(
  //   request
  // );

  // const algoliaRecords = metadataValues.map((metadataValue) => {
  //   const {
  //     sys: { id: objectID },
  //   } = metadataValue;

  //   /**
  //    * Algolia requires each record to have an unique objectID key.
  //    * Making this 1:1 with the Contentful's sys.id for easier update operations.
  //    */
  //   return {
  //     ...metadataValue,
  //     objectID,
  //   };
  // });

  // try {
  //   /**
  //    * `index.saveObjects` adds new records (objects) to an index or replaces existing records
  //    *  with an updated set of attributes. It redefines all of a record’s attributes (except
  //    * its objectID). In other words, it fully replaces an existing record.
  //    *
  //    * Note: If there’s an error saving one of the records,
  //    * *none* of them will be added to the index.
  //    *
  //    * We're using this in lieu of `index.replaceAllObjects`, which is a "hard" reset of the index.
  //    * In the future, we want to add more than just pageMetadata records to the index.
  //    * In that case, `replaceAllObjects` might wipe out other records presently not replaced here.
  //    */
  //   const response = await index.saveObjects(algoliaRecords);

  //   return json(response);
  // } catch (error) {
  //   return json(error);
  // }
};

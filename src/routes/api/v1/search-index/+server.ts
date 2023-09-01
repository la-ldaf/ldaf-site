import { json, error } from "@sveltejs/kit";
import algoliasearch from "algoliasearch";
import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_INDEX } from "$env/static/public";
import { ALGOLIA_API_KEY } from "$env/static/private";
import { authenticateRequest } from "$lib/services/server";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";

const algoliaClient = algoliasearch(PUBLIC_ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = algoliaClient.initIndex(PUBLIC_ALGOLIA_INDEX);

const CONTENTFUL_ACTIONS = {
  PUBLISH: "ContentManagement.Entry.publish",
  UNPUBLISH: "ContentManagement.Entry.unpublish",
  DELETE: "ContentManagement.Entry.delete",
};

export const POST = async ({ request }) => {
  authenticateRequest(request);

  const { pageMetadataMap } = await loadPageMetadataMap({ includeBreadcrumbs: false });
  const contentfulAction = request.headers.get("x-contentful-topic") || "";
  const body = await request.json();
  const contentType = body.sys.contentType.sys.id;

  const contentTypes = ["pageMetadata"];

  try {
    if (contentfulAction === CONTENTFUL_ACTIONS.PUBLISH && contentTypes.includes(contentType)) {
      const contentfulValue = pageMetadataMap.get(body.sys.id) || { url: "", children: [] };
      // The webhook body is missing `children` and `url`, since we construct those in `loadPageMetadataMap`.
      // We add those properties here.
      const transformedFields = {
        objectID: body.sys.id,
        sys: {
          id: body.sys.id,
        },
        url: contentfulValue?.url,
        children: contentfulValue?.children,
      };
      for (const field in body.fields) {
        // The webhook body unfortunately prefaces each field with its local value,
        // so we need to flatten that.
        const englishValue = body.fields[field]["en-US"];
        transformedFields[field] = englishValue;
      }

      if (transformedFields?.parent?.sys) {
        /**
         * The webhook value for `parent.sys` has `type`, `linkType`, and `id` properties,
         * whereas the metadata map just has `sys.id`. By doing a partial update and specifying
         * the value for `parent`, we ensure equality with the metadataMap, since according to the docs:
         * > You can’t individually update nested attributes.
         * > Specifying a nested attribute treats it as a replacement of its first-level ancestor
         */
        delete transformedFields.parent.sys.type;
        delete transformedFields.parent.sys.linkType;
      }

      /**
       * `partialUpdateObject` only creates or updates attributes included in the call. Any preexisting
       * properties on the record that are not in the call are unaffected.
       * Docs: https://www.algolia.com/doc/api-reference/api-methods/partial-update-objects/#about-this-method
       * - If the objectID exists, Algolia replaces the attributes
       * - If the objectID is specified but doesn’t exist, Algolia creates a new record
       * - If the objectID isn’t specified, the method returns an error
       */
      const response = await index.partialUpdateObject(transformedFields);
      return json(response);
    }

    const deleteActions = [CONTENTFUL_ACTIONS.UNPUBLISH, CONTENTFUL_ACTIONS.DELETE];
    if (deleteActions.includes(contentfulAction) && contentTypes.includes(contentType)) {
      const response = await index.deleteObject(body.sys.id);
      return json(response);
    }
  } catch (message) {
    throw error(400, message);
  }
};

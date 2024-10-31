import { json, error } from "@sveltejs/kit";
import algoliasearch from "algoliasearch";
import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_INDEX } from "$env/static/public";
import { ALGOLIA_API_KEY } from "$env/static/private";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import type { SearchIndexServiceEntry } from "../../types";
// TODO: uncomment this
// import { authenticateRequest } from "$lib/services/server";

const algoliaClient = algoliasearch(PUBLIC_ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = algoliaClient.initIndex(PUBLIC_ALGOLIA_INDEX);

const CONTENTFUL_ACTIONS = {
  PUBLISH: "ContentManagement.Entry.publish",
  UNPUBLISH: "ContentManagement.Entry.unpublish",
  DELETE: "ContentManagement.Entry.delete",
};

export const POST = async ({ request, fetch, locals: { contentfulClient } }) => {
  // TODO: uncomment this
  // authenticateRequest(request);

  const contentfulAction = request.headers.get("x-contentful-topic") || "";
  const body = await request.json();
  const contentType = body?.sys?.contentType?.sys?.id;

  const contentTypes = ["serviceEntry"];

  type AlgoliaMetadataRecord = {
    objectID: string;
    sys: { id: string };
    url?: string | null | undefined;
    metaTitle?: string;
    metaDescription?: string;
    // Unfortunately, we can't know what all of what will exist in the the `fields`
    // property from Contentful, so we have to allow for some dynamic flexibility here
    [key: string]: string | null | undefined | object;
  };

  try {
    if (contentfulAction === CONTENTFUL_ACTIONS.PUBLISH && contentTypes.includes(contentType)) {
      const { serviceEntries } = await fetch("/api/v1/service-entries").then((res) => res.json());
      // Find the matching service entry via the metadata map to allow us to set the accordion URL
      const serviceEntry = serviceEntries.find(
        (serviceEntry: SearchIndexServiceEntry) => serviceEntry.id === body?.sys?.id,
      );

      const algoliaIndexObject: AlgoliaMetadataRecord = {
        objectID: body.sys.id,
        sys: {
          id: body.sys.id,
        },
        // TODO: add logic that updates this value for any page details updates in
        // src/routes/api/v1/search-index/+server.ts
        url: serviceEntry?.url,
      };

      for (const field in body.fields) {
        // The webhook body unfortunately prefaces each field with a sub-property equal to
        // the locale value, so we need to flatten that first.
        const englishValue = body.fields[field]["en-US"];

        switch (field) {
          case "entryTitle":
            algoliaIndexObject.metaTitle = englishValue;
            break;
          case "description":
            algoliaIndexObject.metaDescription = documentToPlainTextString(englishValue);
            break;
          default:
            // We only care about a few possible fields to send to Algolia.
            // Ignore the rest.
            break;
        }
      }

      return json(algoliaIndexObject);

      /**
       * `partialUpdateObject` only creates or updates attributes included in the call. Any preexisting
       * properties on the record that are not in the call are unaffected.
       * Docs: https://www.algolia.com/doc/api-reference/api-methods/partial-update-objects/#about-this-method
       * - If the objectID exists, Algolia replaces the attributes
       * - If the objectID is specified but doesn’t exist, Algolia creates a new record
       * - If the objectID isn’t specified, the method returns an error
       */
      const response = await index.partialUpdateObject(serviceEntry, {
        createIfNotExists: true,
      });
      return json(response);
    }

    const deleteActions = [CONTENTFUL_ACTIONS.UNPUBLISH, CONTENTFUL_ACTIONS.DELETE];
    if (deleteActions.includes(contentfulAction) && contentTypes.includes(contentType)) {
      const response = await index.deleteObject(body.sys.id);
      return json(response);
    }

    // Fall-through response if the request body doesn't result in any Algolia updates.
    return json("No action taken on the supplied request body.");
  } catch (message) {
    throw error(400, message as string);
  }
};

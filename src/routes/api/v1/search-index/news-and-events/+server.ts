import { json, error } from "@sveltejs/kit";
import algoliasearch from "algoliasearch";
import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_INDEX } from "$env/static/public";
import { ALGOLIA_API_KEY } from "$env/static/private";
import { authenticateRequest } from "$lib/services/server";
import type { AlgoliaMetadataRecord } from "../types";
import { format, parseISO } from "date-fns";

const algoliaClient = algoliasearch(PUBLIC_ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = algoliaClient.initIndex(PUBLIC_ALGOLIA_INDEX);

const CONTENTFUL_ACTIONS = {
  PUBLISH: "ContentManagement.Entry.publish",
  UNPUBLISH: "ContentManagement.Entry.unpublish",
  DELETE: "ContentManagement.Entry.delete",
};

const addNewsMetadata = (algoliaIndexObject: AlgoliaMetadataRecord) => {
  // Add some sensible defaults in if metaTitle and metaDescription are undefined.
  // `title` is required in Contentful, so that's an easy
  if (algoliaIndexObject.metaTitle === undefined) {
    algoliaIndexObject.metaTitle = algoliaIndexObject.title;
  }

  if (algoliaIndexObject.metaDescription === undefined) {
    const { subhead, type, publicationDate } = algoliaIndexObject;

    if (subhead) {
      algoliaIndexObject.metaDescription = subhead;
    } else if (publicationDate) {
      const date = parseISO(publicationDate);
      algoliaIndexObject.metaDescription = `${type} published on ${format(date, "MMMM d, yyyy")}`;
    }
  }
};

const addEventMetadata = (algoliaIndexObject: AlgoliaMetadataRecord) => {
  if (algoliaIndexObject.metaTitle === undefined) {
    algoliaIndexObject.metaTitle = algoliaIndexObject.shortTitle;
  }

  if (algoliaIndexObject.metaDescription === undefined) {
    const { eventSummary, eventDateAndTime } = algoliaIndexObject;
    if (eventSummary) {
      algoliaIndexObject.metaDescription = eventSummary;
    } else if (eventDateAndTime) {
      const date = parseISO(eventDateAndTime);
      algoliaIndexObject.metaDescription = `Event on ${format(date, "MMMM d, yyyy")}`;
    }
  }
};

export const POST = async ({ request }) => {
  authenticateRequest(request);

  const contentfulAction = request.headers.get("x-contentful-topic") || "";
  const body = await request.json();
  const contentType = body?.sys?.contentType?.sys?.id;
  const contentTypes = ["news", "eventEntry"];

  try {
    if (contentfulAction === CONTENTFUL_ACTIONS.PUBLISH && contentTypes.includes(contentType)) {
      const algoliaIndexObject: AlgoliaMetadataRecord = {
        objectID: body.sys.id,
        sys: {
          id: body.sys.id,
        },
        entryType: contentType === "news" ? "News" : "Event",
      };

      for (const field in body.fields) {
        // The webhook body unfortunately prefaces each field with a sub-property equal to
        // the locale value, so we need to flatten that first.
        const englishValue = body.fields[field]["en-US"];

        // The `body` property is bunch of rich text noise, so omit it
        if (field === "body") continue;

        algoliaIndexObject[field] = englishValue;
      }

      if (contentType === "news") {
        addNewsMetadata(algoliaIndexObject);
      }

      if (contentType === "eventEntry") {
        addEventMetadata(algoliaIndexObject);
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
      const response = await index.partialUpdateObject(algoliaIndexObject, {
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

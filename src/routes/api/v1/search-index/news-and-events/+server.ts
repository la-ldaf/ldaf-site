import gql from "graphql-tag";
import { json, error } from "@sveltejs/kit";
import { print as printQuery } from "graphql";

import algoliasearch from "algoliasearch";
import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_INDEX } from "$env/static/public";
import { ALGOLIA_API_KEY } from "$env/static/private";
import { ContentfulClient } from "$lib/services/server/contentful";

import { eventIANATimezone } from "$lib/constants/date";
import { getDateSixMonthsAgoInTZ, getDateTwelveMonthsAgoInTZ, getStartOfDayForDateInTZ } from "$lib/util/dates";
// import { NewsCollectionQuery } from "$lib/$queries.generated";
// import { NewsCollectionQuery } from "./$queries.generated";
// import { authenticateRequest } from "$lib/services/server";
// import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";

const algoliaClient = algoliasearch(PUBLIC_ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = algoliaClient.initIndex(PUBLIC_ALGOLIA_INDEX);

const CONTENTFUL_ACTIONS = {
  PUBLISH: "ContentManagement.Entry.publish",
  // UNPUBLISH: "ContentManagement.Entry.unpublish",
  // DELETE: "ContentManagement.Entry.delete",
};

const queryNewsAndEvents =  gql`
  query newsCollection($newsOldestDate: DateTime!, $eventStartDate: DateTime!) {
    newsCollection(
      where: { 
        AND: [
          { publicationDate_gte: $newsOldestDate }
          { indexInSearch: true }
        ]
      }
      order: [publicationDate_DESC]
    ) {
      items {
        sys {
          id
        }
        type
        title
        subhead
        publicationDate
        slug
        byline
      }
    }
    eventEntryCollection(
      where: {
        AND: [
          { eventDateAndTime_gte: $eventStartDate }
          { indexInSearch: true }
        ]
      }
      order: [eventDateAndTime_ASC]
    ) {
      items {
        sys {
          id
        }
        slug
        shortTitle
        eventDescription
        eventDateAndTime
      }
    }
  }
`;

// generated query types are not returning
type NewsAndEventsCollectionQuery = {
  newsCollection: {
    items: {
      sys: { id: string };
      __typename?: "News";
      title?: string | null;
      publicationDate?: string | null;
      slug?: string | null;
    }[]
  }
  eventEntryCollection: {
    items: {
      sys: {
        id: string
      }
      __typename?: "News";
      title?: string | null;
      slug?: string | null;
      eventDateAndTime?: string | null;
      eventDescription?: string | null;
    }[]
  }
}

type AlgoliaMetadataRecord = {
  objectID: string;
  sys: { id: string };
  url?: string | null | undefined;
  children?: string[];
  parent?: {
    sys: {
      id: string;
      linkType?: string;
      type?: string;
    };
  };
  // Unfortunately, we can't know what all of what will exist in the the `fields`
  // property from Contentful (especially once we're adding Service Entries),
  // so we have to allow for some dynamic flexibility here
  [key: string]: string | null | undefined | object;
};

export type MetadataMapItem = {
  sys: { id: string };
  __typename?: "News" | "EventEntry";
  title?: string | null;
  slug?: string | null;
  children?: string[];
  url?: string;
  parent?: {
    sys: {
      id: string;
      linkType?: string;
      type?: string;
    }
  } | null;
  [key: string]: string | null | undefined | object;
}
// TODO: remove
const constructEventSlug = (date: Date, slug: string): string =>
  `${date.toISOString().split("T")[0]}-${slug}`;

const loadContentMap = async ({contentfulClient}: {contentfulClient?: ContentfulClient;}) => {

  if (!contentfulClient) return;

  const entryMap: Map<string, MetadataMapItem> = new Map();

  const newsOldestDate = getStartOfDayForDateInTZ(
    getDateTwelveMonthsAgoInTZ(eventIANATimezone),
    eventIANATimezone,
  );  
  const eventStartDate = getStartOfDayForDateInTZ(
    getDateSixMonthsAgoInTZ(eventIANATimezone),
    eventIANATimezone,
  );

  const data = await contentfulClient.fetch<NewsAndEventsCollectionQuery>(
    printQuery(
      queryNewsAndEvents,
    ),
    {
      variables: { newsOldestDate, eventStartDate },
    }
  );

  if (data?.newsCollection?.items && data?.newsCollection?.items.length > 0) {
    const allNewsMetadata = data.newsCollection.items;
    allNewsMetadata.forEach(item => {
      if (!item) return;
      const url = "about/news/article/" + item.slug;
      entryMap.set(item.sys.id, {...item, url})
    });
  }
  if (data?.eventEntryCollection?.items && data?.eventEntryCollection?.items.length > 0) {
    const allEventMetadata = data.eventEntryCollection.items;

    allEventMetadata.forEach(item => {
      if (!item) return;
      // if event date has changed, the URL should update as well
      const url = constructEventSlug(new Date(item.eventDateAndTime), item.slug);
      entryMap.set(item.sys.id, {...item, url})
    });
  }

  return entryMap;
}

export const POST = async ({ request, locals: { contentfulClient } }) => {

  const body = await request.json();
  const contentType = body?.sys?.contentType?.sys?.id;
  const entriesMap = await loadContentMap({contentfulClient})
  const contentfulAction = request.headers.get("x-contentful-topic") || "";
  const contentTypes = ["news", "eventEntry"];
  
  try {
    if (entriesMap) {
      if (contentfulAction === CONTENTFUL_ACTIONS.PUBLISH && contentTypes.includes(contentType)) {
        const contentfulValue = entriesMap.get(body.sys.id) || { url: "", children: [] };
        // The webhook body is missing `children` and `url`, since we
        // construct those in `loadPageMetadataMap`. Add those properties here.
        const transformedFields: AlgoliaMetadataRecord = {
          objectID: body.sys.id,
          sys: {
            id: body.sys.id,
          },
          url: contentfulValue?.url,
        };

        for (const field in body.fields) {
          // The webhook body unfortunately prefaces each field with a sub-property equal to
          // the locale value, so we need to flatten that first.
          const englishValue = body.fields[field]["en-US"];
          transformedFields[field] = englishValue;
        }

        /**
         * `partialUpdateObject` only creates or updates attributes included in the call. Any preexisting
         * properties on the record that are not in the call are unaffected.
         * Docs: https://www.algolia.com/doc/api-reference/api-methods/partial-update-objects/#about-this-method
         * - If the objectID exists, Algolia replaces the attributes
         * - If the objectID is specified but doesn’t exist, Algolia creates a new record
         * - If the objectID isn’t specified, the method returns an error
         */
        const response = await index.partialUpdateObject(transformedFields, {
          createIfNotExists: true,
        });
        return json(response);
      }
    }
    return json("No action taken on the supplied request body.");
  } catch (message) {
    throw error(400, message as string);
  }
}


/**
 * Generic GET request for simple generation of values
 * TODO: add content type delimiters 
 */
export const GET = async ({ locals: { contentfulClient } }) => {

  const entriesMap = await loadContentMap({contentfulClient})
  let data: AlgoliaMetadataRecord[] = [];
  


  const transformedFieldsMap: Map<string, AlgoliaMetadataRecord> = new Map();
  if (entriesMap) {
    [...entriesMap].forEach(([_, page]) => {
        const transformedFields:AlgoliaMetadataRecord = {
          objectID: page.sys.id,
          ...page
        }
        transformedFieldsMap.set(page.sys.id, transformedFields)
      
    });
  }
  data = Array.from(transformedFieldsMap.values());

  return json(data)
}

import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";
import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";

import type { TaggedPagesQuery } from "./$queries.generated";

const query = gql`
  query TaggedPages {
    pageMetadataCollection(
      where: { contentfulMetadata: { tags: { id_contains_some: "licensingAndPermits" } } }
      order: [title_ASC]
    ) {
      items {
        sys {
          id
        }
        title
      }
    }
  }
`;

export const load = async ({ parent }) => {
  const { pageMetadataMap, pathsToIDs } = await parent();
  fetchData: {
    const metadataID = pathsToIDs.get(`/licensing-permits`);
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const data = await client.fetch<TaggedPagesQuery>(printQuery(query));
    if (!data?.pageMetadataCollection?.items) break fetchData;
    const taggedPages = data.pageMetadataCollection.items.map((taggedPage) => {
      if (taggedPage?.sys.id) {
        return pageMetadataMap.get(taggedPage?.sys.id);
      }
    });

    return {
      aggregationPage: {},
      pageMetadata,
      taggedPages,
    };
  }
  throw error(404);
};

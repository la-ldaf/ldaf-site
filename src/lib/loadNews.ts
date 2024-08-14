import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import type { ContentfulClient } from "$lib/services/server/contentful";
import type { NewsCollectionQuery } from "./$queries.generated";

type NewsItem = NonNullable<NewsCollectionQuery["newsCollection"]>["items"][number];

const query = gql`
  query NewsCollection($preview: Boolean = false) {
    newsCollection(limit: 500, order: [publicationDate_DESC], preview: $preview) {
      items {
        title
        publicationDate
        slug
      }
    }
  }
`;

export const loadNews = async ({
  contentfulClient,
}: {
  contentfulClient?: ContentfulClient;
}): Promise<Array<NewsItem>> => {
  let newsItems: Array<NewsItem> = [];
  if (!contentfulClient) return newsItems;
  const data = await contentfulClient.fetch<NewsCollectionQuery>(printQuery(query));
  if (data?.newsCollection?.items) {
    newsItems = data.newsCollection.items;
    console.log(newsItems);
  }
  return newsItems;
};

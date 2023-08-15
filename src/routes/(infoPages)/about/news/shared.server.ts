import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import type { NewsArticlesQuery } from "./$queries.generated";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./page/[page]/$types";
import type { Breadcrumbs } from "$lib/components/Breadcrumbs";
import {
  newsArticles as testNewsArticles,
  pages as testNewsArticlePages,
} from "./__tests__/newsTestContent";

const limit = 20;

// TODO: filter to only future events. this will require thinking about timezones
export const query = gql`
  query NewsArticles($limit: Int = 20, $skip: Int = 0) {
    newsArticleCollection(limit: $limit, skip: $skip) {
      total
      items {
        sys {
          id
        }
        newsArticleTitle
        newsArticleSubhead
      }
    }
  }
`;

export const loadBaseBreadcrumbs = async ({
  parent,
}: Pick<Parameters<PageServerLoad>[0], "parent">): Promise<Breadcrumbs> => {
  const { pageMetadataMap, pathsToIDs } = await parent();
  const aboutPageMetadataID = pathsToIDs.get("/about");
  if (!aboutPageMetadataID) return [];
  const { breadcrumbs } = pageMetadataMap.get(aboutPageMetadataID) ?? {};
  return [...(breadcrumbs ?? []), { title: "News", link: "/about/news" }];
};

export const loadNewsPage = async ({
  parent,
  params: { page },
}: Pick<Parameters<PageServerLoad>[0], "params" | "parent">) => {
  fetchData: {
    const pageNumber = parseInt(page);
    if (isNaN(pageNumber)) break fetchData;
    const breadcrumbsPromise = loadBaseBreadcrumbs({ parent }).then((baseBreadcrumbs) => [
      ...baseBreadcrumbs,
      ...(pageNumber > 1
        ? [{ title: `Page ${pageNumber}`, link: `/about/news/page/${pageNumber}` }]
        : []),
    ]);
    if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) {
      return {
        currentPageNumber: pageNumber,
        totalPages: Math.ceil(testNewsArticles.length / limit),
        newsArticles: testNewsArticlePages[pageNumber - 1].items,
        totalNewsArticles: testNewsArticles.length,
        breadcrumbs: breadcrumbsPromise,
      };
    }
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const newsData = await client.fetch<NewsArticlesQuery>(printQuery(query), {
      variables: {
        limit,
        skip: limit * Math.max(pageNumber - 1, 0),
      },
    });
    if (
      !newsData?.newsArticleCollection?.items ||
      newsData?.newsArticleCollection?.items?.length === 0
    ) {
      break fetchData;
    }
    return {
      pageMetadata: {
        metaTitle: pageNumber <= 1 ? "News" : `News - page ${pageNumber}`,
        breadcrumbs: await breadcrumbsPromise,
      },
      currentPageNumber: pageNumber,
      totalPages: Math.ceil(newsData.newsArticleCollection.total / limit),
      newsArticles: newsData.newsArticleCollection.items,
      totalNewsArticles: newsData.newsArticleCollection.total,
    };
  }
  throw error(404);
};

import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import type { NewsEntriesQuery } from "./$queries.generated";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./page/[page]/$types";
import type { Breadcrumbs } from "$lib/components/Breadcrumbs";
import {
  newsEntries as testNewsEntries,
  pages as testNewsEntryPages,
} from "./__tests__/newsTestContent";

const newsBasePath = "/about/news";
const limit = 10;

export const query = gql`
  # eslint-disable @graphql-eslint/selection-set-depth
  query NewsEntries($limit: Int = 10, $skip: Int = 0) {
    newsCollection(limit: $limit, skip: $skip, order: [publicationDate_DESC]) {
      total
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
  }
`;

export const loadBaseBreadcrumbs = async ({
  parent,
}: Pick<Parameters<PageServerLoad>[0], "parent">): Promise<Breadcrumbs> => {
  const { pageMetadataMap, pathsToIDs } = await parent();
  const aboutPageMetadataID = pathsToIDs.get("/about");
  if (!aboutPageMetadataID) return [];
  const { breadcrumbs } = pageMetadataMap.get(aboutPageMetadataID) ?? {};
  return [...(breadcrumbs ?? []), { title: "News", link: newsBasePath }];
};

export const loadNewsPage = async ({
  parent,
  params: { page },
  locals: { contentfulClient },
}: Pick<Parameters<PageServerLoad>[0], "params" | "parent" | "locals">) => {
  fetchData: {
    const pageNumber = parseInt(page);
    if (isNaN(pageNumber)) break fetchData;
    const breadcrumbsPromise = loadBaseBreadcrumbs({ parent }).then((baseBreadcrumbs) => [
      ...baseBreadcrumbs,
      ...(pageNumber > 1
        ? [{ title: `Page ${pageNumber}`, link: `${newsBasePath}/page/${pageNumber}` }]
        : []),
    ]);
    if (!contentfulClient) {
      return {
        currentPageNumber: pageNumber,
        totalPages: Math.ceil(testNewsEntries.length / limit),
        newsEntries: testNewsEntryPages[pageNumber - 1].items,
        breadcrumbs: breadcrumbsPromise,
      };
    }
    const { pageMetadataMap, pathsToIDs } = await parent();
    const pageMetadataID = pathsToIDs.get(newsBasePath);
    if (!pageMetadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(pageMetadataID);
    if (!pageMetadata) break fetchData;
    const newsData = await contentfulClient.fetch<NewsEntriesQuery>(printQuery(query), {
      variables: {
        limit,
        skip: limit * Math.max(pageNumber - 1, 0),
      },
    });
    if (!newsData?.newsCollection?.items || newsData?.newsCollection?.items?.length === 0) {
      break fetchData;
    }
    return {
      pageMetadata: {
        ...pageMetadata,
        metaTitle:
          pageNumber <= 1
            ? pageMetadata.metaTitle
            : `${pageMetadata.metaTitle} - page ${pageNumber}`,
        url: pageNumber <= 1 ? newsBasePath : `${newsBasePath}/page/${pageNumber}`,
        breadcrumbs: await breadcrumbsPromise,
      },
      currentPageNumber: pageNumber,
      totalPages: Math.ceil(newsData.newsCollection.total / limit),
      newsEntries: newsData.newsCollection.items,
    };
  }
  throw error(404);
};

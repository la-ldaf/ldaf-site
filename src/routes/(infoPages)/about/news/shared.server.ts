import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
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
import imagePropsFragment from "$lib/fragments/imageProps";
import entryPropsFragment from "$lib/fragments/entryProps";

const limit = 10;

export const query = gql`
  # eslint-disable @graphql-eslint/selection-set-depth
  ${imagePropsFragment}
  ${entryPropsFragment}
  query NewsEntries($limit: Int = 10, $skip: Int = 0) {
    newsCollection(limit: $limit, skip: $skip, order: [publicationDate_DESC]) {
      total
      items {
        sys {
          id
        }
        type
        title
        publicationDate
        body {
          json
          links {
            assets {
              block {
                ...ImageProps
              }
              hyperlink {
                ...ImageProps
              }
            }
            entries {
              block {
                ...EntryProps
              }
              hyperlink {
                ...EntryProps
              }
            }
          }
        }
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
        totalPages: Math.ceil(testNewsEntries.length / limit),
        newsEntries: testNewsEntryPages[pageNumber - 1].items,
        totalNewsEntries: testNewsEntries.length,
        breadcrumbs: breadcrumbsPromise,
      };
    }
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const newsData = await client.fetch<NewsEntriesQuery>(printQuery(query), {
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
        metaTitle: pageNumber <= 1 ? "News" : `News - page ${pageNumber}`,
        breadcrumbs: await breadcrumbsPromise,
      },
      currentPageNumber: pageNumber,
      totalPages: Math.ceil(newsData.newsCollection.total / limit),
      newsEntries: newsData.newsCollection.items,
      totalNewsEntries: newsData.newsCollection.total,
    };
  }
  throw error(404);
};

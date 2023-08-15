import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { CONTENTFUL_DELIVERY_API_TOKEN, CONTENTFUL_SPACE_ID } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import type { PageServerLoad } from "./$types";
import type { NewsArticleQuery } from "./$queries.generated";
import { loadBaseBreadcrumbs } from "../../shared.server";

const query = gql`
  query NewsArticle($slug: String!) {
    newsArticleCollection(limit: 1, where: { slug: $slug }) {
      items {
        sys {
          id
        }
        slug
        newsArticleTitle
        newsArticleSubhead
      }
    }
  }
`;

export const load = (async ({ params: { slug }, parent }) => {
  if (!slug) throw error(404);
  // TODO: example contents
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) throw error(404);
  const baseBreadcrumbsPromise = loadBaseBreadcrumbs({ parent });
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
  });
  const variables = {
    slug,
  };
  const newsArticleDataPromise = client.fetch<NewsArticleQuery>(printQuery(query), {
    variables,
  });
  const [baseBreadcrumbs, newsArticleData] = await Promise.all([
    baseBreadcrumbsPromise,
    newsArticleDataPromise,
  ]);
  const [newsArticle] = newsArticleData?.newsArticleCollection?.items ?? [];
  if (!newsArticle) throw error(404);
  return {
    newsArticle,
    pageMetadata: {
      metaTitle: `News - ${newsArticle.newsArticleTitle}`,
      breadcrumbs: [
        ...baseBreadcrumbs,
        { title: newsArticle.newsArticleTitle, link: `/about/news/article/${slug}` },
      ],
    },
  };
}) satisfies PageServerLoad;

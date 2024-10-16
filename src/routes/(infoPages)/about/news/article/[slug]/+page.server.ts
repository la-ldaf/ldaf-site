import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { getBlurhash } from "$lib/services/blurhashes";
import type { PageServerLoad } from "./$types";
import type { DefaultPressReleaseContactInfoQuery, NewsQuery } from "./$queries.generated";
import { loadBaseBreadcrumbs } from "../../shared.server";
import assetPropsFragment from "$lib/fragments/assetProps";
import entryPropsFragment from "$lib/fragments/entryProps";

const newsQuery = gql`
  # eslint-disable @graphql-eslint/selection-set-depth
  ${assetPropsFragment}
  ${entryPropsFragment}
  query News($slug: String!, $preview: Boolean = false) {
    newsCollection(limit: 1, where: { slug: $slug }, preview: $preview) {
      items {
        sys {
          id
        }
        type
        title
        subhead
        publicationDate
        heroImage {
          ... on HeroImage {
            imageSource {
              ... on Asset {
                title
                description
                contentType
                fileName
                size
                url
                width
                height
              }
            }
            imageTitle
            altField
            fotogCredit
          }
        }
        body {
          json
          links {
            assets {
              block {
                ...AssetProps
              }
              hyperlink {
                ...AssetProps
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
        metaTitle
        metaDescription
        byline
        contactInformationCollection {
          items {
            ... on Contact {
              sys {
                id
              }
              entityName
              phone
              email
            }
          }
        }
        relatedLinks {
          json
          links {
            assets {
              block {
                ...AssetProps
              }
              hyperlink {
                ...AssetProps
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
        relatedEventsCollection {
          items {
            ...EntryProps
          }
        }
        relatedNewsCollection {
          items {
            ...EntryProps
          }
        }
      }
    }
  }
`;

// TODO: Find a better way to grab the default press release contact
const defaultPressReleaseContactInfoQuery = gql`
  query DefaultPressReleaseContactInfo($preview: Boolean = false) {
    contact(id: "6lhNJaZ05vgqkoRSF2wNM8", preview: $preview) {
      sys {
        id
      }
      entityName
      phone
      email
    }
  }
`;

export const load = (async ({ params: { slug }, locals: { contentfulClient }, parent, fetch }) => {
  if (!slug) throw error(404);
  // TODO: example contents
  if (!contentfulClient) throw error(404);
  const baseBreadcrumbsPromise = loadBaseBreadcrumbs({ parent });
  const variables = {
    slug,
  };
  const newsArticleDataPromise = contentfulClient.fetch<NewsQuery>(printQuery(newsQuery), {
    variables,
  });
  const [baseBreadcrumbs, newsArticleData] = await Promise.all([
    baseBreadcrumbsPromise,
    newsArticleDataPromise,
  ]);
  const [newsArticle] = newsArticleData?.newsCollection?.items ?? [];
  if (!newsArticle) throw error(404);

  let defaultPressReleaseContactInfoPromise: Promise<
    DefaultPressReleaseContactInfoQuery | undefined
  > = Promise.resolve(undefined);
  // Fetch the default press release contact info for press releases if other contacts aren't provided
  if (
    newsArticle.type === "Press release" &&
    !newsArticle.contactInformationCollection?.items?.length
  ) {
    defaultPressReleaseContactInfoPromise =
      contentfulClient.fetch<DefaultPressReleaseContactInfoQuery>(
        printQuery(defaultPressReleaseContactInfoQuery),
      );
  }

  const heroImageURL = newsArticle.heroImage?.imageSource?.url;
  const heroImageBlurhashPromise = heroImageURL
    ? getBlurhash(heroImageURL, { fetch })
    : Promise.resolve(undefined);

  const [defaultPressReleaseContactInfo, heroImageBlurhash] = await Promise.all([
    defaultPressReleaseContactInfoPromise,
    heroImageBlurhashPromise,
  ]);

  const url = `/about/news/article/${slug}`;

  return {
    newsArticle: {
      ...newsArticle,
      contactInformationCollection: defaultPressReleaseContactInfo?.contact
        ? { items: [defaultPressReleaseContactInfo.contact] }
        : newsArticle.contactInformationCollection,
      heroImage: newsArticle.heroImage
        ? {
            ...newsArticle.heroImage,
            imageSource: newsArticle.heroImage.imageSource
              ? {
                  ...newsArticle.heroImage.imageSource,
                  blurhash: heroImageBlurhash,
                }
              : undefined,
          }
        : undefined,
    },
    pageMetadata: {
      metaTitle: `${newsArticle.type} - ${newsArticle.metaTitle || newsArticle.title}`,
      metaDescription: newsArticle.metaDescription,
      url,
      breadcrumbs: [...baseBreadcrumbs, { title: newsArticle.title, link: url }],
    },
  };
}) satisfies PageServerLoad;

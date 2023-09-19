import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";
import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import { getBlurhash } from "$lib/services/blurhashes";
import { getYoutubeVideoDataWithBlurhash } from "$lib/services/server/youtube";
import getYoutubeVideoIDFromURL from "$lib/util/getYoutubeVideoIDFromURL";
import { eventIANATimezone } from "$lib/constants/date";
import {
  getCurrentDateInTZ,
  getDateSixMonthsAgoInTZ,
  getStartOfDayForDateInTZ,
} from "$lib/util/dates";

import type { TaggedNewsAndEventsQuery, TopTierCollectionQuery } from "./$queries.generated";

const query = gql`
  query TopTierCollection($metadataID: String!) {
    topTierCollection(where: { pageMetadata: { sys: { id: $metadataID } } }, limit: 1) {
      items {
        __typename
        title
        subheading
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
        video {
          ... on VideoWrapper {
            videoTitle
            videoSubhead
            videoUrl
          }
        }
        description {
          json
        }
        featuredServiceListCollection {
          items {
            ... on ServiceGroup {
              title
              subheading
              heroImage {
                ... on HeroImage {
                  imageSource {
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
              }
              pageMetadata {
                ... on PageMetadata {
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
        pageMetadata {
          ... on PageMetadata {
            sys {
              id
            }
            slug
          }
        }
      }
    }
  }
`;

// TODO: Create fragment for News and Events snippets.
const taggedNewsAndEventsQuery = gql`
  query TaggedNewsAndEvents($tag: String!, $newsOldestDate: DateTime!, $eventStartDate: DateTime!) {
    newsCollection(
      where: {
        AND: [
          { contentfulMetadata: { tags: { id_contains_some: [$tag] } } }
          { publicationDate_gte: $newsOldestDate }
        ]
      }
      order: [publicationDate_DESC]
      limit: 5
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
          { contentfulMetadata: { tags: { id_contains_some: [$tag] } } }
          { eventDateAndTime_gte: $eventStartDate }
        ]
      }
      order: [eventDateAndTime_ASC]
      limit: 5
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

export const load = async ({
  parent,
  params: { topTierPage: slug },
  fetch,
  locals: { getKVClient },
}) => {
  const { pageMetadataMap, pathsToIDs } = await parent();
  fetchData: {
    const metadataID = pathsToIDs.get(`/${slug}`);
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const data = await client.fetch<TopTierCollectionQuery>(printQuery(query), {
      variables: { metadataID },
    });
    if (!data) break fetchData;

    const [matchedTopTier] = data?.topTierCollection?.items ?? [];
    if (!matchedTopTier) break fetchData;

    const heroImageURL = matchedTopTier.heroImage?.imageSource?.url;
    const heroImageBlurhashPromise = heroImageURL
      ? getBlurhash(heroImageURL, { fetch })
      : Promise.resolve(undefined);

    // Get the URLs for these features from the pageMetadataMap
    const featuredServicesPromises =
      matchedTopTier.featuredServiceListCollection?.items.map(async (featuredItem) => {
        if (!featuredItem) return [];
        const featuredItemMetadata = pageMetadataMap.get(featuredItem?.pageMetadata?.sys.id || "");
        const heroImageURL = featuredItem?.heroImage?.imageSource?.url;
        const heroImageBlurhash = heroImageURL && (await getBlurhash(heroImageURL, { fetch }));
        return [
          {
            ...featuredItem,
            url: featuredItemMetadata?.url,
            heroImage: featuredItem.heroImage
              ? {
                  ...featuredItem.heroImage,
                  imageSource: featuredItem.heroImage.imageSource
                    ? {
                        ...featuredItem.heroImage.imageSource,
                        blurhash: heroImageBlurhash,
                      }
                    : undefined,
                }
              : undefined,
          },
        ];
      }) ?? [];

    const youtubeVideoID =
      matchedTopTier.video?.videoUrl && getYoutubeVideoIDFromURL(matchedTopTier.video.videoUrl);
    const youtubeVideoDataPromise = youtubeVideoID
      ? getKVClient().then((kvClient) =>
          getYoutubeVideoDataWithBlurhash(youtubeVideoID, { fetch, kvClient }),
        )
      : undefined;

    // Get related news and events based on the "subject" tag.
    // There is a tag that corresponds to each top tier, based on the slug.
    const tag = `subject-${slug}`;
    const newsOldestDate = getStartOfDayForDateInTZ(
      getDateSixMonthsAgoInTZ(eventIANATimezone),
      eventIANATimezone,
    );
    const eventStartDate = getStartOfDayForDateInTZ(
      getCurrentDateInTZ(eventIANATimezone),
      eventIANATimezone,
    );
    const taggedDataPromise = await client.fetch<TaggedNewsAndEventsQuery>(
      printQuery(taggedNewsAndEventsQuery),
      {
        variables: { tag, newsOldestDate, eventStartDate },
      },
    );

    const [heroImageBlurhash, featuredServices, youtubeVideoData, taggedData] = await Promise.all([
      heroImageBlurhashPromise,
      Promise.all(featuredServicesPromises).then((arr) => arr.flat()),
      youtubeVideoDataPromise,
      taggedDataPromise,
    ]);

    if (!taggedData) break fetchData;

    return {
      __typename: matchedTopTier.__typename,
      topTierPage: {
        ...matchedTopTier,
        featuredServices,
        video: {
          ...matchedTopTier.video,
          youtubeVideoData,
        },
        heroImage: matchedTopTier.heroImage
          ? {
              ...matchedTopTier.heroImage,
              imageSource: matchedTopTier.heroImage.imageSource
                ? {
                    ...matchedTopTier.heroImage.imageSource,
                    blurhash: heroImageBlurhash,
                  }
                : undefined,
            }
          : undefined,
        relatedNews: taggedData.newsCollection,
        relatedEvents: taggedData.eventEntryCollection,
      },
      pageMetadata,
    };
  }
  throw error(404);
};

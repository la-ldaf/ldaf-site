import gql from "graphql-tag";
import type { PageMetadataMap } from "$lib/loadPageMetadataMap";
import mainNavTestContent from "./__tests__/mainNavTestContent";
import secondaryNavTestContent from "./__tests__/secondaryNavTestContent";

import type { HeaderMainMenuQuery } from "./$queries.generated";
import type { NavMenuType } from "./types";

const headerMainMenuQuery = gql`
  query HeaderMainMenu($preview: Boolean = false) {
    menuCollection(limit: 1, where: { menuType: "Header Main Menu" }, preview: $preview) {
      items {
        childrenCollection(limit: 10) {
          items {
            ... on TopTier {
              __typename
              sys {
                id
              }
              pageMetadata {
                ... on PageMetadata {
                  sys {
                    id
                  }
                }
              }
              featuredServiceListCollection(limit: 7) {
                items {
                  ... on ServiceGroup {
                    sys {
                      id
                    }
                    pageMetadata {
                      ... on PageMetadata {
                        sys {
                          # eslint-disable-next-line @graphql-eslint/selection-set-depth
                          id
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const loadMainNav = async ({
  pageMetadataMap,
  contentfulClient,
  logger,
}: {
  pageMetadataMap: PageMetadataMap;
  contentfulClient: App.Locals["contentfulClient"];
  logger: App.Locals["logger"];
}): Promise<NavMenuType[]> => {
  if (!contentfulClient) return mainNavTestContent;
  const data = await contentfulClient.fetch<HeaderMainMenuQuery>(headerMainMenuQuery);
  const [mainMenu] = data?.menuCollection?.items ?? [];
  if (!mainMenu) {
    logger.logError(new Error("no menu data was found"));
    return mainNavTestContent;
  }

  if (!mainMenu?.childrenCollection?.items) {
    logger.logError(new Error("menu contained no items"));
  }

  const logPromises: Promise<void>[] = [];
  const log = (msg: string) => logPromises.push(logger.logError(new Error(msg)));

  const mainMenuItems =
    mainMenu?.childrenCollection?.items.flatMap((topTier) => {
      if (topTier?.__typename !== "TopTier") {
        log(`menu data contained a ${topTier?.__typename} when it expected TopTier`);
        return [];
      }
      const topTierMetadataID = topTier.pageMetadata?.sys?.id;
      if (!topTierMetadataID) {
        log(`top tier item ${topTier?.sys?.id} in menu data had no metadata ID`);
        return [];
      }
      const topTierMetadata = pageMetadataMap.get(topTierMetadataID);
      if (!topTierMetadata) {
        log(
          `top tier item ${topTier?.sys?.id} with the metadata ID ${topTierMetadataID} was missing in page metadata map`
        );
        return [];
      }

      if (!topTierMetadata?.title || !topTierMetadata?.url) {
        log(
          `top tier item ${topTier?.sys?.id} with the metadata ID ${topTierMetadataID} was missing a title or url in its metadata`
        );
        return [];
      }

      const firstMenuItem = {
        id: topTierMetadataID,
        name: `View ${topTierMetadata.title}`,
        link: topTierMetadata.url,
      };

      const featuredServiceGroupMenuItems =
        topTier.featuredServiceListCollection?.items?.flatMap((group) => {
          const metadataID = group?.pageMetadata?.sys?.id;
          if (!metadataID) {
            log(
              `featured service group ${
                topTier?.sys?.id ?? "(unknown id)"
              } was missing a metadata ID`
            );
            return [];
          }
          const metadata = pageMetadataMap.get(metadataID);
          if (!metadata) {
            log(
              `featured service group ${
                topTier?.sys?.id ?? "(unknown id)"
              } with the metadata ID ${metadataID} was missing in page metadata map`
            );
            return [];
          }
          const { sys, title: name, url: link } = metadata;
          if (!sys?.id || !name || !link) {
            log(
              `featured service group ${
                topTier?.sys?.id ?? "(unknown id)"
              } with the metadata ID ${metadataID} was missing an ID, name, or link in its metadata`
            );
            return [];
          }
          return [{ id: sys.id, name, link }];
        }) ?? [];

      const usedMetadataIDSet = new Set([
        firstMenuItem.id,
        ...featuredServiceGroupMenuItems.map(({ id }) => id),
      ]);

      const secondTierMenuItems = (
        topTierMetadata?.children?.flatMap((metadataID) => {
          if (usedMetadataIDSet.has(metadataID)) return [];
          const metadata = pageMetadataMap.get(metadataID);
          if (!metadata) {
            log(
              `second tier menu item with the metadata ID ${metadataID} was missing in page metadata map`
            );
            return [];
          }
          const { sys, title: name, url: link } = metadata;
          if (!sys?.id || !name || !link) {
            log(
              `second tier menu item with the metadata ID ${metadataID} was missing its id, title, or url in the page metadata map`
            );
            return [];
          }
          usedMetadataIDSet.add(metadataID);
          return [{ id: sys.id, name, link }];
        }) ?? []
      ).sort(({ name: a }, { name: b }) => (a && b ? a.localeCompare(b) : -1));

      const menu = {
        id: topTierMetadataID,
        name: topTierMetadata.title,
        children: [firstMenuItem, ...featuredServiceGroupMenuItems, ...secondTierMenuItems],
      } satisfies NavMenuType;

      return [menu];
    }) ?? [];

  await Promise.all(logPromises);

  return mainMenuItems;
};

// TODO: Fetch from Contentful
export const loadSecondaryNav = () => secondaryNavTestContent;

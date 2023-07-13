import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import mainNavTestContent from "./__tests__/MainNavTestContent";
import secondaryNavTestContent from "./__tests__/SecondaryNavTestContent";

import type { HeaderMainMenuQuery } from "./$queries.generated";
import type { NavLinkType, NavMenuType } from "./types";
import type { PageMetadataMap } from "../../../../routes/loadPageMetadataMap";

const headerMainMenuQuery = gql`
  query HeaderMainMenu {
    menuCollection(limit: 1, where: { menuType: "Header Main Menu" }) {
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

export const loadMainNav = async (pageMetadataMap: PageMetadataMap): Promise<NavMenuType[]> => {
  const mainMenu: NavMenuType[] = [];
  if (CONTENTFUL_SPACE_ID && CONTENTFUL_DELIVERY_API_TOKEN) {
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const data = await client.fetch<HeaderMainMenuQuery>(printQuery(headerMainMenuQuery));
    if (data?.menuCollection?.items?.length === 1) {
      const menuData = data.menuCollection.items[0]?.childrenCollection?.items;
      if (menuData) {
        menuData.forEach((topTier) => {
          if (topTier?.__typename === "TopTier") {
            const topTierMetadataId = topTier.pageMetadata?.sys?.id;
            if (topTierMetadataId) {
              const topTierMetadata = pageMetadataMap.get(topTierMetadataId);
              if (topTierMetadata && topTierMetadata.title && topTierMetadata.url) {
                // construct the top tier menu items, with the first child of each linking to relevant Top Tier page
                const menu: NavMenuType = {
                  id: topTierMetadataId,
                  name: topTierMetadata.title,
                  children: [
                    {
                      id: topTierMetadataId,
                      name: `View ${topTierMetadata.title}`,
                      link: topTierMetadata.url,
                    },
                  ],
                };
                // the next set of links for each menu should be the featured Service Groups on the Top Tier page
                const featuredServiceGroupMetadataIds =
                  topTier?.featuredServiceListCollection?.items?.map(
                    (featuredServiceGroup) => featuredServiceGroup?.pageMetadata?.sys?.id
                  );
                if (featuredServiceGroupMetadataIds && featuredServiceGroupMetadataIds.length > 0) {
                  featuredServiceGroupMetadataIds.forEach((id) => {
                    if (id) {
                      const metadata = pageMetadataMap.get(id);
                      if (metadata) {
                        const { sys, title, url } = metadata;
                        if (sys?.id && title && url) {
                          menu?.children?.push({
                            id: sys.id,
                            name: title,
                            link: url,
                          });
                        }
                      }
                    }
                  });
                }
                // the last set of links are all second-tier pages not already included from the featured services
                const secondTierMenuItems: NavLinkType[] = [];
                topTierMetadata.children?.forEach((secondTierMetadataId) => {
                  const foundDuplicateIndex = menu?.children?.findIndex(
                    (page) => page.id === secondTierMetadataId
                  );
                  if (foundDuplicateIndex && foundDuplicateIndex < 0) {
                    const secondTierMetadata = pageMetadataMap.get(secondTierMetadataId);
                    if (secondTierMetadata) {
                      const { sys, title, url } = secondTierMetadata;
                      if (sys?.id && title && url) {
                        secondTierMenuItems.push({
                          id: sys.id,
                          name: title,
                          link: url,
                        });
                      }
                    }
                  }
                });
                // sort alphabetically by the link name
                secondTierMenuItems.sort(({ name: a }, { name: b }) => {
                  return a && b ? a.localeCompare(b) : -1;
                });
                secondTierMenuItems.forEach((item) => {
                  menu?.children?.push(item);
                });
                mainMenu.push(menu);
              }
            }
          }
        });
      }
    }
    return mainMenu;
  } else {
    return mainNavTestContent;
  }
};

// TODO: Fetch from Contentful
export const loadSecondaryNav = () => secondaryNavTestContent;

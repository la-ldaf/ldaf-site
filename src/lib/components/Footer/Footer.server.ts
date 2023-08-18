import gql from "graphql-tag";

import { footerNavTestContent } from "./__tests__/FooterTestContent";

import type { ContentfulClient } from "$lib/services/server/contentful";
import type { FooterNavQuery } from "./$queries.generated";
import type { NavLinkType, NavMenuType } from "$lib/components/Header/Nav/types";
import type { PageMetadataMap } from "$lib/loadPageMetadataMap";

const footerNavQuery = gql`
  query FooterNav($preview: Boolean = false) {
    menuCollection(limit: 1, where: { menuType: "Footer Menu" }, preview: $preview) {
      items {
        childrenCollection(limit: 5) {
          items {
            ... on Menu {
              __typename
              sys {
                id
              }
              title
              menuType
              childrenCollection(limit: 10) {
                items {
                  ... on MenuItem {
                    __typename
                    sys {
                      id
                    }
                    title
                    internalLink {
                      ... on PageMetadata {
                        sys {
                          # eslint-disable-next-line @graphql-eslint/selection-set-depth
                          id
                        }
                      }
                    }
                    externalLink
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

export const loadFooterNav = async ({
  pageMetadataMap,
  contentfulClient,
}: {
  pageMetadataMap: PageMetadataMap;
  contentfulClient?: ContentfulClient;
}): Promise<NavMenuType[]> => {
  if (!contentfulClient) return footerNavTestContent;
  const footerMenu: NavMenuType[] = [];
  const data = await contentfulClient.fetch<FooterNavQuery>(footerNavQuery);
  if (data?.menuCollection?.items?.length === 1) {
    const subMenus = data.menuCollection.items[0]?.childrenCollection?.items;
    if (subMenus) {
      subMenus.forEach((subMenu) => {
        const footerSubMenu: NavLinkType[] = [];
        if (
          subMenu &&
          subMenu.__typename === "Menu" &&
          subMenu.menuType === "Footer SubMenu" &&
          subMenu.title
        ) {
          const subMenuItems = subMenu.childrenCollection?.items;
          if (subMenuItems) {
            subMenuItems.forEach((item) => {
              if (
                item &&
                item.__typename === "MenuItem" &&
                item.title &&
                (item.internalLink || item.externalLink)
              ) {
                let link;
                if (item.internalLink?.sys?.id) {
                  link = pageMetadataMap.get(item.internalLink.sys.id)?.url;
                } else if (item.externalLink) {
                  link = item.externalLink;
                }
                link = link ?? "/";
                footerSubMenu.push({
                  id: item.sys.id,
                  name: item.title,
                  link,
                });
              }
            });
          }
          footerMenu.push({
            id: subMenu.sys.id,
            name: subMenu.title,
            children: footerSubMenu,
          });
        }
      });
    }
  }
  return footerMenu;
};

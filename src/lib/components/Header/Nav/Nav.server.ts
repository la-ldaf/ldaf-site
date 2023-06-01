import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import contentfulFetch from "$lib/services/contentful";
import mainNavTestContent from "./__tests__/MainNavTestContent";
import secondaryNavTestContent from "./__tests__/SecondaryNavTestContent";
import type {
  DraftNavigationLink,
  DraftNavigationMenu,
  DraftNavigationMenuChildrenItem,
} from "$lib/services/contentful/schema";
import type { NavLinkType, NavMenuType } from "./types";

export const loadMainNav = async () => {
  const query = gql`
    query Nav {
      draftNavigationMenuCollection(where: { type: "Main Menu" }, limit: 1) {
        items {
          text
          childrenCollection {
            items {
              ... on DraftNavigationMenu {
                sys {
                  id
                }
                text
                childrenCollection {
                  items {
                    ... on DraftNavigationLink {
                      sys {
                        id
                      }
                      text
                      link
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
  const data = await contentfulFetch(printQuery(query));
  if (data) {
    const mainMenu = data?.draftNavigationMenuCollection?.items[0] as DraftNavigationMenu;
    const mainMenuChildren = mainMenu?.childrenCollection
      ?.items as DraftNavigationMenuChildrenItem[];
    // Convert DraftNavigationMenuChildrenItem[] to NavItem[]
    return mainMenuChildren.map((mainMenuChild): NavMenuType => {
      // Treat all children of the main menu as submenus.
      // TODO: Update this if we decide we want normal links as children.
      const subMenu = mainMenuChild as DraftNavigationMenu;
      const subMenuChildren = subMenu?.childrenCollection
        ?.items as DraftNavigationMenuChildrenItem[];
      const transformedSubMenuNavItems = subMenuChildren.map((subMenuChild): NavLinkType => {
        const navLink = subMenuChild as DraftNavigationLink;
        return {
          id: navLink.sys.id,
          name: navLink.text || undefined,
          link: navLink.link || undefined,
        };
      });
      return {
        id: subMenu.sys.id,
        name: subMenu.text || undefined,
        children: transformedSubMenuNavItems,
      };
    });
  } else {
    return mainNavTestContent;
  }
};

// TODO: Fetch from Contentful
export const loadSecondaryNav = () => secondaryNavTestContent;

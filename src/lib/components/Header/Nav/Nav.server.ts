import gql from "graphql-tag";
import { CONTENTFUL_SPACE_ID } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import mainNavTestContent from "./__tests__/MainNavTestContent";
import secondaryNavTestContent from "./__tests__/SecondaryNavTestContent";
import type {
  DraftNavigationLink,
  DraftNavigationMenu,
  DraftNavigationMenuChildrenItem,
} from "$lib/services/contentful/schema";
import type { NavLinkType, NavMenuType } from "./types";
import type { MainNavQuery } from "./$queries.generated";

const mainNavQuery = gql`
  query MainNav($preview: Boolean = false) {
    draftNavigationMenuCollection(where: { type: "Main Menu" }, limit: 1, preview: $preview) {
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

export const loadMainNav = async ({
  fetch,
  locals: { contentfulToken, preview },
}: {
  fetch: typeof global.fetch;
  locals: App.Locals;
}) => {
  if (!CONTENTFUL_SPACE_ID || !contentfulToken) return mainNavTestContent;
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: contentfulToken,
    preview,
    fetch,
  });
  const data = await client.fetch<MainNavQuery>(mainNavQuery);
  const mainMenu = data.draftNavigationMenuCollection?.items[0] as DraftNavigationMenu;
  const mainMenuChildren = mainMenu?.childrenCollection?.items as DraftNavigationMenuChildrenItem[];
  // Convert DraftNavigationMenuChildrenItem[] to NavItem[]
  return mainMenuChildren.map((mainMenuChild): NavMenuType => {
    // Treat all children of the main menu as submenus.
    // TODO: Update this if we decide we want normal links as children.
    const subMenu = mainMenuChild as DraftNavigationMenu;
    const subMenuChildren = subMenu?.childrenCollection?.items as DraftNavigationMenuChildrenItem[];
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
};

// TODO: Fetch from Contentful
export const loadSecondaryNav = () => secondaryNavTestContent;

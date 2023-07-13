import gql from "graphql-tag";
import mainNavTestContent from "./__tests__/mainNavTestContent";
import secondaryNavTestContent from "./__tests__/secondaryNavTestContent";
import type { NavLinkType, NavMenuType } from "./types";
import type { MainNavQuery } from "./$queries.generated";
import { error } from "@sveltejs/kit";

const mainNavQuery = gql`
  query MainNav($preview: Boolean = false) {
    draftNavigationMenuCollection(where: { type: "Main Menu" }, limit: 1, preview: $preview) {
      items {
        text
        childrenCollection {
          items {
            ... on DraftNavigationMenu {
              __typename
              sys {
                id
              }
              text
              childrenCollection {
                items {
                  __typename
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
  locals: { contentfulClient },
}: {
  locals: App.Locals;
}): Promise<NavMenuType[]> => {
  if (!contentfulClient) return mainNavTestContent;
  const data = await contentfulClient.fetch<MainNavQuery>(mainNavQuery);
  const mainMenu = data.draftNavigationMenuCollection?.items[0];
  const mainMenuChildren = mainMenu?.childrenCollection?.items;
  if (!mainMenuChildren) throw error(500);
  return mainMenuChildren.map((mainMenuChild): NavMenuType | NavLinkType => {
    // Treat all children of the main menu as submenus.
    if (!mainMenuChild?.__typename) throw error(500, { message: "Got malformed submenu" });
    if (mainMenuChild.__typename === "DraftNavigationLink") {
      // TODO: Update this if we decide we want normal links as children.
      throw error(500, { message: "Cannot have a top-level link" });
    }
    if (mainMenuChild.__typename !== "DraftNavigationMenu") {
      throw error(500, {
        message: `Got unexpected main menu child type: ${mainMenuChild.__typename}`,
      });
    }
    const children = mainMenuChild?.childrenCollection?.items?.map((navItem): NavLinkType => {
      if (navItem?.__typename !== "DraftNavigationLink") {
        throw error(500, { message: "Cannot nest menus!" });
      }
      return {
        id: navItem.sys.id,
        name: navItem.text ?? undefined,
        link: navItem.link ?? undefined,
      };
    });
    return {
      id: mainMenuChild.sys.id,
      name: mainMenuChild.text ?? undefined,
      children,
    };
  });
};

// TODO: Fetch from Contentful
export const loadSecondaryNav = () => secondaryNavTestContent;

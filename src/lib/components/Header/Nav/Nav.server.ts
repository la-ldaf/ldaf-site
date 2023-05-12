import contentfulFetch from "$lib/services/contentful";
import mainNavTestContent from "./__tests__/MainNavTestContent";
import secondaryNavTestContent from "./__tests__/SecondaryNavTestContent";

export const loadMainNav = async () => {
  const query = `
  {
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
  // TODO: This whole block is riddled with TS errors due to incompatible types NavMenuType and DrafNavigationMenu
  const data = await contentfulFetch(query);
  let nav;
  if (data) {
    const items = data?.draftNavigationMenuCollection?.items[0]?.childrenCollection?.items;
    if (items) {
      nav = items.map((subMenu) => {
        if (subMenu && "childrenCollection" in subMenu) {
          const children = subMenu.childrenCollection?.items;
          return {
            id: subMenu.sys.id,
            name: subMenu.text,
            children:
              children &&
              children.map((child) => {
                if (child && "link" in child) {
                  return {
                    id: child.sys.id,
                    name: child.text,
                    link: child.link,
                  };
                }
              }),
          };
        }
      });
    }
  }
  return nav ? nav : mainNavTestContent;
};

// TODO: Fetch from Contentful
export const loadSecondaryNav = () => secondaryNavTestContent;

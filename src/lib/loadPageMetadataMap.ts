import { VERCEL_ENV } from "$env/static/private";

import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import type { ContentfulClient } from "$lib/services/server/contentful";

import type { Breadcrumbs } from "$lib/components/Breadcrumbs";
import type { PageMetadataCollectionQuery } from "./$queries.generated";

const isProd = VERCEL_ENV === "production";

// extend the type of the items we get back from the query so we can add children and a full URL
export type PageMetadataMapItem = NonNullable<
  PageMetadataCollectionQuery["pageMetadataCollection"]
>["items"][number] & {
  children?: string[];
  url?: string | null;
  breadcrumbs?: Breadcrumbs;
};

export type PageMetadataMap = Map<string, PageMetadataMapItem>;

const pageMetadataItems = gql`
  fragment PageMetadataItems on PageMetadataCollection {
    items {
      sys {
        id
      }
      __typename
      title
      slug
      isRoot
      parent {
        ... on PageMetadata {
          sys {
            id
          }
        }
      }
      internalRedirect {
        __typename
        ... on PageMetadata {
          sys {
            id
          }
        }
        ... on News {
          slug
        }
        ... on EventEntry {
          slug
          eventDateAndTime
        }
      }
      externalRedirect
      # Additional fields for search and setting <title> and <meta> tags in the <head>
      metaTitle
      metaDescription
    }
  }
`;

const queryAll = gql`
  ${pageMetadataItems}
  query PageMetadataCollection($preview: Boolean = false) {
    # TODO: A limit of 500 works until it doesn't. We should set up a way to paginate.
    pageMetadataCollection(limit: 500, preview: $preview) {
      ...PageMetadataItems
    }
  }
`;

const queryWithoutRedirects = gql`
  ${pageMetadataItems}
  query PageMetadataCollection($preview: Boolean = false) {
    # TODO: A limit of 500 works until it doesn't. We should set up a way to paginate.
    pageMetadataCollection(
      limit: 500
      preview: $preview
      where: { AND: [{ internalRedirect_exists: false }, { externalRedirect_exists: false }] }
    ) {
      ...PageMetadataItems
    }
  }
`;

// Recursive function that constructs a full path by concatenating slugs.
// Walks up the "tree" by looking at pageMetadata, then its parent, then its grandparent, etc.
const constructFullPathFromMap = (
  pageMetadataMap: PageMetadataMap,
  pageMetadata: PageMetadataMapItem,
  path = "",
): string | null => {
  if (pageMetadata.parent) {
    // recurse, running on parent
    const parentPageMetadata = pageMetadataMap.get(pageMetadata.parent.sys.id);
    if (parentPageMetadata) {
      return constructFullPathFromMap(
        pageMetadataMap,
        parentPageMetadata,
        // only append path if not blank
        `${pageMetadata.slug}${path ? `/${path}` : ""}`,
      );
    } else {
      // somehow we have a parent that's not in our map, error
      return null;
    }
  } else if (pageMetadata.isRoot) {
    // break when we reach the root
    return `/${path}`;
  } else {
    // the URL is invalid because we couldn't reach the root
    return null;
  }
};

// Recursive function that puts together breadcrumbs for a page.
const constructBreadcrumbs = (
  pageMetadataMap: PageMetadataMap,
  metadata: PageMetadataMapItem,
  breadcrumbs: Breadcrumbs = [],
): Breadcrumbs => {
  breadcrumbs.unshift({
    id: metadata.sys.id,
    title: metadata.title,
    link: metadata.url,
  });
  if (metadata.parent) {
    const parent = pageMetadataMap.get(metadata.parent.sys.id);
    if (parent) {
      return constructBreadcrumbs(pageMetadataMap, parent, breadcrumbs);
    }
  }
  return breadcrumbs;
};

export const loadPageMetadataMap = async ({
  includeBreadcrumbs = false,
  includeRedirects = false,
  contentfulClient,
}: {
  includeBreadcrumbs?: boolean;
  includeRedirects?: boolean;
  contentfulClient?: ContentfulClient;
} = {}): Promise<{
  pageMetadataMap: PageMetadataMap;
  pathsToIDs: Map<string, string>;
}> => {
  const pageMetadataMap: PageMetadataMap = new Map();
  const pathsToIDs = new Map<string, string>();

  if (!contentfulClient) return { pageMetadataMap, pathsToIDs };

  let data;
  // Adjust query depending on whether we need to provide redirects.
  if (includeRedirects) {
    data = await contentfulClient.fetch<PageMetadataCollectionQuery>(printQuery(queryAll));
  } else {
    data = await contentfulClient.fetch<PageMetadataCollectionQuery>(
      printQuery(queryWithoutRedirects),
    );
  }
  if (data?.pageMetadataCollection?.items) {
    const allPageMetadata = data.pageMetadataCollection.items;
    // construct a sort-of site map, where each PageMetadata's key is its ID
    allPageMetadata.forEach((page) => page && pageMetadataMap.set(page.sys.id, page));
    // add an array of children ids to each parent so we can easily navigate top-down
    //   (we can already navigate bottom-up via the parent field)
    allPageMetadata.forEach((page) => {
      if (page?.parent) {
        const parent = pageMetadataMap.get(page.parent.sys.id);
        if (parent) {
          if (parent.children) {
            parent.children.push(page.sys.id);
          } else {
            parent.children = [page.sys.id];
          }
        } else if (!isProd) {
          console.warn(
            `The parent field was set but could not be resolved for Page Metadata entry with ID ${page.sys.id} and title "${page.title}"`,
          );
        }
      }
    });
    // construct full URLs for each page using their parent, and warn on pages if we can't resolve their path
    // TODO: We may want to consider completely invalidating these entries instead, removing them from the map.
    [...pageMetadataMap].forEach(([_, page]) => {
      page.url = constructFullPathFromMap(pageMetadataMap, page);
      if (!page.url && !isProd) {
        console.warn(
          `A path to the root could not be resolved for Page Metadata entry with ID ${page.sys.id} and title "${page.title}"`,
        );
      }
      // update the item in the map
      pageMetadataMap.set(page.sys.id, page);
      if (page.url) pathsToIDs.set(page.url, page.sys.id);
    });
    if (includeBreadcrumbs) {
      // construct breadcrumbs for each page'
      [...pageMetadataMap].forEach(([_, page]) => {
        page.breadcrumbs = constructBreadcrumbs(pageMetadataMap, page);
      });
    }
  }
  return { pageMetadataMap, pathsToIDs };
};

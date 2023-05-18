import type { PageServerLoad } from "./$types";
import type { DraftNavigationLink } from "$lib/services/contentful/schema";

import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";
import contentfulFetch from "$lib/services/contentful";

// TODO: Raise limit filter as needed. Default is 100; might need to paginate above that.
const query = gql`
  query Stub {
    draftNavigationLinkCollection(limit: 100) {
      items {
        sys {
          id
        }
        text
        link
      }
    }
  }
`;

export const load = (async ({ params }): Promise<DraftNavigationLink> => {
  const dynamicRoute = `/${params.dynamicRoute}`;
  const data = await contentfulFetch(printQuery(query));
  if (data) {
    const navLinks = data?.draftNavigationLinkCollection?.items as DraftNavigationLink[];
    const matchedNavLink = navLinks.find((navLink) => navLink.link === dynamicRoute);
    if (matchedNavLink) {
      return matchedNavLink;
    }
  }
  throw error(404);
}) satisfies PageServerLoad;

import type { PageServerLoad } from "./$types";
import type { DraftNavigationLink } from "$lib/services/contentful/schema";

import gql from "graphql-tag";
import { error } from "@sveltejs/kit";
import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import type { StubQuery } from "./$queries.generated";

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
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
  });
  const data = await client.fetch<StubQuery>(query);
  if (data) {
    const navLinks = data?.draftNavigationLinkCollection?.items as DraftNavigationLink[];
    const matchedNavLink = navLinks.find((navLink) => navLink.link === dynamicRoute);
    if (matchedNavLink) {
      return matchedNavLink;
    }
  }
  throw error(404);
}) satisfies PageServerLoad;

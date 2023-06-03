import type { PageServerLoad } from "./$types";
import type { DraftNavigationLink } from "$lib/services/contentful/schema";

import gql from "graphql-tag";
import { error } from "@sveltejs/kit";
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

export const load = (async ({
  params,
  locals: { contentfulClient },
}): Promise<{ text: string }> => {
  // TODO: create fallback fixture
  if (!contentfulClient) throw error(404);
  const dynamicRoute = `/${params.dynamicRoute}`;
  const data = await contentfulClient.fetch<StubQuery>(query);
  if (data) {
    const navLinks = data?.draftNavigationLinkCollection?.items as DraftNavigationLink[];
    const matchedNavLink = navLinks.find((navLink) => navLink.link === dynamicRoute);
    if (matchedNavLink && matchedNavLink.text) {
      return { text: matchedNavLink.text };
    }
  }
  throw error(404);
}) satisfies PageServerLoad;

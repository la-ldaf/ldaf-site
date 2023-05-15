import { error } from "@sveltejs/kit";
import contentfulFetch from "$lib/services/contentful";
import type { DraftNavigationLink } from "$lib/services/contentful/schema";

// TODO: Raise limit filter as needed. Default is 100; might need to paginate above that.
const query = `
{
  draftNavigationLinkCollection(limit: 100) {
    items {
      sys { id }
      text
      link
    }
  }
}
`;

export async function load({ params }): Promise<DraftNavigationLink> {
  const dynamicRoute = `/${params.dynamicRoute}`;
  const data = await contentfulFetch(query);
  if (data) {
    const navLinks = data?.draftNavigationLinkCollection?.items as DraftNavigationLink[];
    const matchedNavLink = navLinks.find((navLink) => navLink.link === dynamicRoute);
    if (matchedNavLink) {
      return matchedNavLink;
    }
  }
  throw error(404);
}

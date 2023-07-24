import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";

import type { ServiceGroupCollectionQuery } from "./$queries.generated";

// TODO: Raise limit filter as needed. Default is 100; might need to paginate above that.
const query = gql`
  query ServiceGroupCollection {
    serviceGroupCollection(limit: 100) {
      items {
        pageMetadata {
          ... on PageMetadata {
            sys {
              id
            }
            slug
          }
        }
      }
    }
  }
`;

export const load = async ({ parent, params }) => {
  const { pageMetadataMap } = await parent();
  const { topTierPage, serviceGroupPage } = params;
  // construct URL for matching later
  const url = `/${topTierPage}/${serviceGroupPage}`;
  // service groups can be deeply nested
  const path = url.split("/");
  const slug = path[path.length - 1];
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
  });
  const data = await client.fetch<ServiceGroupCollectionQuery>(printQuery(query));
  if (data) {
    const matchedServiceGroupsFromSlug = data?.serviceGroupCollection?.items?.filter(
      (serviceGroup) => {
        return serviceGroup?.pageMetadata?.slug === slug;
      }
    );
    if (matchedServiceGroupsFromSlug) {
      // account for possibility that two service groups have the same ending slug
      const matchedServiceGroupsMetadata = matchedServiceGroupsFromSlug.map((group) => {
        const serviceGroupMetadataId = group?.pageMetadata?.sys?.id;
        if (serviceGroupMetadataId) return pageMetadataMap.get(serviceGroupMetadataId);
      });
      // Regardless of how many matches we have, we want to ensure the URL matches.
      //   Otherwise we could render the page for /land/fire/safety at /foo/bar/safety.
      // TODO: Possibly account for possiblity that two service groups (erroneously) have the same URL
      const matchedPageMetadata = matchedServiceGroupsMetadata.find(
        (matchedServiceGroupMetadata) => matchedServiceGroupMetadata?.url === url
      );
      if (matchedPageMetadata) {
        return { pageMetadata: matchedPageMetadata };
      }
    }
  }
  throw error(404);
};

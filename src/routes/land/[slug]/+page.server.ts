import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import ServiceGroupPageTestContent from "./__tests__/ServiceGroupPageTestContent";

import type { PageServerLoad } from "./$types";
import type { ServiceGroup, ServiceEntry } from "$lib/services/contentful/schema";
import type { ServiceGroupPageQuery } from "./$queries.generated";

export type ServiceGroupPage = ServiceGroup & {
  serviceEntries: ServiceEntry[];
  serviceGroups: ServiceGroup[];
};

const query = gql`
  query ServiceGroupPage {
    serviceGroupCollection {
      items {
        sys {
          id
        }
        heroImage {
          ... on HeroImage {
            imageSource {
              ... on Asset {
                title
                description
                contentType
                fileName
                size
                url
                width
                height
              }
            }
            imageTitle
            altField
            fotogCredit
          }
        }
        title
        subheading
        description {
          json
        }
        serviceEntriesCollection {
          items {
            ... on ServiceEntry {
              __typename
              sys {
                id
              }
              entryTitle
              description {
                json
              }
            }
            ... on ServiceGroup {
              __typename
              sys {
                id
              }
              title
              # ServiceGroup should be displayed with the <Card /> Component,
              # using subheading in the body instead of the longer description
              subheading
            }
          }
        }
        contactInfoCollection(limit: 5) {
          items {
            ... on Contact {
              sys {
                id
              }
              entityName
              phone
              email
            }
          }
        }
        additionalResources {
          json
        }
        serviceListName
        pageMetadata {
          ... on PageMetadata {
            slug
            metaTitle
            metaDescription
          }
        }
      }
    }
  }
`;

export const load = (async ({ params }): Promise<ServiceGroupPage> => {
  const { slug } = params;
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) return ServiceGroupPageTestContent;
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
  });

  const data = await client.fetch<ServiceGroupPageQuery>(printQuery(query));
  const serviceGroupPages = data?.serviceGroupCollection?.items;
  if (!serviceGroupPages) throw error(404);
  const serviceGroupPage = serviceGroupPages.find(
    (servicePage) => servicePage?.pageMetadata?.slug === slug
  );
  if (serviceGroupPage) {
    const serviceEntries = serviceGroupPage.serviceEntriesCollection?.items.filter(
      (item) => item?.__typename === "ServiceEntry"
    );
    const serviceGroups = serviceGroupPage.serviceEntriesCollection?.items.filter(
      (item) => item?.__typename === "ServiceGroup"
    );

    return {
      ...serviceGroupPage,
      serviceEntries,
      serviceGroups,
    } as ServiceGroupPage;
  }
  throw error(404);
}) satisfies PageServerLoad;

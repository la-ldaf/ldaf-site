import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";

import type { ServiceGroup, ServiceEntry } from "$lib/services/contentful/schema";
import type { ServiceGroupCollectionQuery } from "./$queries.generated";
import ServiceGroupPageTestContent from "./__tests__/ServiceGroupPageTestContent";

export type ServiceGroupPage = ServiceGroup & {
  serviceEntries: ServiceEntry[];
  serviceGroups: (ServiceGroup & { url: string })[];
};

// TODO: Raise limit filter as needed. Default is 100; might need to paginate above that.
const query = gql`
  fragment ImageProps on Asset {
    sys {
      id
    }
    contentType
    title
    description
    url
    width
    height
  }

  query ServiceGroupCollection($pageSlug: String) {
    serviceGroupCollection(limit: 1, where: { pageMetadata: { slug: $pageSlug } }) {
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
          links {
            assets {
              block {
                ...ImageProps
              }
              hyperlink {
                ...ImageProps
              }
            }
          }
        }
        # /animals/meat-poultry has 8 service entries, this limit
        # needs to be higher to account for more flexibility
        serviceEntriesCollection(limit: 8) {
          items {
            ... on ServiceEntry {
              sys {
                id
              }
              __typename
              entryTitle
              description {
                json
                links {
                  assets {
                    block {
                      ...ImageProps
                    }
                    hyperlink {
                      ...ImageProps
                    }
                  }
                }
              }
              serviceCtaCollection {
                items {
                  callToActionDestination {
                    json
                  }
                }
              }
            }
            ... on ServiceGroup {
              __typename
              pageMetadata {
                sys {
                  id
                }
              }
              title
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
          links {
            assets {
              block {
                ...ImageProps
              }
              hyperlink {
                ...ImageProps
              }
            }
          }
        }
        serviceListName
        pageMetadata {
          ... on PageMetadata {
            sys {
              id
            }
            slug
            metaTitle
            metaDescription
          }
        }
      }
    }
  }
`;

export const load = async ({ parent, params }) => {
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) return ServiceGroupPageTestContent;
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
  const data = await client.fetch<ServiceGroupCollectionQuery>(printQuery(query), {
    variables: { pageSlug: slug },
  });
  if (data) {
    const matchedServiceGroupsFromSlug = data?.serviceGroupCollection?.items?.filter(
      (serviceGroup) => {
        return serviceGroup?.pageMetadata?.slug === slug;
      }
    );
    if (matchedServiceGroupsFromSlug && matchedServiceGroupsFromSlug.length > 0) {
      let matchedPageMetadata;
      // account for possibility that two service groups have the same ending slug
      const matchedServiceGroup = matchedServiceGroupsFromSlug.find((group) => {
        const serviceGroupMetadataId = group?.pageMetadata?.sys?.id || "";
        matchedPageMetadata = pageMetadataMap.get(serviceGroupMetadataId);
        if (matchedPageMetadata) {
          return matchedPageMetadata.url === url;
        }
      });

      if (matchedServiceGroup) {
        const serviceEntries = matchedServiceGroup.serviceEntriesCollection?.items.filter(
          (item) => item?.__typename === "ServiceEntry"
        );
        let serviceGroups = matchedServiceGroup.serviceEntriesCollection?.items.filter(
          (item) => item?.__typename === "ServiceGroup"
        ) as ServiceGroup[];

        serviceGroups = serviceGroups.map((serviceGroup) => {
          const serviceGroupMetadata = pageMetadataMap.get(
            serviceGroup?.pageMetadata?.sys.id || ""
          );
          return { ...serviceGroup, url: serviceGroupMetadata?.url };
        });

        const descriptionLinks = matchedServiceGroup.description?.links;
        const resourceLinks = matchedServiceGroup.additionalResources?.links;
        const serviceEntryLinks = matchedServiceGroup?.serviceEntriesCollection?.items.map(
          (item) => item?.description?.links
        );

        const links = [descriptionLinks, resourceLinks, ...serviceEntryLinks].filter(
          (link) => !!link
        );

        // const links = [
        //   matchedServiceGroup?.description?.links || {},
        //   matchedServiceGroup?.additionalResources?.links || {},
        //   ...matchedServiceGroup?.serviceEntriesCollection?.items.map(
        //     (item) => item.description.links || {}
        //   ),
        // ].filter((link) => !!link);

        // console.log(matchedServiceGroup?.serviceEntriesCollection?.items);
        // const serviceEntryLinks = matchedServiceGroup?.serviceEntriesCollection?.items.map(
        //   (item) => item.description.links
        // );
        // console.log("serviceEntryLinks", serviceEntryLinks);
        const mergedLinks = links.reduce(
          (acc, cur) => {
            return {
              assets: {
                block: [...acc?.assets?.block, ...cur?.assets?.block],
                hyperlink: [...acc?.assets?.hyperlink, ...cur?.assets?.hyperlink],
              },
            };
          },
          { assets: { block: [], hyperlink: [] } }
        );

        // console.log("links", links);
        let blurhashes = [];

        // if (matchedServiceGroup?.description?.links.assets.block.length > 0) {
        // links.map(async (linksObject, index) => {
        //   const blurhashes = Object.fromEntries(
        //     await Promise.all(
        //       // matchedServiceGroup?.description?.links.assets.block
        //       linksObject?.assets.block
        //         .filter((item) => !!item)
        //         .flatMap(async (item) => {
        //           if (!item?.sys?.id || !item?.url || !item?.contentType?.startsWith("image/"))
        //             return [];
        //           const blurhashResponse = await fetch(
        //             `/api/v1/blurhash/${encodeURIComponent(item.url)}`
        //           );
        //           if (!blurhashResponse.ok) return [];
        //           return [item.sys.id, await blurhashResponse.text()];
        //         }) ?? []
        //     )
        //   );
        //   console.log(`Blurhashes ${index}:`, blurhashes);
        // });
        // }

        return {
          ...matchedServiceGroup,
          pageMetadata: matchedPageMetadata,
          serviceEntries,
          serviceGroups,
          links: mergedLinks,
          // links: undefined,
          blurhashes: undefined,
        } as ServiceGroupPage;
      }
    } else {
      console.warn(
        `A Service Group entry with the slug "${slug}" could not be found. If this page was reached via a link, it is likely that the Page Metadata entry is published but the Service Group entry is not.`
      );
    }
  }
  throw error(404);
};

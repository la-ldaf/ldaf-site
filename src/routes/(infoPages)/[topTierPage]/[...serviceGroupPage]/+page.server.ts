import gql from "graphql-tag";
import { error } from "@sveltejs/kit";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import type { ServiceGroup } from "$lib/services/server/contentful/schema";
import type { ServiceGroupCollectionQuery } from "./$queries.generated";
import ServiceGroupPageTestContent from "./__tests__/ServiceGroupPageTestContent";

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

  query ServiceGroupCollection($pageSlug: String, $preview: Boolean = false) {
    serviceGroupCollection(
      limit: 1
      preview: $preview
      where: { pageMetadata: { slug: $pageSlug } }
    ) {
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
            entries {
              block {
                __typename
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
          }
        }
        # TODO:  this limit needs to be higher to accommodate
        # larger core content pages with many services.
        # E.g. /animals/meat-poultry has 8 service entries
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
                }
              }
              contactInformationCollection(limit: 5) {
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

export const load = async ({
  parent,
  locals: { contentfulClient, logger },
  params: { topTierPage, serviceGroupPage },
}) => {
  // TODO: offline fixtures
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) return ServiceGroupPageTestContent;
  const url = `/${topTierPage}/${serviceGroupPage}`;
  // service groups can be deeply nested
  const path = url.split("/");
  const slug = path[path.length - 1];

  const data =
    contentfulClient &&
    (await contentfulClient.fetch<ServiceGroupCollectionQuery>(query, {
      variables: { pageSlug: slug, preview: false },
    }));

  if (!data) {
    await logger.logError(new Error("query returned no response"));
    console.warn(
      `A Service Group entry with the slug "${slug}" could not be found. If this page was reached via a link, it is likely that the Page Metadata entry is published but the Service Group entry is not.`
    );
    throw error(404);
  }

  const { pageMetadataMap } = await parent(); // construct URL for matching later

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
        const serviceGroupMetadata = pageMetadataMap.get(serviceGroup?.pageMetadata?.sys.id || "");
        return { ...serviceGroup, url: serviceGroupMetadata?.url };
      });

      const descriptionLinks = matchedServiceGroup.description?.links;
      const resourceLinks = matchedServiceGroup.additionalResources?.links;
      const serviceEntryLinks =
        matchedServiceGroup?.serviceEntriesCollection?.items.map(
          // items with __typename "ServiceGroup" will be undefined and filtered out below
          (item) => item?.description?.links
        ) || [];
      const serviceEntryCTALinks =
        matchedServiceGroup?.serviceEntriesCollection?.items.flatMap((item) => {
          const ctaItems = item?.serviceCtaCollection?.items || [];
          const ctaLinks = ctaItems.map((ctaItem) => ctaItem.callToActionDestination?.links);

          return ctaLinks;
        }) || [];

      const aggregatedLinks = [
        descriptionLinks,
        resourceLinks,
        ...serviceEntryLinks,
        ...serviceEntryCTALinks,
      ].filter((link) => !!link);

      const mergedLinks = aggregatedLinks.reduce(
        (acc, cur) => {
          return {
            assets: {
              block: [...(acc.assets?.block ?? []), ...(cur?.assets?.block ?? [])],
              hyperlink: [...(acc?.assets?.hyperlink ?? []), ...(cur?.assets?.hyperlink ?? [])],
            },
            entries: {
              block: [...(acc.entries?.block ?? []), ...(cur?.entries?.block ?? [])],
              hyperlink: [...(acc?.entries?.hyperlink ?? []), ...(cur?.entries?.hyperlink ?? [])],
            },
          };
        },
        { assets: { block: [], hyperlink: [] }, entries: { block: [], hyperlink: [] } }
      );

      return {
        pageMetadataMap,
        ...matchedServiceGroup,
        pageMetadata: matchedPageMetadata,
        serviceEntries,
        serviceGroups,
        links: mergedLinks,
        blurhashes: undefined,
      };
    }
  }
};

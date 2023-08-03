import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import { getBlurhash, getBlurhashMapFromRichText } from "$lib/services/blurhashes";

import type { ServiceGroupCollectionQuery } from "./$queries.generated";
import serviceGroupPageTestContent from "./__tests__/serviceGroupPageTestContent";
import type { ExtractQueryType } from "$lib/util/types";
import type { PageMetadataMap } from "../../../loadPageMetadataMap";

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

  fragment EntryProps on Entry {
    __typename
    ... on PageMetadata {
      sys {
        id
      }
    }

    ... on ImageWrapper {
      sys {
        id
      }
      __typename
      internalTitle
      altText
      linkedImage {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      imageCategory {
        categoryName
        categoryDescription
      }
    }
    ... on Contact {
      sys {
        id
      }
      __typename
      entityName
      phoneExt
      email
      # location {
      #   name
      #   streetAddress1
      #   streetAddress2
      #   city
      #   state
      #   zip
      # }
    }
  }
  query ServiceGroupCollection($metadataID: String!) {
    serviceGroupCollection(where: { pageMetadata: { sys: { id: $metadataID } } }, limit: 1) {
      items {
        sys {
          id
        }
        heroImage {
          ... on HeroImage {
            imageSource {
              ...ImageProps
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
              hyperlink {
                ...EntryProps
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
                      # eslint-disable-next-line @graphql-eslint/selection-set-depth
                      ...ImageProps
                    }
                    hyperlink {
                      # eslint-disable-next-line @graphql-eslint/selection-set-depth
                      ...ImageProps
                    }
                  }
                  entries {
                    block {
                      ...EntryProps
                    }
                    hyperlink {
                      ...EntryProps
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
                      entries {
                        block {
                          ...EntryProps
                        }
                        hyperlink {
                          ...EntryProps
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
              hyperlink {
                ...EntryProps
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

type ServiceGroup = ExtractQueryType<
  ServiceGroupCollectionQuery,
  ["serviceGroupCollection", "items", number]
>;

type ServiceGroupMetadata = ExtractQueryType<ServiceGroup, ["pageMetadata"]>;

type ChildServiceEntryOrGroup = ExtractQueryType<
  ServiceGroup,
  ["serviceEntriesCollection", "items", number]
>;

type ChildServiceEntry = Extract<ChildServiceEntryOrGroup, { __typename: "ServiceEntry" }>;

type ChildServiceGroup = Extract<ChildServiceEntryOrGroup, { __typename: "ServiceGroup" }>;

export type ServiceGroupPage = {
  serviceGroup: ServiceGroup & {
    heroImage?: ServiceGroup["heroImage"] & {
      imageSource?: NonNullable<ServiceGroup["heroImage"]>["imageSource"] & {
        blurhash?: string | null | undefined;
      };
    };
    description?: ServiceGroup["description"] & {
      blurhashes?: Record<string, string> | null | undefined;
    };
  };
  childServiceEntries: (ChildServiceEntry & {
    description?: ChildServiceEntry["description"] & {
      blurhashes?: Record<string, string> | null | undefined;
    };
  })[];
  childServiceGroups: (ChildServiceGroup & { url?: string | null | undefined })[];
  pageMetadata?: ServiceGroupMetadata;
  pageMetadataMap: PageMetadataMap;
};

export const load = async ({
  parent,
  params: { topTierPage, serviceGroupPage },
  fetch,
}): Promise<ServiceGroupPage> => {
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) return serviceGroupPageTestContent;
  const { pageMetadataMap, pathsToIDs } = await parent();
  // construct URL for matching later
  const path = `/${topTierPage}/${serviceGroupPage}`;
  fetchData: {
    const metadataID = pathsToIDs.get(path);
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const data = await client.fetch<ServiceGroupCollectionQuery>(printQuery(query), {
      variables: { metadataID },
    });
    if (!data) break fetchData;
    const [serviceGroup] = data?.serviceGroupCollection?.items ?? [];
    if (!serviceGroup) break fetchData;
    const heroImageURL = serviceGroup?.heroImage?.imageSource?.url;
    const heroImageBlurhashPromise = heroImageURL && getBlurhash(heroImageURL, { fetch });
    const descriptionBlurhashesPromise = getBlurhashMapFromRichText(serviceGroup?.description, {
      fetch,
    });
    const childServiceEntriesPromises =
      serviceGroup.serviceEntriesCollection?.items
        .filter((item): item is ChildServiceEntry => item?.__typename === "ServiceEntry")
        .map(async (entry) => ({
          ...entry,
          description: entry.description
            ? {
                ...entry.description,
                blurhashes: await getBlurhashMapFromRichText(entry?.description, { fetch }),
              }
            : undefined,
        })) ?? [];
    const childServiceGroups =
      serviceGroup.serviceEntriesCollection?.items
        .filter((item): item is ChildServiceGroup => item?.__typename === "ServiceGroup")
        .map((group) => {
          const { id } = group?.pageMetadata?.sys ?? {};
          if (!id) return group;
          const { url } = pageMetadataMap.get(id) ?? {};
          return { ...group, url };
        }) ?? [];

    // additionalResources is not yet used on the page, so we don't fetch its blurhashes

    const [heroImageBlurhash, descriptionBlurhashes, childServiceEntries] = await Promise.all([
      heroImageBlurhashPromise,
      descriptionBlurhashesPromise,
      Promise.all(childServiceEntriesPromises),
    ]);
    const pageData = {
      serviceGroup: {
        ...serviceGroup,
        description: serviceGroup.description
          ? {
              ...serviceGroup.description,
              blurhashes: descriptionBlurhashes,
            }
          : undefined,
        heroImage: serviceGroup.heroImage
          ? {
              ...serviceGroup.heroImage,
              imageSource: serviceGroup.heroImage.imageSource
                ? { ...serviceGroup.heroImage.imageSource, blurhash: heroImageBlurhash }
                : undefined,
            }
          : undefined,
      },
      pageMetadata,
      pageMetadataMap,
      childServiceEntries,
      childServiceGroups,
    };
    return pageData;
  }
  throw error(404);
};

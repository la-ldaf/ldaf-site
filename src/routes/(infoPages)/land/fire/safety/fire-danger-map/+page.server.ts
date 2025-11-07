import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";
import parishTopoJSON from "./parishes.json";

import type { PageServerLoad } from "./$types";
import type { FireWeatherMapPageQuery } from "./$queries.generated";

const query = gql`
  query FireWeatherMapPage($metadataID: String!, $preview: Boolean = false) {
    fireDangerMapCollection(
      where: { pageMetadata: { sys: { id: $metadataID } } }
      limit: 1
      preview: $preview
    ) {
      items {
        title
        description {
          json
        }
        pageMetadata {
          sys {
            id
          }
        }
      }
    }
  }
`;

export const load = (async ({ parent, locals: { getKVClient, contentfulClient } }) => {
  fetchData: {
    if (!contentfulClient) break fetchData;
    const { pageMetadataMap, pathsToIDs } = await parent();
    const metadataID = pathsToIDs.get("/land/fire/safety/fire-danger-map");
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;

    const pageData = await contentfulClient.fetch<FireWeatherMapPageQuery>(printQuery(query), {
      variables: { metadataID },
    });
    if (!pageData?.fireDangerMapCollection?.items) break fetchData;
    const [fireDangerMapPageData] = pageData.fireDangerMapCollection.items;

    try {
      // Fetch fire weather data from database.
      const kvClient = await getKVClient();
      const fireWeatherData = await kvClient.getFireWeatherData();
      if (fireWeatherData === undefined) {
        throw new Error("Error fetching fire weather data.");
      }

      return {
        pageMetadata,
        fireWeatherData: {
          ...fireWeatherData,
          topoJSON: parishTopoJSON,
        },
        pageData: fireDangerMapPageData,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      return {
        error: errorMessage,
      };
    }
  }
  error(404);
}) satisfies PageServerLoad;

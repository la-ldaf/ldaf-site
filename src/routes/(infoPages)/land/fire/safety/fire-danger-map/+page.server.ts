import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import parishTopoJSON from "./parishes.json";

import type { FireWeatherMapQuery } from "./$queries.generated";

const query = gql`
  query FireWeatherMap {
    fireDangerMapCollection(limit: 1) {
      items {
        description {
          json
        }
      }
    }
  }
`;

export const load = async ({ locals: { getKVClient }, locals: { contentfulClient } }) => {
  try {
    const kvClient = await getKVClient();
    const fireWeatherData = await kvClient.getFireWeatherData();

    if (fireWeatherData === undefined) {
      throw new Error("Error fetching fire weather data.");
    }

    const pageData = await contentfulClient?.fetch<FireWeatherMapQuery>(printQuery(query));

    const mapDescription = pageData?.fireDangerMapCollection?.items[0]?.description;

    return {
      fireWeatherData: {
        ...fireWeatherData,
        topoJSON: parishTopoJSON,
      },
      pageData: {
        description: mapDescription,
      },
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return {
      error: errorMessage,
    };
  }
};

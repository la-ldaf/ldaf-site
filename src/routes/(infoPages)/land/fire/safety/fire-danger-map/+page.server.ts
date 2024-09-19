import parishTopoJSON from "./parishes.json";

export const load = async ({ locals: { getKVClient } }) => {
  try {
    const kvClient = await getKVClient();
    const fireWeatherData = await kvClient.getFireWeatherData();

    if (fireWeatherData === undefined) {
      throw new Error("Error fetching fire weather data.");
    }

    return {
      fireWeatherData: {
        ...fireWeatherData,
        topoJSON: parishTopoJSON,
      },
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return {
      error: errorMessage,
    };
  }
};

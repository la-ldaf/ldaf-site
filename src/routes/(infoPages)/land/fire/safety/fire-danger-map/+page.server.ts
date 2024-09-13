import parishTopoJSON from "./parishes.json";

export const load = async ({ locals: { getKVClient } }) => {
  const kvClient = await getKVClient();
  const fireWeatherData = await kvClient.getFireWeatherData();

  return {
    fireWeatherData: {
      ...fireWeatherData,
      topoJSON: parishTopoJSON,
    },
  };
};

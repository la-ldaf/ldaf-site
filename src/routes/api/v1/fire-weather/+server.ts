import { parse } from "csv-parse/sync";
// import { getClient } from "$lib/services/server/kv";
// import { KV_URL } from "$env/static/private";

export type FilteredParishData = {
  ParishNumber: string;
  ParishName: string;
  ObservationDate: string;
  DangerClassDay: string;
};

type ParishData = FilteredParishData & {
  Coordinates: string;
  LabelXOffset: string;
};

// async function initializeKVClient() {
//   if (!KV_URL) {
//     throw new Error("Could not get KV client; no KV_URL was specified");
//   }

//   try {
//     const kvClient = await getClient({ url: KV_URL });
//     return kvClient;
//   } catch (error) {
//     console.error("Failed to initialize KV client:", error);
//     throw error;
//   }
// }

export const GET = async ({ locals: { getKVClient } }) => {
  try {
    const kvClient = await getKVClient();
    const fireWeatherData = await kvClient.getFireWeatherData();

    return new Response(JSON.stringify(fireWeatherData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

export async function POST({ request, locals: { getKVClient } }) {
  try {
    const arrayBuffer = await request.arrayBuffer();
    const decoder = new TextDecoder();
    const csvString = decoder.decode(arrayBuffer);

    const fireData: ParishData[] = await parse(csvString, {
      columns: true,
      skip_empty_lines: true,
    });

    const filteredData: FilteredParishData[] = fireData.map(
      ({ ParishNumber, ParishName, ObservationDate, DangerClassDay }) => ({
        ParishNumber,
        ParishName,
        ObservationDate,
        DangerClassDay,
      }),
    );

    // try {
    //   const kvClient = await initializeKVClient();
    //   kvClient.setFireWeatherData(filteredData);
    // } catch (error) {
    //   console.log("Failed to use KV client:", error);
    // }

    const kvClient = await getKVClient();
    kvClient.setFireWeatherData(filteredData);

    return new Response(JSON.stringify(filteredData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

import { parse } from "csv-parse/sync";
import { formatInTimeZone } from "date-fns-tz";

type FilteredParishData = {
  ParishNumber: string;
  ParishName: string;
  ObservationDate: string;
  DangerClassDay: string;
};

type ParishData = FilteredParishData & {
  Coordinates: string;
  LabelXOffset: string;
};

export type FireWeatherData = {
  parishes: FilteredParishData[];
  lastUpdated: string;
};

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

    // Make sure the time zone is always presented in Louisiana local time
    const lastUpdated = formatInTimeZone(
      new Date(),
      "America/Chicago",
      "yyyy-MM-dd hh:mm:ss a zzz",
    );

    const finalData = {
      parishes: filteredData,
      lastUpdated,
    };

    const kvClient = await getKVClient();
    kvClient.setFireWeatherData(finalData);

    return new Response(JSON.stringify(finalData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // TODO: Improve error handling to more
    // specifically describe parsing errors
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

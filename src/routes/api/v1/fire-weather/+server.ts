import { parse } from "csv-parse/sync";

export async function POST({ request }) {
  try {
    const arrayBuffer = await request.arrayBuffer();
    const decoder = new TextDecoder();
    const csvString = decoder.decode(arrayBuffer);

    const fireData = await parse(csvString, {
      columns: true,
      skip_empty_lines: true,
    });

    return new Response(JSON.stringify(fireData), {
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

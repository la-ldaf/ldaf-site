import { error } from "@sveltejs/kit";
import contentfulFetch from "$lib/services/contentful-fetch";

const query = `
{
  testRichText(id: "V7ibT9I8Vg99iKsDgLhsK") {
    title
    body {
      json
    }
  }
}
`;

export async function load() {
  const response = await contentfulFetch(query);
  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    });
  }
  const { data } = await response.json();
  return data;
}

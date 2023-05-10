import { VERCEL, CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";

const contentfulFetch = async (query: string): Promise<false | Response> => {
  if (VERCEL !== "1") {
    return Promise.resolve(false);
  } else {
    const url = "https://graphql.contentful.com/content/v1/spaces/" + CONTENTFUL_SPACE_ID;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + CONTENTFUL_DELIVERY_API_TOKEN,
      },
      body: JSON.stringify({ query }),
    });

    return response;
  }
};

export default contentfulFetch;

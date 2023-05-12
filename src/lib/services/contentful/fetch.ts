import { VERCEL, CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import type { Query } from "./schema";

// Re-evaluate utils using env vars on each request to ensure tests can
//   properly mock and overwrite them.
const contentfulConnected = (): boolean =>
  !!(VERCEL === "1" && CONTENTFUL_SPACE_ID && CONTENTFUL_DELIVERY_API_TOKEN);

const graphApiUrl = (): string =>
  `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

const graphApiOptions = () => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CONTENTFUL_DELIVERY_API_TOKEN}`,
  },
});

// TODO: Setup type def for GraphQL query parameter.
const contentfulFetch = async (query: string): Promise<false | Query> => {
  if (contentfulConnected()) {
    const response = await fetch(graphApiUrl(), {
      ...graphApiOptions(),
      body: JSON.stringify({ query }),
    });
    if (response && response.ok) {
      const { data } = await response.json();
      return data;
    }
  }
  return Promise.resolve(false);
};

export default contentfulFetch;

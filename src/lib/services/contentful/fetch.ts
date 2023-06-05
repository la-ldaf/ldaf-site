import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";

// Re-evaluate utils using env vars on each request to ensure tests can
//   properly mock and overwrite them.
export const contentfulConnected = (): boolean =>
  !!(CONTENTFUL_SPACE_ID && CONTENTFUL_DELIVERY_API_TOKEN);

const graphApiUrl = (): string =>
  `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

const graphApiOptions = () => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CONTENTFUL_DELIVERY_API_TOKEN}`,
  },
});

const contentfulFetch = async <T>(query: string): Promise<false | T> => {
  if (contentfulConnected()) {
    const response = await fetch(graphApiUrl(), {
      ...graphApiOptions(),
      body: JSON.stringify({ query }),
    });
    if (response && response.ok) {
      const { data } = await response.json();
      return data as T;
    }
  }
  return Promise.resolve(false);
};

export default contentfulFetch;

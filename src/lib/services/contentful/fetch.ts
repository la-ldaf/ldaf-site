import { VERCEL, CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";

const contentfulConnected = !!(
  VERCEL === "1" &&
  CONTENTFUL_SPACE_ID &&
  CONTENTFUL_DELIVERY_API_TOKEN
);

const graphApiUrl = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;
const graphApiOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CONTENTFUL_DELIVERY_API_TOKEN}`,
  },
};

// TODO: Setup type def for GraphQL query parameter.
const contentfulFetch = async (query: string): Promise<false | Response> => {
  if (contentfulConnected) {
    return await fetch(graphApiUrl, {
      ...graphApiOptions,
      body: JSON.stringify({ query }),
    });
  } else {
    return Promise.resolve(false);
  }
};

export default contentfulFetch;

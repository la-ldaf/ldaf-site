import { createClient, type ContentfulClientApi } from "contentful";
import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";

// TODO: refactor to a reusable helper function that wraps contenfulClient
export async function load() {
  const contentfulClient: ContentfulClientApi<undefined> = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_DELIVERY_API_TOKEN,
  });

  const title = await contentfulClient.getEntry("5k6saMkIV7PHFhNDxmZiIG");
  const body = await contentfulClient.getEntry("1VCVunA3sIV5Ch1qGHEKZZ");

  return {
    title: title.fields.body,
    body: body.fields.body,
  };
}
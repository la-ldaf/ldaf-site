import contentful, { type ContentfulClientApi, type EntryFieldTypes } from "contentful";
import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";

type EntrySkeleton = {
  contentTypeId: "testRichText";
  fields: { body: EntryFieldTypes.RichText };
};

// TODO: refactor to a reusable helper function that wraps contenfulClient
export async function load() {
  const contentfulClient: ContentfulClientApi<undefined> = contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_DELIVERY_API_TOKEN,
  });

  const title = await contentfulClient.getEntry<EntrySkeleton>("5k6saMkIV7PHFhNDxmZiIG");
  const body = await contentfulClient.getEntry<EntrySkeleton>("1VCVunA3sIV5Ch1qGHEKZZ");

  return {
    title: title.fields.body,
    body: body.fields.body,
  };
}

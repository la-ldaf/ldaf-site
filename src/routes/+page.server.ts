import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import gql from "graphql-tag";
import getContentfulClient from "$lib/services/contentful";
import { homepageTestData } from "$lib/components/ContentfulRichText/__tests__/documents";
import type { EntriesQuery } from "./$queries.generated";

const query = gql`
  query Entries {
    titleEntry: testRichText(id: "5k6saMkIV7PHFhNDxmZiIG") {
      body {
        json
      }
    }
    bodyEntry: testRichText(id: "1VCVunA3sIV5Ch1qGHEKZZ") {
      body {
        json
      }
    }
  }
`;

// TODO: refactor to a reusable helper function that wraps contenfulClient
export async function load({ fetch }) {
  if (CONTENTFUL_SPACE_ID && CONTENTFUL_DELIVERY_API_TOKEN) {
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
      fetch,
    });

    const { titleEntry, bodyEntry } = await client.fetch<EntriesQuery>(query);

    return {
      title: titleEntry?.body?.json,
      body: bodyEntry?.body?.json,
    };
  } else {
    return {
      title: homepageTestData.title.document,
      body: homepageTestData.body.document,
    };
  }
}

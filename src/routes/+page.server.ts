import gql from "graphql-tag";
import type { Document } from "@contentful/rich-text-types";
import { homepageTestData } from "$lib/components/ContentfulRichText/__tests__/documents";
import type { EntriesQuery } from "./$queries.generated";

const query = gql`
  query Entries($preview: Boolean = false) {
    titleEntry: testRichText(id: "5k6saMkIV7PHFhNDxmZiIG", preview: $preview) {
      body {
        json
      }
    }
    bodyEntry: testRichText(id: "1VCVunA3sIV5Ch1qGHEKZZ", preview: $preview) {
      body {
        json
      }
    }
  }
`;

// TODO: refactor to a reusable helper function that wraps contenfulClient
export const load = async ({ locals: { contentfulClient } }) => {
  if (!contentfulClient) {
    return {
      title: homepageTestData.title.document,
      body: homepageTestData.body.document,
    };
  }

  const { titleEntry, bodyEntry } = await contentfulClient.fetch<EntriesQuery>(query);

  return {
    title: titleEntry?.body?.json as Document,
    body: bodyEntry?.body?.json as Document,
  };
};

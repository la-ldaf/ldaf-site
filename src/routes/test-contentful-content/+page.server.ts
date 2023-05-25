import gql from "graphql-tag";
import { error } from "@sveltejs/kit";
import contentfulManagement from "contentful-management";
const { createClient: createManagementClient } = contentfulManagement;
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_API_TOKEN,
  CONTENTFUL_PREVIEW_API_TOKEN,
} from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import { markdownDocument } from "$lib/components/ContentfulRichText/__tests__/documents";
import type { Document } from "@contentful/rich-text-types";
import type { EntryQuery } from "./$queries.generated";

const query = gql`
  query Entry($preview: Boolean = false) {
    testRichText(id: "5rnSyvGBYQcFj5orQd8aRN", preview: $preview) {
      title
      body {
        json
      }
    }
  }
`;

export const load = async ({ url, cookies }) => {
  const { loc: _, ...sanitizedQuery } = query;
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) {
    return {
      query: sanitizedQuery,
      document: markdownDocument.document,
    };
  }

  const isPreview = url.searchParams.has("preview");

  if (isPreview) {
    const accessToken = cookies.get("ldafUserToken");
    if (!accessToken) throw error(401, { message: "You must log in to preview content!" });
    const managementClient = createManagementClient({ accessToken });
    try {
      await managementClient.getCurrentUser();
    } catch (err) {
      throw error(401, { message: "You must log in to preview content!" });
    }
  }

  const clientOptions = {
    spaceID: CONTENTFUL_SPACE_ID,
  };

  const client = isPreview
    ? getContentfulClient({
        ...clientOptions,
        token: CONTENTFUL_PREVIEW_API_TOKEN,
        preview: true,
      })
    : getContentfulClient({ ...clientOptions, token: CONTENTFUL_DELIVERY_API_TOKEN });

  const data = await client.fetch<EntryQuery>(query);
  if (data) {
    const document = data?.testRichText?.body?.json as Document | undefined | null;
    return {
      query: sanitizedQuery,
      document: document || markdownDocument.document,
    };
  } else {
    return {
      query: sanitizedQuery,
      document: markdownDocument.document,
    };
  }
};

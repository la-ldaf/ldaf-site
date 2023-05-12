import type { PageServerLoad } from "./$types";
import { getClient as getContentfulClient } from "$lib/server/contentful-client";
import type { TestRichTextEntrySkeleton } from "./types";
import { env } from "$env/dynamic/public";

export const load = (async () => {
  const client = getContentfulClient();
  if (!client) return {};
  const { PUBLIC_CONTENTFUL_TEST_ENTRY_ID } = env;
  if (!PUBLIC_CONTENTFUL_TEST_ENTRY_ID) return {};
  return {
    entry: await client.getEntry<TestRichTextEntrySkeleton>(PUBLIC_CONTENTFUL_TEST_ENTRY_ID),
  };
}) satisfies PageServerLoad;

import type { PageServerLoad } from "./$types";
import { getClient as getContentfulClient } from "$lib/server/contentful-client";
import type { TestRichTextEntrySkeleton } from "./types";
import { env } from "$env/dynamic/public";

export const load = (async ({ url }) => {
  /* const preview = url.searchParams.get("preview") !== null; */
  const preview = false;
  const client = getContentfulClient({ preview });
  if (!client) return {};
  const { PUBLIC_TEST_ENTRY_ID } = env;
  if (!PUBLIC_TEST_ENTRY_ID) return {};
  return {
    entry: await client.getEntry<TestRichTextEntrySkeleton>(PUBLIC_TEST_ENTRY_ID),
  };
}) satisfies PageServerLoad;

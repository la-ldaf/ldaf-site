import algoliasearch from "algoliasearch";
import instantsearch from "instantsearch.js";
import { hitTemplate } from "./searchHelpers";

export async function load() {
  const APP_ID = "9IIDYROXZ5";
  const API_KEY = "dcb19121a82a95ceafc9f00fb74c3a1c";
  const SEARCH_INDEX = "demo_media";
  const client = algoliasearch(APP_ID, API_KEY);
  const index = client.initIndex(SEARCH_INDEX);

  index.setSettings({
    // Select the attributes you want to search in
    searchableAttributes: ["post_title", "author_name", "categories", "content"],
    // Define business metrics for ranking and sorting
    customRanking: ["desc(post_date)", "desc(record_index)"],
    // Set up some attributes to filter results on
    attributesForFaceting: ["categories"],
    // Define the attribute we want to distinct on
    attributeForDistinct: "post_id",
  });

  const result = await fetch("https://alg.li/doc-media.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      return index.saveObjects(posts, {
        autoGenerateObjectIDIfNotExist: true,
      });
    });

  return {
    result,
  };
}

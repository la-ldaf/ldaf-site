import { describe, expect, it, vi, type Mock } from "vitest";
import * as envVars from "$env/static/private";
import contentfulFetch from "./fetch";

vi.mock("$env/static/private");
type EnvVarName = "VERCEL" | "CONTENTFUL_SPACE_ID" | "CONTENTFUL_DELIVERY_API_TOKEN";
type EnvVars = Record<EnvVarName, string>;
const setEnvVars = (vars: EnvVars) => {
  let key: keyof EnvVars;
  for (key in vars) {
    (envVars as EnvVars)[key] = vars[key];
  }
};

const query = "{ some { graphql { query } } }";

describe("Contentful Fetch", () => {
  beforeEach(() => {
    // Re-initialize fetch mock every time (since we're clearing it every time).
    global.fetch = vi.fn(async () => Promise.resolve(true)) as Mock;
  });

  afterEach(() => {
    // Clear mock history and reset implementations to empty functions.
    vi.resetAllMocks();
  });

  it("does not call Contentful API if env vars are not properly declared", async () => {
    setEnvVars({
      VERCEL: "",
      CONTENTFUL_SPACE_ID: "",
      CONTENTFUL_DELIVERY_API_TOKEN: "",
    });
    const response = await contentfulFetch(query);
    expect(fetch).not.toHaveBeenCalled();
    expect(response).toBe(false);
  });

  it("calls Contentful API if env vars are properly declared", async () => {
    setEnvVars({
      VERCEL: "1",
      CONTENTFUL_SPACE_ID: "SPACE_ID",
      CONTENTFUL_DELIVERY_API_TOKEN: "API_TOKEN",
    });
    const response = await contentfulFetch(query);
    expect(fetch).toHaveBeenCalledWith(
      "https://graphql.contentful.com/content/v1/spaces/SPACE_ID",
      {
        body: `{"query":"${query}"}`,
        headers: {
          Authorization: "Bearer API_TOKEN",
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    expect(response).toBe(true);
  });
});

import { describe, expect, it, vi, type Mock } from "vitest";
import getClient, { type Client } from "./graphqlClient";

const query = "{ some { graphql { query } } }";

const sampleData = Symbol("sample return value");

global.fetch = vi.fn(async () =>
  Promise.resolve({ ok: true, json: () => ({ data: sampleData }) }),
) as Mock;

describe("Contentful Fetch", () => {
  it("returns the same client if called with the same arguments", () => {
    const client1 = getClient({
      spaceID: "SPACE_ID",
      token: "API_TOKEN",
      environment: "ENVIRONMENT",
    });
    const client2 = getClient({
      spaceID: "SPACE_ID",
      token: "API_TOKEN",
      environment: "ENVIRONMENT",
    });
    const client3 = getClient({
      spaceID: "SPACE_ID",
      token: "DIFFERENT_TOKEN",
      environment: "ENVIRONMENT",
    });
    expect(client1).toBe(client2);
    expect(client2).not.toBe(client3);
  });

  describe("with an initialized client", () => {
    let client: Client;
    beforeEach(
      () =>
        (client = getClient({
          spaceID: "SPACE_ID",
          token: "API_TOKEN",
          environment: "ENVIRONMENT",
        })),
    );
    afterEach(() => vi.clearAllMocks());

    it("calls Contentful API if env vars are properly declared", async () => {
      const data = await client.fetch(query);
      expect(fetch).toHaveBeenCalledWith(
        "https://graphql.contentful.com/content/v1/spaces/SPACE_ID/environments/ENVIRONMENT",
        {
          body: JSON.stringify({ query, variables: { preview: false } }),
          headers: {
            Authorization: "Bearer API_TOKEN",
            "Content-Type": "application/json",
          },
          method: "POST",
        },
      );
      expect(data).toBe(sampleData);
    });
  });
});

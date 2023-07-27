import { describe, expect, it, vi, type Mock } from "vitest";
import { print as printQuery } from "graphql/language/printer";
import gql from "graphql-tag";
import getClient, { type Client, clearClients } from "./graphqlClient";

const query = gql`
  query Test($preview: Boolean = true) {
    testRichText(id: "test", preview: $preview) {
      title
    }
  }
`;

const sampleData = Symbol("sample return value");

global.fetch = vi.fn(async () =>
  Promise.resolve({ ok: true, json: () => ({ data: sampleData }) })
) as Mock;

afterEach(() => clearClients());

describe("Contentful Fetch", () => {
  it("returns the same client if called with the same arguments", () => {
    const client1 = getClient({ spaceID: "SPACE_ID", token: "API_TOKEN" });
    const client2 = getClient({ spaceID: "SPACE_ID", token: "API_TOKEN" });
    const client3 = getClient({ spaceID: "SPACE_ID", token: "DIFFERENT_TOKEN" });
    expect(client1).toBe(client2);
    expect(client2).not.toBe(client3);
  });

  describe("with an initialized client", () => {
    let client: Client;
    beforeEach(
      () =>
        (client = getClient({ apiPrefix: "example.com", spaceID: "SPACE_ID", token: "API_TOKEN" }))
    );
    afterEach(() => vi.clearAllMocks());

    it("calls Contentful API", async () => {
      const data = await client.fetch(query);
      expect(fetch).toHaveBeenCalledWith("example.com/SPACE_ID", {
        body: JSON.stringify({ query: printQuery(query), variables: { preview: false } }),
        headers: {
          Authorization: "Bearer API_TOKEN",
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      expect(data).toBe(sampleData);
    });
  });

  describe("with an initialized preview client", () => {
    let client: Client;
    beforeEach(
      () =>
        (client = getClient({
          apiPrefix: "example.com",
          spaceID: "SPACE_ID",
          token: "API_TOKEN",
          preview: true,
        }))
    );
    afterEach(() => vi.clearAllMocks());

    it("calls Contentful API with preview variable", async () => {
      const data = await client.fetch(query);
      expect(fetch).toHaveBeenCalledWith("example.com/SPACE_ID", {
        body: JSON.stringify({ query: printQuery(query), variables: { preview: true } }),
        headers: {
          Authorization: "Bearer API_TOKEN",
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      expect(data).toBe(sampleData);
    });
  });
});

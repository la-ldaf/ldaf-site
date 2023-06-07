import type { DocumentNode } from "graphql";
import { print as printQuery } from "graphql/language/printer";

type SpaceID = string;
type Token = string;
type APIPrefix = string;
type Preview = boolean;

const defaultAPIPrefix: APIPrefix = "https://graphql.contentful.com/content/v1/spaces";

type ClientOptions = {
  spaceID: SpaceID;
  token: Token;
  apiPrefix?: APIPrefix;
  preview?: Preview;
  fetch?: typeof global.fetch;
};

const delim = "#" as const;

type ClientKey =
  `${APIPrefix}${typeof delim}${SpaceID}${typeof delim}${Token}${typeof delim}${Preview}`;
const getKeyFromOptions = ({
  spaceID,
  token,
  apiPrefix = defaultAPIPrefix,
  preview = false,
}: ClientOptions): ClientKey => `${apiPrefix}${delim}${spaceID}${delim}${token}${delim}${preview}`;

type ClientFetchOptions<T, V extends Record<string, unknown>> = {
  predicate?: (data: unknown) => data is T;
  variables?: V;
};

type ClientFetch = <T, V extends Record<string, unknown> = Record<never, never>>(
  query: DocumentNode,
  options?: ClientFetchOptions<T, V>
) => Promise<T>;

export type Client = {
  options: ClientOptions;
  key: ClientKey;
  fetch: ClientFetch;
};

const clients = new Map<ClientKey, Client>();

class GraphQLFetchError extends Error {
  constructor(public readonly message: string, public readonly query: DocumentNode) {
    super(message);
  }

  get queryString() {
    return printQuery(this.query);
  }
}

class FailedResponseError extends GraphQLFetchError {
  constructor(public readonly query: DocumentNode, public readonly response: Response) {
    const message = `Got failed response with status ${response.status} ${response.statusText}`;
    super(message, query);
    this.name = "GraphQLFailedResponseError";
  }

  private _responseText: string | undefined;

  private async getResponseText() {
    if (!this._responseText) this._responseText = await this.response.text();
    return this._responseText;
  }

  get responseText() {
    return this.getResponseText();
  }
}

class UnexpectedStructureError extends GraphQLFetchError {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(public readonly query: DocumentNode, public readonly data: any) {
    const message = "Got successful response with unexpected data structure!";
    super(message, query);
    this.name = "GraphQLUnexpectedStructureError";
  }

  get json() {
    return JSON.stringify(this.data);
  }
}

const getClient = ({
  spaceID,
  token,
  apiPrefix = defaultAPIPrefix,
  preview = false,
  fetch = global.fetch,
}: ClientOptions): Client => {
  if (!spaceID) throw new Error("no space ID provided!");
  if (!token) throw new Error("no token provided!");

  const key = getKeyFromOptions({ spaceID, token });
  const existingClient = clients.get(key);
  if (existingClient) return existingClient;

  const client = {
    options: { spaceID, token, apiPrefix, preview },
    key,
    async fetch<T, V extends Record<string, unknown>>(
      query: DocumentNode,
      { predicate, variables }: ClientFetchOptions<T, V> = {}
    ): Promise<T> {
      const { spaceID, token, apiPrefix } = this.options;
      const url = `${apiPrefix}/${spaceID}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query: printQuery(query), variables: { preview, ...variables } }),
      });
      if (!response.ok) throw new FailedResponseError(query, response);
      const { data } = await response.json();
      if (!data || (predicate && !predicate(data))) throw new UnexpectedStructureError(query, data);
      return data as T;
    },
  } satisfies Client;

  clients.set(key, client);

  return client;
};

export default getClient;

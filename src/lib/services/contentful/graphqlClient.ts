import { type DocumentNode, print as printQuery } from "graphql";
import { FailedResponseError, UnexpectedStructureError } from "./errors";

type SpaceID = string;
type Token = string;
type APIEndpoint = string;

const defaultAPIEndpoint: APIEndpoint = "https://graphql.contentful.com/content/v1/spaces";

type ClientOptions = {
  spaceID: SpaceID;
  token: Token;
  apiEndpoint?: APIEndpoint;
  fetch?: typeof global.fetch;
};

const delim = "#" as const;
type Delim = typeof delim;
type ClientKey = `${APIEndpoint}${Delim}${SpaceID}${Delim}${Token}`;
const getKeyFromOptions = ({
  spaceID,
  token,
  apiEndpoint = defaultAPIEndpoint,
}: ClientOptions): ClientKey => `${apiEndpoint}${delim}${spaceID}${delim}${token}`;

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

const getClient = ({
  spaceID,
  token,
  apiEndpoint = defaultAPIEndpoint,
  fetch = global.fetch,
}: ClientOptions): Client => {
  const key = getKeyFromOptions({ spaceID, token });
  const existingClient = clients.get(key);
  if (existingClient) return existingClient;

  const client = {
    options: { spaceID, token, apiEndpoint },
    key,
    async fetch<T, V extends Record<string, unknown>>(
      query: DocumentNode,
      { predicate, variables }: ClientFetchOptions<T, V> = {}
    ): Promise<T> {
      const { spaceID, token, apiEndpoint } = this.options;
      const url = `${apiEndpoint}/${spaceID}`;
      const requestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query: printQuery(query), variables }),
      };
      const response = await fetch(url, requestInit);
      if (!response.ok) throw new FailedResponseError(query, url, requestInit, response);
      const { data } = await response.json();
      if (!data || (predicate && !predicate(data))) throw new UnexpectedStructureError(query, data);
      return data as T;
    },
  };
  clients.set(key, client);
  return client;
};

export default getClient;

import type { DocumentNode } from "graphql";
import { print as printQuery } from "graphql/language/printer";
import { FailedResponseError, UnexpectedStructureError } from "./errors";

type SpaceID = string;
type Token = string;
type APIEndpoint = string;
type Preview = boolean;

const defaultAPIEndpoint: APIEndpoint = "https://graphql.contentful.com/content/v1/spaces";

type ClientOptions = {
  spaceID: SpaceID;
  token: Token;
  apiEndpoint?: APIEndpoint;
  preview?: Preview;
  fetch?: typeof global.fetch;
};

const delim = "#" as const;
type Delim = typeof delim;
type ClientKey = `${APIEndpoint}${Delim}${SpaceID}${Delim}${Token}${Delim}${Preview}`;
const getKeyFromOptions = ({
  spaceID,
  token,
  apiEndpoint = defaultAPIEndpoint,
  preview = false,
}: ClientOptions): ClientKey =>
  `${apiEndpoint}${delim}${spaceID}${delim}${token}${delim}${preview}`;

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
  preview = false,
  fetch = global.fetch,
}: ClientOptions): Client => {
  if (!spaceID) throw new Error("no space ID provided!");
  if (!token) throw new Error("no token provided!");

  const key = getKeyFromOptions({ apiEndpoint, spaceID, token });
  const existingClient = clients.get(key);
  if (existingClient) return existingClient;

  const client = {
    options: { spaceID, token, apiEndpoint, preview },
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
        body: JSON.stringify({ query: printQuery(query), variables: { ...variables, preview } }),
      };
      const response = await fetch(url, requestInit);
      if (!response.ok) throw new FailedResponseError(query, url, requestInit, response);
      const { data } = await response.json();
      if (!data || (predicate && !predicate(data))) throw new UnexpectedStructureError(query, data);
      return data as T;
    },
  } satisfies Client;

  clients.set(key, client);

  return client;
};

export const clearClients = () => clients.clear();

export default getClient;

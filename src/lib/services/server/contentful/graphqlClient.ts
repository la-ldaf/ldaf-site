import { CONTENTFUL_DEFAULT_ENVIRONMENT } from "$env/static/private";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";

type SpaceID = string;
type Environment = string;
type Token = string;
type APIPrefix = string;
type Preview = boolean;

const defaultAPIPrefix: APIPrefix = "https://graphql.contentful.com/content/v1/spaces";

type ClientOptions = {
  spaceID: SpaceID;
  environment?: Environment;
  token: Token;
  apiPrefix?: APIPrefix;
  preview?: Preview;
};

const delim = "#" as const;
type Delim = typeof delim;

type ClientKey =
  `${APIPrefix}${Delim}${SpaceID}${Delim}${Environment}${Delim}${Token}${Delim}${Preview}`;
const getKeyFromOptions = ({
  spaceID,
  environment,
  token,
  apiPrefix = defaultAPIPrefix,
  preview = false,
}: ClientOptions): ClientKey =>
  `${apiPrefix}${delim}${spaceID}${delim}${environment}${delim}${token}${delim}${preview}`;

export type Client = {
  options: ClientOptions;
  key: ClientKey;
  fetch: <T>(query: string, options?: { variables?: Record<string, unknown> }) => Promise<T>;
};

const clients = new Map<ClientKey, Client>();

const getClient = ({
  spaceID,
  environment = CONTENTFUL_DEFAULT_ENVIRONMENT,
  token,
  preview = false,
  fetch = global.fetch,
  apiPrefix = defaultAPIPrefix,
}: ClientOptions & { fetch?: typeof global.fetch }): Client => {
  const key = getKeyFromOptions({ spaceID, environment, token });
  const existingClient = clients.get(key);
  if (existingClient) return existingClient;

  const client = {
    options: { spaceID, environment, token, apiPrefix, preview },
    key,
    async fetch<T>(
      query: string,
      { variables = {} }: { variables?: Record<string, unknown> } = {},
    ): Promise<T> {
      const { spaceID, environment, token, apiPrefix } = this.options;
      const url = `${apiPrefix}/${spaceID}/environments/${environment}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query, variables: { preview, ...variables } }),
      });
      if (!response.ok) {
        const errorMessage = await getErrorMessageFromResponse(response);
        throw new Error(
          `Got failed response with status code ${response.status} ${response.statusText}${
            errorMessage ? `\n${errorMessage}` : ""
          }`,
        );
      }
      const { data } = await response.json();
      if (!data) throw new Error("Got successful response with unexpected structure!");
      return data as T;
    },
  };
  clients.set(key, client);
  return client;
};

export default getClient;

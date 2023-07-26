import { CONTENTFUL_DEFAULT_ENVIRONMENT } from "$env/static/private";

type SpaceID = string;
type Environment = string;
type Token = string;
type APIPrefix = string;

const defaultAPIPrefix: APIPrefix = "https://graphql.contentful.com/content/v1/spaces";

type ClientOptions = {
  spaceID: SpaceID;
  environment?: Environment;
  token: Token;
  apiPrefix?: APIPrefix;
};

const delim = "#" as const;

type ClientKey =
  `${APIPrefix}${typeof delim}${SpaceID}${typeof delim}${Environment}${typeof delim}${Token}`;
const getKeyFromOptions = ({
  spaceID,
  environment,
  token,
  apiPrefix = defaultAPIPrefix,
}: ClientOptions): ClientKey =>
  `${apiPrefix}${delim}${spaceID}${delim}${environment}${delim}${token}`;

export type Client = {
  options: ClientOptions;
  key: ClientKey;
  fetch: <T>(query: string) => Promise<T>;
};

const clients = new Map<ClientKey, Client>();

const getClient = ({
  spaceID,
  environment = CONTENTFUL_DEFAULT_ENVIRONMENT,
  token,
  apiPrefix = defaultAPIPrefix,
}: ClientOptions): Client => {
  const key = getKeyFromOptions({ spaceID, environment, token });
  const existingClient = clients.get(key);
  if (existingClient) return existingClient;

  const client = {
    options: { spaceID, environment, token, apiPrefix },
    key,
    async fetch<T>(query: string): Promise<T> {
      const { spaceID, environment, token, apiPrefix } = this.options;
      const url = `${apiPrefix}/${spaceID}/environments/${environment}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
      });
      if (!response.ok) {
        throw new Error(
          `Got failed response with status code ${response.status} ${response.statusText}`
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

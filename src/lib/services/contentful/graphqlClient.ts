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

export type Client = {
  options: ClientOptions;
  key: ClientKey;
  fetch: <T>(query: string) => Promise<T>;
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
    async fetch<T>(query: string): Promise<T> {
      const { spaceID, token, apiEndpoint } = this.options;
      const url = `${apiEndpoint}/${spaceID}`;
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

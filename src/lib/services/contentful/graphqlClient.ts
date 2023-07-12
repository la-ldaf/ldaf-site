import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";

type SpaceID = string;
type Token = string;
type APIPrefix = string;

const defaultAPIPrefix: APIPrefix = "https://graphql.contentful.com/content/v1/spaces";

type ClientOptions = {
  spaceID: SpaceID;
  token: Token;
  apiPrefix?: APIPrefix;
};

const delim = "#" as const;

type ClientKey = `${APIPrefix}${typeof delim}${SpaceID}${typeof delim}${Token}`;
const getKeyFromOptions = ({
  spaceID,
  token,
  apiPrefix = defaultAPIPrefix,
}: ClientOptions): ClientKey => `${apiPrefix}${delim}${spaceID}${delim}${token}`;

export type Client = {
  options: ClientOptions;
  key: ClientKey;
  fetch: <T>(query: string) => Promise<T>;
};

const clients = new Map<ClientKey, Client>();

const getClient = ({ spaceID, token, apiPrefix = defaultAPIPrefix }: ClientOptions): Client => {
  const key = getKeyFromOptions({ spaceID, token });
  const existingClient = clients.get(key);
  if (existingClient) return existingClient;

  const client = {
    options: { spaceID, token, apiPrefix },
    key,
    async fetch<T>(query: string): Promise<T> {
      const { spaceID, token, apiPrefix } = this.options;
      const url = `${apiPrefix}/${spaceID}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
      });
      if (!response.ok) {
        const errorMessage = await getErrorMessageFromResponse(response);
        throw new Error(
          `Got failed response with status code ${response.status} ${response.statusText}${
            errorMessage ? `\n${errorMessage}` : ""
          }`
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

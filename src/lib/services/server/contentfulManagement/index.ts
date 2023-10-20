import { CONTENTFUL_MANAGEMENT_API_ENDPOINT } from "$env/static/private";
import type { ServerUser } from "$lib/server/types";
import getCurrentUser from "./getCurrentUser";

type Client = {
  options: { token: string; apiEndpoint: string };
  getCurrentUser: () => Promise<ServerUser>;
};

const getClient = ({
  token,
  fetch = global.fetch,
  apiEndpoint = CONTENTFUL_MANAGEMENT_API_ENDPOINT,
}: {
  fetch: typeof global.fetch;
  token: string;
  apiEndpoint: string;
}): Client => {
  const client: Client = {
    options: { token, apiEndpoint },
    async getCurrentUser() {
      return getCurrentUser({ token, apiEndpoint, fetch });
    },
  };
  return client;
};

export default getClient;

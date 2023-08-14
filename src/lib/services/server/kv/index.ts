import { createClient as createRedisClient } from "redis";

export type Client = {
  getBlurhashByURL: (url: string) => Promise<string | null>;
  setBlurhashByURL: (url: string, blurhash: string) => Promise<void>;
};

type None = Record<never, never>;

const keys = {
  blurhashByURL: "blurhashByURL",
};

type ClientOptions = {
  url: string;
};

type ClientOptionsInit = Partial<ClientOptions>;

const getClientKey = (options: ClientOptions) => options.url;
const clients = new Map<string, Client>();

const defaultURL = "redis://localhost";

export const createClient = async ({
  url = defaultURL,
}: ClientOptionsInit = {}): Promise<Client> => {
  const parsedURL = new URL(url);

  // "localhost" is the hostname used when running a redis server locally on the dev machine. "kv"
  // is the hostname used when running in Docker
  const useTLS = !(parsedURL.hostname === "localhost" || parsedURL.hostname === "kv");
  const redisClient = createRedisClient<None, None, None>({
    url,
    socket: { tls: useTLS },
  });

  redisClient.on("error", (err) => {
    console.error(err);
  });

  const tryToConnect = async () => {
    if (redisClient.isOpen) return;
    try {
      await redisClient.connect();
    } catch (err) {
      console.error(err);
    }
  };

  tryToConnect();

  return {
    getBlurhashByURL: async (url) => {
      try {
        await tryToConnect();
        return await redisClient.get(`${keys.blurhashByURL}:${url}`);
      } catch (err) {
        // TODO: better logging
        console.error(err);
        return null;
      }
    },
    setBlurhashByURL: async (url, blurhash) => {
      try {
        await tryToConnect();
        const result = await redisClient.set(`${keys.blurhashByURL}:${url}`, blurhash);
        if (result !== "OK") {
          // TODO: better logging
          console.error(new Error("could not set blurhash in KV store"));
        }
      } catch (err) {
        // TODO: better logging
        console.error(err);
      }
    },
  };
};

export const getClient = async ({ url = "redis://localhost" }: ClientOptionsInit = {}) => {
  const clientOptions = { url };
  const key = getClientKey(clientOptions);
  const existingClient = clients.get(key);
  if (existingClient) return existingClient;
  const newClient = await createClient(clientOptions);
  clients.set(key, newClient);
  return newClient;
};

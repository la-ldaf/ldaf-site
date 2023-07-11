import { sequence } from "@sveltejs/kit/hooks";

export { default as handleError } from "./hooks/server/handleError";

import handleCSP from "./hooks/server/handleCSP";
import handlePreload from "./hooks/server/handlePreload";
import handleSetupLogger from "./hooks/server/handleSetupLogger";
import handleSetupRedisClient from "./hooks/server/handleSetupRedisClient";
import handleToken from "./hooks/server/handleToken";

export const handle = sequence(
  handleSetupLogger,
  handleSetupRedisClient,
  handlePreload,
  handleToken,
  handleCSP
);

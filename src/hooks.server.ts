import { sequence } from "@sveltejs/kit/hooks";

import handleSetupKVClient from "./hooks/server/handleSetupKVClient";
import handleSetupContentfulClient from "./hooks/server/handleSetupContentfulClient";
import handlePreload from "./hooks/server/handlePreload";
import handleCurrentUser from "./hooks/server/handleCurrentUser";

export const handle = sequence(
  handleSetupKVClient,
  handleCurrentUser,
  handleSetupContentfulClient,
  handlePreload,
);

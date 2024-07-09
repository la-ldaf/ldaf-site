import { sequence } from "@sveltejs/kit/hooks";

import handleBadActors from "./hooks/server/handleBadActors";
import handlePreload from "./hooks/server/handlePreload";
import handleSetupKVClient from "./hooks/server/handleSetupKVClient";
import handleCurrentUserAndContentfulClient from "./hooks/server/handleCurrentUserAndContentfulClient";

export const handle = sequence(
  handleBadActors,
  handlePreload,
  handleSetupKVClient,
  handleCurrentUserAndContentfulClient,
);

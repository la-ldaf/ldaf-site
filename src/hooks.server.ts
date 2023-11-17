import { sequence } from "@sveltejs/kit/hooks";

import handleSetupKVClient from "./hooks/server/handleSetupKVClient";
import handlePreload from "./hooks/server/handlePreload";
import handleCurrentUserAndContentfulClient from "./hooks/server/handleCurrentUserAndContentfulClient";

export const handle = sequence(
  handlePreload,
  handleSetupKVClient,
  handleCurrentUserAndContentfulClient,
);

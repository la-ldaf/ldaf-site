import { sequence } from "@sveltejs/kit/hooks";

import handleSetupKVClient from "./hooks/server/handleSetupKVClient";
import handleSetupContentfulClient from "./hooks/server/handleSetupContentfulClient";
import handlePreload from "./hooks/server/handlePreload";

export const handle = sequence(handleSetupKVClient, handleSetupContentfulClient, handlePreload);

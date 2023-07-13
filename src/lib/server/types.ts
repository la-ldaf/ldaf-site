import type { CurrentUser } from "$lib/types";

export type ServerUserInfo = CurrentUser & {
  managementAPIToken: string;
};

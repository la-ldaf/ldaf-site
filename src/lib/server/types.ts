import type { User } from "$lib/types";

export type ServerUser = User & {
  managementAPIToken: string;
};

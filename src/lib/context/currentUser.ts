import { writable, type Writable } from "svelte/store";

import type { CurrentUser } from "$lib/types";
export type { CurrentUser };

import { setContext, getContext } from "svelte";

export const key = Symbol("currentUser");

export const setCurrentUserStore = (initialValue?: CurrentUser) =>
  setContext(key, writable<CurrentUser | undefined>(initialValue));
export const getCurrentUserStore = () => getContext<Writable<CurrentUser | undefined>>(key);

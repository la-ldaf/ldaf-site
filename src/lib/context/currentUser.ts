import { writable, type Writable } from "svelte/store";

import type { User } from "$lib/types";
export type { User };

import { setContext, getContext } from "svelte";

export const key = Symbol("currentUser");

export const setCurrentUserStore = (initialValue?: User) =>
  setContext(key, writable<User | undefined>(initialValue));
export const getCurrentUserStore = () => getContext<Writable<User | undefined>>(key);

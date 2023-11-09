import { writable, type Writable } from "svelte/store";

import type { User } from "$lib/types";

type UserStore = Writable<User | undefined>;

export type { User, UserStore };

import { setContext, getContext } from "svelte";

export const key = Symbol("currentUser");

export const setCurrentUserStore = (initialValue?: User) =>
  setContext(key, writable<User | undefined>(initialValue));
export const getCurrentUserStore = () => getContext<UserStore>(key);

import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";
import { deleteCookie, getCookieMap, setCookie, type CookieOptions } from "./cookie";

export default (key: string, options: CookieOptions): Writable<string | undefined | null> => {
  if (!browser) throw new Error("cookieStore must be initialized in the browser");
  const cookieMap = getCookieMap();
  const storedValue = cookieMap.get(key) ?? undefined;
  const store = writable<string | null | undefined>(storedValue);
  store.subscribe((newValue) => {
    if (newValue) {
      setCookie(key, newValue, options);
    } else if (newValue === null) {
      deleteCookie(key);
    }
  });
  return store;
};

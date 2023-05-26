import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";
import { deleteCookie, getCookieMap, setCookie, type CookieOptions } from "./cookie";

export default (key: string, options: CookieOptions): Writable<string | undefined> => {
  if (!browser) throw new Error("cookieStore must be initialized in the browser");
  const cookieMap = getCookieMap();
  const storedValue = cookieMap.get(key) ?? undefined;
  const store = writable<string | undefined>(storedValue);
  store.subscribe((newValue) => {
    if (newValue) {
      console.log("setting cookie", newValue);
      setCookie(key, newValue, options);
    } else {
      console.log("deleting cookie");
      deleteCookie(key);
    }
  });
  return store;
};

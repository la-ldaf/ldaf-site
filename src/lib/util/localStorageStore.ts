import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";
import { localStorageSupport } from "$lib/constants/support";

export default <T>(key: string, initialValue?: T): Writable<T> => {
  if (!browser) throw new Error("localStorageStore must be initialized in the browser");
  if (!localStorageSupport) throw new Error("localStorageStore requires a working localStorage");
  const storedValue = localStorage.getItem(key);
  const init: T = storedValue === null ? initialValue : JSON.parse(storedValue);
  const store = writable<T>(init);
  store.subscribe((newValue) => {
    if (newValue) {
      localStorage.setItem(key, JSON.stringify(newValue));
    } else {
      localStorage.removeItem(key);
    }
  });
  return store;
};

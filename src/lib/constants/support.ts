import { browser } from "$app/environment";

export let intersectionObserverSupport = false;
if (browser) {
  intersectionObserverSupport =
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype;
}

export let lazyImageLoadingSupport = false;
if (browser) {
  lazyImageLoadingSupport = "loading" in HTMLImageElement.prototype;
}

export let localStorageSupport = false;
if (browser) {
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    localStorageSupport = true;
  } catch (err) {
    localStorageSupport = false;
  }
}

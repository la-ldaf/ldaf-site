import { browser } from "$app/environment";

/* c8 ignore start */
export default (...args: Parameters<typeof console.warn>) => {
  if (browser && import.meta.env.MODE === "production") return;
  if (globalThis?.process?.env?.NODE_ENV === "test") return;
  return console.warn(...args);
};
/* c8 ignore stop */

import { browser } from "$app/environment";

export default (...args: Parameters<typeof console.warn>) => {
  if (browser && import.meta.env.MODE === "production") return;
  if (process?.env?.NODE_ENV === "test") return;
  return console.warn(...args);
};

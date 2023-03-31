import { browser } from "$app/environment";

export default (...args: Parameters<typeof console.warn>) => {
  if (browser && import.meta.env.MODE === "production") return;
  return console.warn(...args);
};

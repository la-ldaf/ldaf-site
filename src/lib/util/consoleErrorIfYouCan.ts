export default (...args: Parameters<typeof console.error>): void => {
  if (!console || !(typeof console === "object")) {
    return;
  }
  if ("error" in console && typeof console.error === "function") {
    console.error(...args);
    return;
  }
  if ("log" in console && typeof console.log === "function") {
    console.log(...args);
    return;
  }
};

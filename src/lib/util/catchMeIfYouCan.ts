export default (maybePromise: unknown, callback: (err: unknown) => void) => {
  if (
    maybePromise &&
    typeof maybePromise === "object" &&
    "catch" in maybePromise &&
    typeof maybePromise.catch === "function"
  ) {
    maybePromise.catch(callback);
  }
};

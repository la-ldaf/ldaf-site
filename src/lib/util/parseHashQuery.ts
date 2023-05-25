export default (hash: string): Record<string, string> =>
  Object.fromEntries(
    hash
      .substring(1)
      .split("&")
      .map((pair) => pair.split("="))
  );

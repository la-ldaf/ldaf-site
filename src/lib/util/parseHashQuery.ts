export default (hash: string) =>
  Object.fromEntries(
    hash
      .substring(1)
      .split("&")
      .map((pair) => pair.split("="))
  );

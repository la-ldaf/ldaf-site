export default (hash: string): Record<string, string> => {
  return Object.fromEntries(
    hash
      .substring(1) // #
      .split("&")
      .map((pair) => pair.split("="))
      .map(([key, value]) => [key, value ?? ""]),
  );
};

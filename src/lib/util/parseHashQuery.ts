export default (hash: string): Record<string, string | boolean> => {
  const queryStart = hash.indexOf("?");
  if (!queryStart) return {};
  return Object.fromEntries(
    hash
      .substring(queryStart + 1)
      .split("&")
      .map((pair) => pair.split("="))
      .map(([key, value]) => [key, value || true])
  );
};

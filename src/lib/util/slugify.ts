// very basic slugify, currently only in use in tests
export default (s: string) =>
  s
    .toLowerCase()
    .replaceAll(/[^a-z\s-_]/g, "")
    .trim()
    .replaceAll(/\s+/g, " ")
    .replaceAll(" ", "-");

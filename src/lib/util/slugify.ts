// Function goals:
// - replace ampersands with "and" (preserve url
// legibility without breaking routing)
// - strip out everything except characters, digits,
// and whitespace, then convert to Kebab case.
// - E.g. "Title 2: This time it's personal"
// becomes "title-2-this-time-its-personal"
export default (s: string) =>
  s
    .toLowerCase()
    .replaceAll(/&/g, "and")
    .replaceAll(/[^a-z0-9\s-_]/g, "")
    .trim()
    .replaceAll(/\s+/g, "-");

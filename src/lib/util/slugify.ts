/// strip out everything except characters, digits,
// and whitespace, then convert to Kebab case.
// E.g. "Title 2: This time it's personal"
// becomes "title-2-this-time-its-personal"
export default (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-_]/g, "")
    .split(" ")
    .join("-");

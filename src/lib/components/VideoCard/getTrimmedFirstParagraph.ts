export default (str: string, maxLength: number) => {
  const firstParagraph = str.replace(/\n[\s\S]*$/, ""); // remove everything after the first newline
  if (firstParagraph.length <= maxLength) return firstParagraph;
  const trimmed = firstParagraph.slice(0, maxLength); // limit to maxDescriptionLength
  return trimmed.replace(/\s[^\s]*?$/, ""); // remove everything after the start of the last whitespace character
};

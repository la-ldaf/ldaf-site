// Run this file to generate JSON rich text files from every markdown file in this directory
const path = require("path");
const fs = require("fs/promises");
const { richTextFromMarkdown } = require("@contentful/rich-text-from-markdown");
const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");

(async () => {
  const markdownDocumentFilenames = (await fs.readdir(__dirname)).filter((filename) =>
    filename.endsWith(".md")
  );

  console.log(`processing the following files:
  ${markdownDocumentFilenames.join("\n  ")}`);

  const newFilePromises = markdownDocumentFilenames.map(async (filename) => {
    const newFilename = `${filename}.json`;
    const htmlFilename = `${filename}.html`;

    let json, richText;
    try {
      console.log(`${filename}: reading`);
      const contents = await fs.readFile(path.join(__dirname, filename), "utf8");

      console.log(`${filename}: processing markdown to rich text`);
      richText = await richTextFromMarkdown(contents);

      console.log(`${filename}: processing rich text to JSON`);
      json = JSON.stringify(richText);
    } catch (err) {
      throw new Error(`failed to process ${filename}`, { cause: err });
    }

    try {
      console.log(`${filename}: writing JSON file`);
      await fs.writeFile(path.join(__dirname, newFilename), json + "\n");
    } catch (err) {
      throw new Error(`failed to write ${newFilename}`, { cause: err });
    }

    let html;
    try {
      console.log(`${filename}: compiling document to HTML`);
      html = documentToHtmlString(richText);
    } catch (err) {
      throw new Error(`failed to generate HTML document from ${filename}`);
    }

    try {
      console.log(`${filename}: writing HTML file`);
      await fs.writeFile(path.join(__dirname, htmlFilename), html);
    } catch (err) {
      throw new Error(`failed to write ${htmlFilename}`);
    }
  });

  const results = await Promise.allSettled(newFilePromises);

  const failedResults = results.filter((result) => result.status === "rejected");

  if (failedResults.length === 0) {
    console.log("All files written successfully!");
  } else {
    failedResults.forEach(({ reason }) => {
      console.error(reason.message);
      reason.cause && console.error(reason.cause);
    });
  }
})();

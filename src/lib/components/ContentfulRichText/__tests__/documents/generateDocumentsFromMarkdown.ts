// Run this file to generate JSON rich text files from every markdown file in this directory
import path from "path";
import fs from "fs/promises";
import richTextTypes, {
  type Document,
  type AssetLinkBlock,
  type Block,
  type Inline,
  type Node,
} from "@contentful/rich-text-types";
const { MARKS, BLOCKS } = richTextTypes;
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import prettier from "prettier";
import escapeRegExp from "lodash/escapeRegExp";
import type { ImageAssetLink, Link, Links } from "./types";
import fakeAssets from "./fakeAssets";

const importURL = new URL(import.meta.url);
const __dirname = path
  .dirname(importURL.pathname)
  .replace(new RegExp(`^${escapeRegExp(path.resolve("."))}/`), "");

const isAssetBlock = (node: Block | Inline): node is AssetLinkBlock =>
  node.nodeType === "embedded-asset-block";

const isImageAsset = (node: Link): node is ImageAssetLink => node.contentType.startsWith("image/");

const printDocument = (document: Document, links: Links) =>
  documentToHtmlString(document, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        if (!isAssetBlock(node)) throw new Error(`got unexpected node type: ${node.nodeType}`);
        const assetID = node.data.target.sys.id;
        const asset = links.assets.block.find(({ sys: { id } }) => id === assetID);
        if (!asset) throw new Error(`asset ${assetID} not found`);
        // TODO: figure out a better way of doing this that doesn't couple this generation code with
        // the Image component
        if (isImageAsset(asset)) {
          return `
            <div role="img" aria-label="${asset.description}">
              <picture>
                <img width="${asset.width}" height="${asset.height}" border="0" alt="" loading="lazy" decoding="async" />
              </picture>
            </div>
          `;
        }

        return `
          <p>
            <a href="${asset.url}">${asset.title}</a><br />
            <em>${asset.description}</em>
          </p>
        `;
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text) => `<strong>${text}</strong>`,
      [MARKS.ITALIC]: (text) => `<em>${text}</em>`,
    },
  });

const markdownDocumentFilenames = (await fs.readdir(__dirname)).filter((filename) =>
  filename.endsWith(".md"),
);

const markdownToDocumentAndLinks = async (
  markdown: string,
): Promise<{ document: Document; links: Links }> => {
  const links: Links = {
    assets: {
      hyperlink: [],
      block: [],
    },
    entries: {
      hyperlink: [],
      block: [],
    },
  };

  const addedAssets = new Set<string>();

  const document = await richTextFromMarkdown(markdown, async (node) => {
    if (node.type !== "image") return null;
    if (!("url" in node)) throw new Error("image node had no url");
    if (typeof node.url !== "string") throw new Error("image url was not a string");
    const fakeAsset = fakeAssets[node.url];
    if (!fakeAsset) throw new Error(`fake asset ${node.url} was not found`);
    const {
      sys: { id },
    } = fakeAsset;
    const returnedNode: Node = {
      nodeType: "embedded-asset-block",
      data: {
        target: {
          sys: {
            id,
          },
        },
      },
    };
    if (!addedAssets.has(id)) {
      links.assets.block.push(fakeAsset);
      addedAssets.add(id);
    }
    return returnedNode;
  });

  return { document, links };
};

console.log(`processing the following files:
  ${markdownDocumentFilenames.join("\n  ")}`);

const newFilePromises = markdownDocumentFilenames.map(async (filename) => {
  const newFilename = `${filename}.json`;
  const htmlFilename = `${filename}.html`;

  let jsonString: string, richText: Document, links: Links;
  try {
    console.log(`${filename}: reading`);
    const contents = await fs.readFile(path.join(__dirname, filename), "utf8");

    console.log(`${filename}: processing markdown to rich text`);
    ({ document: richText, links } = await markdownToDocumentAndLinks(contents));

    console.log(`${filename}: processing rich text to JSON`);
    const rawJSON = JSON.stringify({ document: richText, links });
    console.log(`${filename}: pretty printing JSON`);
    jsonString = await prettier.format(rawJSON, { parser: "json", printWidth: 100 });
  } catch (err) {
    throw new Error(`failed to process ${filename}`, { cause: err });
  }

  try {
    console.log(`${filename}: writing JSON file`);
    await fs.writeFile(path.join(__dirname, newFilename), jsonString);
  } catch (err) {
    throw new Error(`failed to write ${newFilename}`, { cause: err });
  }

  let html;
  try {
    console.log(`${filename}: compiling document to HTML`);
    const rawHTML = printDocument(richText, links);
    console.log(`${filename}: pretty printing HTML`);
    html = await prettier.format(rawHTML, { parser: "html", printWidth: 100 });
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
  failedResults.forEach((result) => {
    if (result.status === "fulfilled") return;
    result.reason?.message && console.error(result.reason.message);
    result.reason?.cause && console.error(result.reason.cause);
  });
  throw new Error("Some files failed to write; see above");
}

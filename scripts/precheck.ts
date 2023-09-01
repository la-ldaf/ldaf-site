#!/usr/bin/env ts-node-esm

import runScript from "./runScript";

await runScript(
  "src/lib/components/ContentfulRichText/__tests__/documents/generateDocumentsFromMarkdown.ts",
);

import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import "$lib/__tests__/extendExpect";
import ContentfulRichText from "./ContentfulRichText.svelte";
import documentTestCases from "./__tests__/documents";

describe("ContentfulRichText", () => {
  Object.entries(documentTestCases).forEach(([label, { document, expectedHTML }]) => {
    it(`renders ${label}`, async () => {
      const { container } = render(ContentfulRichText, { document });
      expect(container?.firstChild?.childNodes).toMatchDOMNodes(expectedHTML);
    });
  });
});

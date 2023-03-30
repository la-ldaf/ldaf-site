import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import "$lib/__test__/extendExpect.ts";
import ContentfulRichText from "./ContentfulRichText.svelte";
import documentTestCases from "./__test__/documents";

describe("ContentfulRichText", () => {
  Object.entries(documentTestCases).forEach(([label, { document, expectedHTML }]) => {
    it(`renders ${label}`, async () => {
      const { container } = render(ContentfulRichText, { document });
      expect(container?.firstChild?.firstChild).toMatchDOM(expectedHTML.trim());
    });
  });
});

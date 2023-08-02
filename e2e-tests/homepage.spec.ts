import { expect, test } from "@playwright/test";

test("index page has expected h1", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: "Department of Agriculture and Forestry\nState of Louisiana",
    })
  ).toBeVisible();
});

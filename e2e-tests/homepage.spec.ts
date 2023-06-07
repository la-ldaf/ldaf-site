import { expect, test } from "@playwright/test";

test("index page has expected h1", async ({ page }) => {
  throw new Error("fail");
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Hello There." })).toBeVisible();
});

import { expect, test } from "@playwright/test";

// Following test was mainly written to see how Playwright tests would differ from component tests.
// TODO: Remove this test once we start building out more end-to-end tests since this is
//       effectively a duplicate of a unit test in NavItem.test.ts.
test("nav items can be expanded and collapsed", async ({ page }) => {
  await page.goto("/");
  const navMenuButton = page.getByText("Animals", { exact: true });
  const subNavLink = page.getByRole("link", { name: "Animal health and safety" });
  // open with click
  await expect(subNavLink).toBeHidden();
  await navMenuButton.click();
  await expect(subNavLink).toBeVisible();
  // close with click
  await navMenuButton.click();
  await expect(subNavLink).toBeHidden();
  // open with keyboard "Enter"
  await navMenuButton.focus();
  await page.keyboard.press("Enter");
  await expect(subNavLink).toBeVisible();
  // close with keyboard "Space"
  await page.keyboard.press("Space");
  await expect(subNavLink).toBeHidden();
  // re-open and expect to stay open during tab nav
  await navMenuButton.click();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await expect(subNavLink).toBeFocused();
  // expect focus loss with keyboard to collapse menu
  await page.keyboard.down("Shift");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.up("Shift");
  await expect(subNavLink).toBeHidden();
  // expect focus loss with mouse to collapse menu
  await navMenuButton.click();
  await page
    .getByRole("heading", { name: "Louisiana Department of Agriculture and Forestry" })
    // Without forcing the click, PlayWright will return "subtree intercepts pointer events" error,
    //   which is rather amusing because that error means that this is working as intended.
    .click({ force: true });
  await expect(subNavLink).toBeHidden();
});

// Following test cannot be run as a component unit test since it relies on navigation.
// TODO: This actually goes to a 404 currently, but still works since the header menu still loads.
test("mobile menu is closed on route change", async ({ page }) => {
  await page.setViewportSize({ width: 400, height: 850 });
  await page.goto("/news");
  const mobileMenuButton = page.getByRole("button", { name: "Menu" }).first();
  const mobileMenuItem = page.getByText("Animals", { exact: true });
  // open the mobile menu
  await expect(mobileMenuButton).toBeVisible();
  await mobileMenuButton.click();
  await expect(mobileMenuItem).toBeVisible();
  // perform navigation by clicking site title
  await page.locator(".ldaf-logo__mobile-title a").first().click();
  await expect(page).toHaveURL("/");
  await expect(mobileMenuItem).toBeHidden();
});

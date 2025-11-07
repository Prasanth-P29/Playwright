import { test, expect } from "@playwright/test";

test("Verify Page URL", async ({page}) => {
    await page.goto("https://github.com/Prasanth-P29");

    const url = await page.url();
    console.log("Url:", url)

    await expect(page).toHaveURL("https://github.com/Prasanth-P29");
})
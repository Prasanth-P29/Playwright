                                            // PlayWright Locators

// DOM is an API Interface provided by Browsers
// Locator - Identifies the element on the page.
// DOM - Document Object Model
// DOM is an API Interface provided by browser.

// 1) page.getByAltText() to locate an element, usually image, by its text alternative.
// 2) page.getByText() to locate by text content.(Non interactive elements)
// 3) page.getByRole() to locate by explicit and implicit accessibility attributes.
// 4) page.getByLabel() to locate a form control by associated label's text.
// 5) page.getByPlaceholder() to locate an input by placeholder.

// 6) page.getByTitle() to locate an element by its title attribute.
// 7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configure

import { test, expect, Locator } from "@playwright/test";

test("Verify Page Logo", async ({page}) => {

    //1. page.getByAltText - to locate an element using the alt attribute value , usually for images
    // identifies images (and similar elements) based on the alt attribute.
    // Use this locator when your element supports alt text such as img and area elements.
    await page.goto("https://demo.nopcommerce.com/");
    const logo: Locator = page.getByAltText("nopCommerce demo store");
    //logo.click(); it do nothng as it is not clickable
    await expect(logo).toBeVisible();


    // 2. page. getByText() - Find an element by the text it contains. You can match by a substring, exact string,
    // Locate by visible text
    // Use this locator to find non interactive elements like div, span, p, etc.
    // For interactive elements like button, a, input, etc. use role locators.
    /*
    <p>welcome</p>
    <div>hellow</div>
    */

    //const text: Locator = page.getByText("Welcome to our store");
    //expect(text).toBeVisible();   

    //await expect(page.getByText("Welcome to our store")).toBeVisible(); // Full String
    //await expect(page.getByText("Welcome to")).toBeVisible(); // Substring
    await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible(); //Regular Expression(case insensitive)



    // 3. page.getByRole() - Locating by Role ( role is not an attribute)
        /* Role locators include buttons, checkboxes, headings, links, lists, tables,
        and many more and follow W3C specifications for ARIA role.
        Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables, etc.

        */

    await page.getByRole("link", {name: 'Register'}).click(); // link with name Register
    await expect(page.getByRole('heading', {name: "Register"})).toBeVisible();  //you can also use getByText() 


    // 4. page.getByLabel() - Locate form control by label's text
        // When to use: Ideal for form fields with visible labels.
    await page.getByLabel('First name').fill("Prasanth");
    await page.getByLabel('Last name').fill("Kumar");
    await page.getByLabel('Email').fill("prasanth.kumar@example.com");


    // 5. page.getByPlaceholder() - find element with a given placeholder text
    // Best for inputs without a label but having a placeholder 
    await page.getByPlaceholder('Search store').fill("Iphone 17 pro max");


    // 6. page.getByTitle() to locate an element by its title attribute.
    // When to use: When your element has a meaningful title attribute.
    await page.goto("file:///C:/Users/pavan/OneDrive/Desktop/playwrightlocators.html")

    //const link: Locator=page.getByTitle("Home page link")
    //expect(link).toHaveText("Home");

    await expect(page.getByTitle("Home page link")).toHaveText("Home");
    await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");


});




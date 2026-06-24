import { test, expect } from '@playwright/test';

// test('my first test',async({page})=>{
//     //  const context = await browser.newContexts();
//     //  const page = await context.newPage();
//      await page.goto("https://playwright.dev/");
//     //  await page.waitForTimeout(5000);
//     await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
// })

//EX 3.1
// test การเข้าถึง  web หา scleter เเล้ว พิมพ์ username and password เเล้วกด login
// test.only('sauceDemo', async ({page}) => {
//     await page.goto("https://www.saucedemo.com/v1/index.html")
//     await page.locator("input#user-name").fill("username")
//     await page.locator("[data-test='password']").fill("password")
//     await page.locator("#login-button").click()
// });

//EX 3.2
// test.only('should fail login', async ({page}) => {
//     await page.goto("https://www.saucedemo.com/v1/index.html")
//     await page.locator("input#user-name").fill("username")
//     await page.locator("[data-test='password']").fill("password")
//     await page.locator("#login-button").click()
//     console.log(await page.locator("[data-test='error']").allTextContents())
//     await expect(page.locator("[data-test='error']")).toContainText("Username and password do not match")
// });

//EX 3.3
//test.only('should fail login with wrong credentials then relogin and pass', async ({ page }) => {
    //Section Login fail
//     await page.goto("https://www.saucedemo.com/v1/index.html")
//     await page.locator("input#user-name").fill("username")
//     await page.locator("[data-test='password']").fill("password")
//     await page.locator("#login-button").click()
    
//     console.log(await page.locator("[data-test='error']").allTextContents())
//     await expect(page.locator("[data-test='error']")).toContainText("Username and password do not match")

//     //Section Login pass
//     await page.locator("input#user-name").fill("")		//การทำกล่องข้อความว่าง
//     await page.locator("[data-test='password']").fill("")
//     await page.locator("input#user-name").fill("standard_user")
//     await page.locator("[data-test='password']").fill("secret_sauce")
//     await page.locator("#login-button").click()
//     await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
//         // เช็คว่าเข้ามาเเล้วตรงกับ url ไหม

//     //Inventory page
//     await page.locator(".inventory_item").first()click()       //ตัวเเรกของ.inventory_item
//     await page.locator(".inventory_item").last()click()	   //ตัวท้าย
//     await page.locator(".inventory_item").nth()click()	   //ตามลำดับนับเเบบ index นับจาก 0
// });

// EX.challenge
// import { test, expect } from '@playwright/test';

// test.only('test script', async ({ page }) =>{
//     await page.goto('https://www.saucedemo.com/')
//     await page.locator("input#user-name").fill('standard_user')
//     await page.locator("input#password").fill('secret_sauce')
//     await page.locator("#login-button").click()

//     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

//     //Inventory page    
//     await page.locator(".inventory_item").first().click()
//     await page.locator(".inventory_item").nth(0).click()
//     await page.locator(".inventory_item").nth(1).click()
//     await page.locator(".inventory_item").nth(2).click()
// })


// EX 3.4 timeout

// test.only('should fail login with wrong credentials then relogin and pass', async ({page}) => {
//     //Section Login fail
//     await page.goto("https://www.saucedemo.com/v1/index.html")
//     await page.locator("#somethingthatisnotreal").click({timeout: 5000})
//     await page.locator("input#user-name").fill("username")
//     await page.locator("[data-test='password']").fill("password")
//     await page.locator("#login-button").click()
//     console.log(await page.locator("[data-test='error']").allTextContents())
//     await expect(page.locator("[data-test='error']")).toContainText("Username and password0 do not match")


    // //Inventory page
    // console.log(await page.locator(".inventory_item").first().textContent())
    // console.log(await page.locator(".inventory_item").allTextContents())
// });

test('basic Ui',async ({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.locator('#dropdowm-menu-1').selectOption('python')
    await page.locator("#checkboxes [value='option-1']").check();
    await page.locator("#checkboxes [value='option-3']").uncheck();

    await page.locator("#radio-buttons [value='blue']").check();

    //assertions
    await expect(page.locator("#dropdowm-menu-1")).toHaveValue('python')
    await expect(page.locator("#checkboxes [value='option-1']")).toBeChecked();
    await expect(page.locator("#checkboxes [value='option-3']")).not.toBeChecked();

    await expect(page.locator("#radio-buttons [value='blue']")).toBeChecked();

    await expect(page.locator("nav[role='navigation']")).toHaveAttribute("class", "navbar navbar-inverse navbar-fixed-top");

})

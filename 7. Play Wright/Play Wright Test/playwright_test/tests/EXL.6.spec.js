const { test, expect, request } = require("@playwright/test");
const { log } = require("console");
const exp = require("constants");

import APIUtils from "../Utils/APIUntils";

const loginData = { userEmail: "hiwale6804@alibrs.com", userPassword: "P@ssw0rd" }
const createOrderData = { orders: [{ country: "Thailand", productOrderedId: "6581ca979fd99c85e8ee7faf" }] }
let token = "";
let orderIDFormAPI = "";

test.beforeAll(async () => {
    //รับ request file มาใช้
    const apiContext = await request.newContext()
    const apiUtil = new APIUtils(apiContext)
    response = await apiUtil.createOrder(createOrderData, loginData);


    //responseLogin
    // const apiContext = await request.newContext()
    // const responseLogin = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: loginData })
    // expect(responseLogin.ok()).toBeTruthy()

    // const responseJason = await responseLogin.json()
    // token = responseJason.token

    // //responseCreateOrder
    // const responseCreateOrder = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
    //     data: createOrderData,
    //     headers: {
    //         'Authorization': token,
    //         "Content-Type": "application/json",
    //     },
    // });
    // const responseCreateOrderJson = await responseCreateOrder.json();
    // orderId = responseCreateOrderJson.orders[0];

});


test('login and select adidas', async ({ page }) => {
    const email = "hiwale6804@alibrs.com"
    // ใช้ token จาก api เข้า dashboard โดยตรง
    await page.addInitScript(value => {
        window.localStorage.setItem("token", value)
    }, token)

    //Login
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("#userEmail").fill(email)
    await page.locator("#userPassword").fill("P@ssw0rd")
    await page.locator("#login").click()

    //Product page
    await page.waitForSelector("div.card-body")
    const products = await page.locator("div.card-body")
    console.log(products)
    for (let i = 0; i < await products.count(); i++) {
        if (await products.nth(i).locator("b").textContent() === "ADIDAS ORIGINAL") {
            await products.nth(i).locator("text= Add To Cart").click()
            break;
        }
    }

    page.locator("div.card-body", { has: page.locator("b:has-text('IPHONE 13 PRO')") }).locator("text= Add To Cart").click()
    await page.waitForTimeout(5000)

    //Assertion
    await page.locator("div.card-body", { has: page.locator("b:has-text('IPHONE 13 PRO')") }).locator("text= Add To Cart").click
    //click cart -> change page completely yet?
    await page.locator("button[routerlink='/dashboard/cart']").click()
    //ใส่ waitForSelector เพื่อให้ โหลดเสร็จก่อน เเล้วเจอ ADIDAS ORIGINAL
    await page.waitForSelector("h3:has-text('ADIDAS ORIGINAL')")

    //check if adidas is visible
    // เเบบที่1
    // await expect(page.locator("h3:has-text('ADIDAS ORIGINAL')")).toBeVisible()
    // เเบบที่2
    expect(await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible()).toBeTruthy()

    //chech if iPhone is visible
    // เเบบที่1
    // await expect(page.locator("h3:has-text('IPHONE 13 PRO')")).toBeVisible()
    // เเบบที่2
    expect(await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible()).toBeTruthy()
    // อาจจะ error ได้เพราะ การโหลดช้า ทำให้ มองไม่เจอ ข้อมูลที่อ้างอิง
    //ไปใส่ auto wait หน้า page ให้ run เสร็จก่อน ชัวกว่า บรรทัด ก่อนได้เลย
    await page.locator("button.btn-primary:has-text('Checkout')").click()


    //Checkout
    //type with delay on the text field country -> "in"
    await page.locator("input[placeholder='Select Country']").pressSequentially("si", { delay: 300 })
    await expect(page.locator("section.ta-results")).toBeVisible()
    //select target country from the dropdown list -> "Singapore"
    //เเบบที่1
    // const dropdownOptions = await page.locator("section.ta-results").locator("button")
    // for (let i = 0; i < await dropdownOptions.count(); i++) {
    //     if (await dropdownOptions.nth(i).textContent() === " Singapore") {
    //         await dropdownOptions.nth(i).click()
    //         break;
    //     }
    // }
    //เเบบที่2  
    await page.locator("section.ta-results").locator("button:has-text(' Singapore')").click()

    await expect(page.locator("input[placeholder='Select Country']")).toHaveValue("Singapore")


    await expect(page.locator("div.user__name label")).toHaveText(email)

    await page.locator("input.txt").nth(1).fill("123")
    await page.locator("input.txt").nth(2).fill("tester")
    await page.locator(".user_address").waitFor({ state: "hidden" })//ไว้ว่อน drop down 
    await page.locator("a.action__submit").click()

    await page.waitForTimeout(5000)

    //Success Landing page
    await expect(page.locator("h1.hero-primary")).toBeVisible()
    console.log(await page.locator("label.ng-star-inserted").textContent())

    // skip to page order
    // await page.locator("button[routerlink='/dashboard/myorders']").click()

    const orderID = await page.locator("tr.ng-star-inserted label").first().textContext()
    console.log(orderID)
    await page.locator("label[routerlink='/dashboard/myorders']").click()

    //Order History page
    await page.waitForSelector("tbody tr");
    const rows = await page.locator("tbody tr");
    for (let i = 0; i < await rows.count(); i++) {
        const rowOrderId = await rows.nth(i).locator("th").textContent()
        console.log('rowID ' + rowOrderId)
        if (orderID.includes(rowOrderId)) {
            await rows.nth(i).locator("td button.btn-primary").click()
            break;
        }
    }


    //View Detail page
    await expect(response.orderIDFormAPI).toContain(await page.locator("div.col-text.-main").textContent())

})


test("getByLabel", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Check me out if you love IceCreams!").click()
    await page.getByLabel("Student").click()

    await page.getByPlaceholder("Password").fill("Password")
    await page.getByRole("button", { name: "Submit" }).click()
    await expect(page.getByText("This is a demo eCommerce web appplication.")).toBeVisible()

    await page.getByRole("link", { name: "Shop" }).click()
    await expect(page.locator("app-card").filter({ hasText: "Samsung Note 8" })).toBeVisible()
    await page.pause()

})

test('goback and forward', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#hide-textbox").click()
    await expect(page.locator("#displayed-text")).toBeHidden()

    // await page.goto("https://playwright.dev/docs/input")
    // await page.goBack()
    // await page.goForward()
})

test('popup and hover', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/",
        { waitUntil: "domcontentloaded" }) // ไม่ต้องรอ resource ทั้งหมดโหลดเสร็จ

    await page.on('dialog', dialog => dialog.accept()) //or .dismiss()
    await page.locator("#confirmbtn").click()

    //hover
    await page.locator("#mousehover").hover()
    await page.locator("a[href='#top']").click()

})

// test('Intercept and Mock Response, No order history', async ({ page }) => {
//     const email = "hiwale6804@alibrs.com";
//     const mockPayload = { data: [], message: "No Orders" };
//     await page.addInitScript((value) => {
//         window.localStorage.setItem("token", value);
//     }, response.token);
//     //Dashboard
//     await page.goto("https://rahulshettyacademy.com/client/");

//     //Intercept & Mock Response of the order history
//     //Listenner to events
//     await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/65c26daea86f8f74dc6fc372")
//     //Mock response here
//     const response = page.request.fetch(route.request());
//     route.fulfill({
//         response: response,
//         body: JSON.stringify(mockPayload),
//     });

// })

// //Click Order History page hyperlink
// await page.locator("button[routerlink='/dashboard/myorders']").click();
// await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/65c26daea86f8f74dc6fc372");

// // Expect text when there's no order history
// await expect(page.getByText(" You have No Orders to show at this time.")).toBeVisible();


test('i frame', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/",
        { waitUntil: "domcontentloaded" })

    const childFrame = page.frameLocator("#courses-iframe")
    await expect(childFrame.locator(".main-header")).toBeVisible()

    // ✅ รอ element ที่จะ click ให้ visible ก่อน แทน waitForLoadState
    const lifetimeLink = childFrame.locator(".main-menu [href='lifetime-access']").first()
    await lifetimeLink.waitFor({ state: "visible" })
    await lifetimeLink.click()

    await page.waitForTimeout(5000)
    let number = await childFrame.locator("div.container-fluid h2").textContent()
    number = number.split(" ")
    console.log("Number: " + number[1])

})




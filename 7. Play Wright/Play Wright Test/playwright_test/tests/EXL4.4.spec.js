import { test, expect } from '@playwright/test';

test('New Tab', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://compendiumdev.co.uk/')

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("a[href='https://eviltester.com']").click()
    ])

    await newPage.waitForLoadState()  // รอให้ tab ใหม่โหลดเสร็จ

    await expect(page.url()).toBe("https://compendiumdev.co.uk/")
    await expect(newPage.url()).toBe("https://www.eviltester.com/")


})
const { test, expect } = require("@playwright/test");

test.describe('setup', () => {
    test('authenticate', async ({ browser }) => {
        // 1. สร้าง Browser Context ใหม่ และเปิดหน้าต่างใหม่
        const context = await browser.newContext();
        const page = await context.newPage();
        
        // 2. ไปยังหน้าเว็บที่ต้องการและทำการล็อกอิน
        await page.goto("https://rahulshettyacademy.com/client/");
        await page.locator("#userEmail").fill("hiwale6804@alibrs.com");
        await page.locator("#userPassword").fill("P@ssw0rd");
        await page.locator("#login").click();
        
        // 3. รอให้โหลดเข้าหน้าแรกสำเร็จ (สังเกตจาก Selector ที่ปรากฏหลังล็อกอิน)
        await page.waitForSelector("div.card-body"); // Login complete
        
        // 4. บันทึกสถานะการล็อกอิน (Cookies & Storage) ลงในไฟล์ state.json
        await context.storageState({ path: 'state.json' });
        await context.close();
    });
});

test.describe('Bypass Login', () => {
    // 5. ดึงไฟล์ state.json มาใช้ เพื่อข้ามขั้นตอนการล็อกอินในเทสถัดไป
    test.use({ storageState: 'state.json' });

    test('Temp', async ({ page }) => {
        // เมื่อเปิดหน้านี้ จะอยู่ในสถานะล็อกอินเรียบร้อยแล้ว
        await page.goto("https://rahulshettyacademy.com/client/");
    });
});




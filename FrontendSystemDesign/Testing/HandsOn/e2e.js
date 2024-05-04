const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        args: ["--window-size=1920,1080"]
    });

    const page = await browser.newPage();

    await page.goto('https://namastedev.com/');

    console.log('Webpage loaded');

    await page.setViewport({ width: 1600, height: 1080 });

    const coursePageLink = ".menu > li:nth-child(3) > a";

    await page.waitForSelector(coursePageLink);

    await page.click(coursePageLink);
})();
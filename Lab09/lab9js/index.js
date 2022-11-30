const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get('https://www.lcwaikiki.by/ru-RU/BY');
        await driver.findElement(By.id('search')).sendKeys('Майка', Key.ENTER);
        await driver.wait(until.titleIs('Майка - LC Waikiki'), 2000);
    } finally {
       // await driver.quit();
    }
})();
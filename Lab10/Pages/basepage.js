var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { By } = require('selenium-webdriver');
const chromeOptions = new chrome.Options().headless().windowSize({ width: 1920, height: 1080 });
var driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
driver.manage().setTimeouts({ implicit: (10000) });

class BasePage {
    constructor() {
        global.driver = driver;
    }
    async goToUrl(theURL) {
        await driver.get(theURL);
    }
    async enterTextByCss(css, searchText) {
        await driver.findElement(By.css(css)).sendKeys(searchText);
    }
    async clickById(id) {
        await driver.findElement(By.id(id)).click();
    }
    async clickByXPath(path) {
        await driver.findElement(By.xpath(path)).click();
    }
    async clickByClass(className) {
        await driver.findElement(By.className(className)).click();
    }
    async closeBrowser() {
        await driver.quit();
    }
    async getUrl() {
        return await driver.getCurrentUrl()
    }

    async getElemById(id) {
        return await driver.findElement(By.id(id));
    }

    async getElementsByClass(name) {
        return await driver.findElements(By.className(name));
    }

    async getElemByXpath(path) {
        return await driver.findElement(By.xpath(path));
    }

    async getTitle() {
        return await driver.getTitle();
    }

    async sleep(x) {
        await driver.sleep(x);
    }

}

module.exports = BasePage;
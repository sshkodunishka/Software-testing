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
    async go_to_url(theURL) {
        await driver.get(theURL);
    }
    async enterTextByCss(css, searchText) {
        await driver.findElement(By.css(css)).sendKeys(searchText);
    }
    async clickById(id) {
        await driver.findElement(By.id(id)).click();
    }
    async closeBrowser() {
        await driver.quit();
    }
}

module.exports = BasePage;
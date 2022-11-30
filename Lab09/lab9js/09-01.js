const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
     try {
        await driver.get('https://pastebin.com');
        await driver.findElement(By.id('postform-text')).sendKeys('Hello from WebDriver');
        await driver.findElement(By.id('select2-postform-expiration-container')).click();
        await driver.findElement(By.xpath("//li[text()='10 Minutes']")).click();
        await driver.findElement(By.id("postform-name")).sendKeys('helloweb');
        await driver.findElement(By.xpath("//button[@class='btn -big']")).click();

       await driver.wait(2000);
    } finally {
      //  await driver.quit();
    }
})();
const { Key } = require('selenium-webdriver');
var BasePage = require('../Pages/basepage');

class HomePage extends BasePage {


    async enterUrl(theURL) {
        await this.goToUrl(theURL);
    }

    async enterSearch(searchText) {
        var searchField = '[id=search]';
        await this.enterTextByCss(searchField, searchText);
        await this.enterTextByCss(searchField, Key.ENTER);
    }

    async selectSize(sizeType) {
        await this.clickByXPath(`//a[@size='${sizeType.toUpperCase()}']`)
    }

    async get_title() {
        return this.getTitle();
    }
}
module.exports = new HomePage();
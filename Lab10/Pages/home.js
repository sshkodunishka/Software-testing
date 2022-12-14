const { Key } = require('selenium-webdriver');
var BasePage = require('../Pages/basepage');

class HomePage extends BasePage {


    async enter_url(theURL) {
        await this.go_to_url(theURL);
    }

    async enter_search(searchText) {
        var searchField = '[id=search]';
        await this.enterTextByCss(searchField, searchText);
        await this.enterTextByCss(searchField, Key.ENTER);
    }
}
module.exports = new HomePage();
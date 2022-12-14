const { Key } = require('selenium-webdriver');
var BasePage = require('./basepage');

class WomensApparel extends BasePage {


    async enterUrl(theURL) {
        await this.goToUrl(theURL);
    }

    async addToFavorite(id) {
        await this.clickByXPath(`//div[@id='${id}']//*[@class='emi-item fav']`)
    }

    async goToFavorites() {
        await this.clickByClass('header-favorite-icon bndl-like bndl-like-dims')
    }

}
module.exports = new WomensApparel();
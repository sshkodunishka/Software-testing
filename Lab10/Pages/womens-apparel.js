const { Key } = require('selenium-webdriver');
var BasePage = require('./basepage');

class WomensApparel extends BasePage {


    async enter_url(theURL) {
        await this.go_to_url(theURL);
    }

    async addToFavorite() {
        var searchField = '[id=model_fav_2674708_6047794]';
        await driver.findElement(By.id(searchField)).click();
    }
    
}
module.exports = new WomensApparel();
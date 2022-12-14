const { Key } = require('selenium-webdriver');
var BasePage = require('../Pages/basepage');

const namesToIds = {
  'recommendation': 'hfl_1',
  'increasing_price': 'hfl_2',
  'decreasing_price': 'hfl_3',
}

class FilterPage extends BasePage {
  async enterUrl(theURL) {
    await this.goToUrl(theURL);
  }

  async openFilters() {
    await this.clickById('filter-right-button');
  }

  async openSort() {
    await this.clickById('dropdownMenu1');
  }

  async chooseDiscount() {
    //CHANGE ME 
    await this.clickByClass('ios-button-image')
  }

  async chooseOption(option) {
    const id = namesToIds[option];
    await this.clickById(id)
  }

  async getDiscountItems() {
    return await this.getElementsByClass('discount-percent')
  }
  
}
module.exports = new FilterPage();
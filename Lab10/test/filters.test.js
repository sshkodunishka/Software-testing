const homepage = require('../Pages/filters');
const assert = require("assert");

describe('Describe filter', function () {
  this.timeout(50000);

  beforeEach(function () {
  });

  it('Discount filter', async function () {
    const baseurl = 'https://www.lcwaikiki.by/ru-RU/BY/product-group/men';
    await homepage.enterUrl(baseurl);
    await homepage.openFilters();
    await homepage.chooseDiscount();
    assert.notEqual(await homepage.getDiscountItems(), null)
  })

  it('Recommendation', async function () {
    const baseurl = 'https://www.lcwaikiki.by/ru-RU/BY/product-group/men';
    await homepage.enterUrl(baseurl);
    await homepage.openSort();
    await homepage.chooseOption('recommendation');
    await homepage.sleep(1000)
    const title = await homepage.getElemByXpath(`//a[@id='dropdownMenu1']//label`)
    assert(await title.getText(), 'рекомендуемый')
    await homepage.sleep(500)
  })

  it('Increasing price', async function () {
    const baseurl = 'https://www.lcwaikiki.by/ru-RU/BY/product-group/men';
    await homepage.enterUrl(baseurl);
    await homepage.openSort();
    await homepage.chooseOption('increasing_price');
    await homepage.sleep(1000)
    const title = await homepage.getElemByXpath(`//a[@id='dropdownMenu1']//label`)
    assert(await title.getText(), 'Возрастающая цена')
    await homepage.sleep(500)
  })

  it('Decreasing price', async function () {
    const baseurl = 'https://www.lcwaikiki.by/ru-RU/BY/product-group/men';
    await homepage.enterUrl(baseurl);
    await homepage.openSort();
    await homepage.chooseOption('decreasing_price');
    await homepage.sleep(1000)
    const title = await homepage.getElemByXpath(`//a[@id='dropdownMenu1']//label`)
    assert(await title.getText(), 'Убывающая цена')
    await homepage.sleep(500)
  })

  afterEach(async function () {
  });

})
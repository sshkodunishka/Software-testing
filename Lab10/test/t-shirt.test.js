const homepage = require('../Pages/home');
const assert = require("assert");

describe('Describe', function () {
    this.timeout(50000);

    beforeEach(function () {

    });

    it('T-shirt search', async function () {
        const baseurl = 'https://www.lcwaikiki.by/ru-RU/BY';
        await homepage.enterUrl(baseurl);
        await homepage.enterSearch('Майка');
        const title = await homepage.getTitle();
        assert.equal(title, 'Майка - LC Waikiki')
    })

    it('adding t-shirt M-size', async function () {
        const baseurl = 'https://www.lcwaikiki.by/ru-RU/BY/product/outlet/LC-WAIKIKI/%D0%94%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD/%D0%9C%D0%B0%D0%B9%D0%BA%D0%B0/5888849/2447542';
        const sizeType = 'M'
        await homepage.enterUrl(baseurl);
        await homepage.selectSize(sizeType);
        const selectedElement = await homepage.getElemByXpath(`//a[@size='${sizeType}']`)
        assert(await selectedElement.getAttribute('class'), 'selected')
    })

    it('adding t-shirt L-size', async function () {
        const baseurl = 'https://www.lcwaikiki.by/ru-RU/BY/product/outlet/LC-WAIKIKI/%D0%94%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD/%D0%9C%D0%B0%D0%B9%D0%BA%D0%B0/5888849/2447542';
        const sizeType = 'L'
        await homepage.enterUrl(baseurl);
        await homepage.selectSize(sizeType);
        const selectedElement = await homepage.getElemByXpath(`//a[@size='${sizeType}']`)
        assert(await selectedElement.getAttribute('class'), 'selected')
    })

    afterEach(async function () {
        //await homepage.closeBrowser();
    });

})
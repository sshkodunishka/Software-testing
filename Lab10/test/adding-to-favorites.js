const homepage = require('../Pages/womens-apparel');
const assert = require("assert");

describe('Describe', function () {
    this.timeout(50000);

    beforeEach(function () {

    });

    it('Adding to favorites', async function () {
        var baseurl = 'https://www.lcwaikiki.by/ru-RU/BY/product-group/women';
        var favoritesUrl = 'https://www.lcwaikiki.by/ru-RU/BY/myfavoritelist'
        var idFavoritesClothes = 'model_fav_2738436_6017107'
        await homepage.enterUrl(baseurl);
        await homepage.addToFavorite(idFavoritesClothes);
        await homepage.goToFavorites(favoritesUrl);
        assert.equal(await homepage.getUrl(), favoritesUrl);
        const clothes = await homepage.getElemById(idFavoritesClothes)
        assert.notEqual(clothes, null)
    })

    afterEach(async function () {
    });

})
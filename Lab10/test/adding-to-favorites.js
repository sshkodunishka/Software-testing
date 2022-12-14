const homepage = require('../Pages/womens-apparel');

describe('Describe', function () {
    this.timeout(50000);

    beforeEach(function () {

    });

    it('Adding to favorites', async function () {
        var baseurl = 'https://www.lcwaikiki.by/ru-RU/BY/product-group/women';
        var favoritesUrl = 'https://www.lcwaikiki.by/ru-RU/BY/myfavoritelist'
        var idFavoritesClothes = 'model_2674708_6047794'
        await homepage.enter_url(baseurl);
        await homepage.isTitle(favoritesUrl);
        await homepage.isMyClothes(idFavoritesClothes);
    })

    afterEach(async function () {
    });

})
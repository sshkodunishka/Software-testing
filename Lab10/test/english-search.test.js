const homepage = require('../Pages/home');

describe('Describe', function(){
    this.timeout(50000);
   
    beforeEach(function(){
     
    });

    it('English search', async function(){
        var baseurl = 'https://www.lcwaikiki.by/ru-RU/BY';
        await homepage.enterUrl(baseurl);
        await homepage.enterSearch('Sweater');
    })
    it('Search in uppercase letterse', async function () {
        var baseurl = 'https://www.lcwaikiki.by/ru-RU/BY';
        await homepage.enterUrl(baseurl);
        await homepage.enterSearch('SWEATER');
      })
    afterEach(async function(){
    });

})
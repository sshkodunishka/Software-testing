const homepage = require('../Pages/home');

describe('Describe', function(){
    this.timeout(50000);
   
    beforeEach(function(){
     
    });

    it('English search', async function(){
        var baseurl = 'https://www.lcwaikiki.by/ru-RU/BY';
        await homepage.enter_url(baseurl);
        await homepage.enter_search('Sweater');
    })

    afterEach(async function(){
    });

})
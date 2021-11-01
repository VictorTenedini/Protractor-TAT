var helper = require('./helper');

browser.ignoreSynchronization = true;

describe('Other sites', () => {
    it('Should have the site Logo', () => {
        browser.get('/');
        helper.verifyElementPresenceByClass('logo img-responsive')
    });
    
    it('Should search', () => {
        helper.sendKeysById('search_query_top', 'shirt')
        helper.sendKeysById('search_query_top', 'protractor.Key.ENTER')
    });

    it('Should have the contents of the search', () => {
        var product = element
    });
});
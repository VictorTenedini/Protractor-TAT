module.exports = {
    verifyElementPresenceById: function(id){
        var element = $('#' + id)
        expect(element.isDisplayed()).toBeTruthy()
    },

    verifyElementPresenceByClass: function(className){
        var el = element(by.className(className))
        expect(el.isDisplayed()).toBeTruthy()
    },

    verifyElementPresenceByPartialText: function(text){
        var element = element(by.partialLinkText(text))
        expect(element.isDisplayed()).toBeTruthy()
    },

    sendKeysById: function(id, text){
        element(by.id(id)).sendKeys(text)
    },

    sendKeysByClass: function(className, text){
        element(by.className(className)).sendKeys(text)
    },

    clickByClass: function(className){
        element(by.className(className)).click()
    },

    clickByXpath: function(xpath){
        element(by.xpath(xpath)).click()
    }

 }
'use strict';

module.exports = {
	'@tags': ['desktop'],
	'Desktop testing': function(browser){
		browser
			.url('http://localhost:3000')
			.waitForElementVisible('body', 3000, 'page loaded')
			.waitForElementPresent('.greeting', 3000)
			.assert.containsText('.greeting', 'The best')
			.resizeWindow(1000, 800)
			.elementIdSize(ID);
	},
	'@tags': ['mobile'],
	'Mobile Testing': function(browser) {
		browser
			.url('http://localhost:3000')
			.waitForElementVisible('body', 3000, 'page loaded')
			.waitForElementPresent('.greeting', 3000)
			.resizeWindow(300, 800)
			.saveScreenshot('test.png')
			.closeWindow()
			.end();
	}
};

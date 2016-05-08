'use strict';

module.exports = {
	'@tags': ['desktop'],
	'Desktop testing': function(browser){
		browser
			.url('http://localhost:3000')
			.resizeWindow(1000, 800)
			.assert.cssProperty('body', 'background-color', 'rgba(100, 149, 237, 1)')
			.waitForElementVisible('body', 3000, 'page loaded')
			.waitForElementPresent('.greeting', 3000)
	},
	'@tags': ['tablet'],
	'Tablet testing': function(browser){
		browser
			.resizeWindow(700, 800)
			.assert.cssProperty("body", "background-color", "rgba(144, 238, 144, 1)")
			.assert.containsText('.greeting', 'Awesome Sauce')
			.saveScreenshot('./E2E/reports/devices/desktop.png')
	},
	'@tags': ['mobile'],
	'Mobile Testing': function(browser) {
		browser
			.url('http://localhost:3000')
			.waitForElementVisible('body', 3000, 'page loaded')
			.waitForElementPresent('.greeting', 3000)
			.resizeWindow(300, 800)
			.saveScreenshot('./E2E/reports/devices/tablet.png')
			.closeWindow()
			.end();
	}
};

'use strict';

module.exports = {
	'Basic testing': function(browser){
		browser
			.url('http://localhost:3000')
			.waitForElementVisible('body', 3000, 'page loaded')
			.waitForElementPresent('.greeting', 3000)
			.closeWindow()
			.end();
	}
};

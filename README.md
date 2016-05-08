# Launch-Pad
*The ulitmate boilerplate for front-end TDD*

This project depends on node.js. To install run:
```shell
1. $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2. $ brew install node
3. $ sudo npm install npm -g
```

#### What you get out of the box:

```
- Angular
  - UI Router
- Selenium 
  - Nightwatch.js
- Gulp
  - SASS 
  - Babel 
  - BrowserSync
```

### Up and Running: 

```
1. $ git clone git@github.com:alexUXUI/Launch-Pad.git
2. $ cd Launch-Pad
3. $ npm i -S
```

#### Build the app:

```
$ gulp
```

This will run the gulpfile.js, which will execute the following tasks:

```
1. Minify CSS
2. Uglify Javascript
3. Compile SASS
4. Automatically update changes in browser
5. Pipe all code to distribution folder
```

### Testing: 

This framework was built for E2E testing with a focus on UI. 

##### Running Tests:

To run just the tests, run the following command:
```
$ gulp test
```

##### Customizing tests:

The test suite relies on Nightwatch.js to communicate with Selenium. So in order to fully customize, you will need to become familiar with the UI testing endpoints available thhrough the nightwatch.js API. In the meantime, here are some useful sample methods to get you started with Nightwatch.

```js
'@tags': ['desktop'],
'Desktop testing': function(browser){
	browser
		.url('http://localhost:3000')
		.resizeWindow(1000, 800)
		.assert.cssProperty('body', 'background-color', 'rgba(100, 149, 237, 1)')
		.waitForElementVisible('body', 3000, 'page loaded')
		.waitForElementPresent('.greeting', 3000)
	  .saveScreenshot('./selenium-suite/reports/devices/desktop.png')
},
```

```js
The .resizeWindow() method takes a height and a width px value.
The .cssPorperty() method takes an element, using css selector syntax, as well as a porperty and a value.
The	.saveScreenshot() method takes a path to save the image.
```

##### Writing tests:

The testing suite is made up of three tests. Each test resizes the browser window and checks for UI conditions. After the tests have run, selenium and nightwatch.js write a test reprt to the **reports** folder. A screen shot of each browser (device) size are written into the **devices** folder, located within reports. To change the configuration of the tests you can edit the: nightwatch.json, gulfile.js, or package.json files.

###### Links to documentation(s):

For further reading on the technologies involved int this project, please refer to the following links.

- [Nightwatch.js](http://nightwatchjs.org/)
- [SASS](http://sass-lang.com/guide)
- [Gulp](http://gulpjs.com/)
- [Angular](https://angularjs.org/)

> Author: Alex Bennett

> License MIT


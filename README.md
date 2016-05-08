# Launch
*The ulitmate boilerplate for front-end TDD*

This project depends on node.js. To install run:
```shell
1. $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2. $ brew install node
3. $ sudo npm install npm -g
```

###### What you get out of the box:

```
- Angular -v 1.49
  - UI Router
- Selenium 
  - Nightwatch.js
- Gulp
  - SASS 
  - Babel 
  - BrowserSync
- Green Sock Animation Platform
  - TweenMax
  - TweenLite
  - All GSAP pulgins
```

### Installation: 

```
1. $ git clone git@github.com:alexUXUI/Launch-Pad.git
2. $ cd Launch-Pad
3. $ npm i -S
```

### Up and running:

Once all the dependencies are met, the app is ready to be built by our gulpfile.js. To execute the gulp tasks, run the folloing command:

```
$ gulp
```

### Build Tooling:

Executing the gulpfile.js with the command above will execute the following tasks:

```
1. Compile SASS
2. Uglify Javascript
3. Minify CSS
4. Automatically update changes in browser
5. Pipe all code to distribution folder
```

##### Gulp Watch taks:

Gulp will automatically sync any changes you make to the SASS files or the index.html file, to the browser. This way, as you're editing markup and styles, you never have to refresh the page.

If you would like to incorporate js into the gulp watch funciton so that you won't have to refresh the page while editing js, make the following changes:

Add this gulp task:

```js
gulp.task('js', () => {
  return gulp.src('/app/client/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.reload({
    stream: true
  }))
})
```

Add the task to the watch function:

```js
gulp.task('watch', ['html', "sass",'js', "sync"], () => {
  gulp.watch('app/client/scss/*.scss', ["sass"])
  gulp.watch('app/client/index.html', ["html"])
})
```

### Testing: 

This framework was built for E2E testing with a focus on UI. 

##### Running Tests:

To run just the tests, run the following commands:
```
$ gulp (gulp MUST be running in order to test successfully)
$ gulp test
```

##### Customizing tests:

The test suite relies on Nightwatch.js to communicate with Selenium. Although selenium .js statements are valid within nightwatch, in order to fully customize the UI testing portion, you will need to become familiar with the UI testing endpoints available thhrough the nightwatch.js API. In the meantime, here are some useful sample methods to get you started with Nightwatch.

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
The .saveScreenshot() method takes a path to save the image.
```

##### Writing tests:

The testing suite is made up of three tests. Each test resizes the browser window and checks for UI conditions. After the tests have run, selenium and nightwatch.js write a test reprt to the **reports** folder. A screen shot of each browser (device) size are written into the **devices** folder, located within reports. To change the configuration of the tests you can edit the: nightwatch.json, gulfile.js, or package.json files.

### Client Side MVC:

Angular is being used as the client side MVC architecture. This angular app relies on UI router for routing. To become familiar with angular UI please see: [Angular UI](https://angular-ui.github.io/ui-router/)

###### Links to documentation(s):

For further reading on the technologies involved int this project, please refer to the following links.

- [Nightwatch.js](http://nightwatchjs.org/)
- [SASS](http://sass-lang.com/guide)
- [Gulp](http://gulpjs.com/)
- [Angular](https://angularjs.org/)

### Contribute

All PR's are welcome.

##### To Do:

- Add Webpack Components!
- Add Unit testing
- Add linters

> Author: Alex Bennett

> License MIT


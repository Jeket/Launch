# Launch
**Boilerplate for front-end TDD**

This project depends on node.js. To install run:

```shell
1. $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2. $ brew install node
3. $ sudo npm install npm -g
```

###### What you get out of the box:

```
- Angular.js -v 1.49
- Selenium 
- Nightwatch.js
- Gulp.js
- Green Sock Animation Platform
```

### Installation: 

```
1. $ git clone git@github.com:alexUXUI/Launch-Pad.git
2. $ cd Launch-Pad
3. $ npm i -S
```

### Up and running:

To start the app and execute the gulp tasks, run the folloing command in the directory where your gulpfile.js is located:

```
$ gulp
```

### Testing: 

This framework was built for E2E testing with a focus on UI. 

##### Running Tests:

To run just the tests make sure to follow the steps listed below in order.
```
$ gulp 
// open up a new terminal tab
$ gulp test
```

##### Customizing tests:

The test suite relies on Nightwatch.js to communicate with Selenium. Here is a sample test. 

```js
'@tags': ['desktop'],
'Desktop testing': function(browser){
	browser
		.url('http://localhost:3000') // point this at any website
		.waitForElementVisible('body', 3000, 'page loaded') // wait until the body has loaded
		.resizeWindow(1000, 800) // resize the browser
		.assert.cssProperty('body', 'background-color', 'rgba(100, 149, 237, 1)') // check to see if the body has a color 
	  	.saveScreenshot('./selenium-suite/reports/devices/desktop.png') // take a picture
},
```

Here are some useful sample methods to get you started with Nightwatch.

```js
The .resizeWindow() method takes a height and a width px value.
The .cssPorperty() method takes an element, using css selector syntax, as well as a porperty and a value.
The .saveScreenshot() method takes a path to save the image.
```

##### Writing tests:

The testing suite is made up of three tests. After the tests have run, selenium and nightwatch.js write a test reprt to the **reports** folder. A screen shot of each browser (device) size are written into the **devices** folder. You can edit the: nightwatch.json, gulfile.js, or package.json files to change the test configs. 

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

Gulp will automatically sync any changes you make to the SASS files or the index.html file, to the browser. Make the following changes if you would like to incorporate js into the gulp watch funciton:

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


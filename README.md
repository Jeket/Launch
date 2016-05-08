# Launch-Pad
*The ulitmate boilerplate for front-end behavior driven development*

This project depends on node.js. To install run:
```shell
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install node
$ sudo npm install npm -g
```

## What you get out of the box:

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
1. Fork/Clone/Download this repo to you workspace
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
5. Automatically run tests + save reports
6. Pipe all code to distribution folder
```

##### Running Tests:

To run just the tests, run the following command:
```
$ gulp test
```

###### Links to documentation(s):

For further reading on the technologies involved int this project, please refer to the following links.

- [Nightwatch.js](http://nightwatchjs.org/)
- [SASS](http://sass-lang.com/guide)
- [Gulp](http://gulpjs.com/)
- [Angular](https://angularjs.org/)

> Author: Alex Bennett

> License MIT


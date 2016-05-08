'use strict'

const gulp = require("gulp")
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const useref = require('gulp-useref')
const uglify = require('gulp-uglify')
const gulpIf = require('gulp-if')
const cssnano = require('gulp-cssnano')
const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')
const del = require('del')
const runSequence = require('run-sequence')
const babel = require('gulp-babel');
const nightwatch = require('gulp-nightwatch');

gulp.task('useref', () => {
  return gulp.src('app/*/*/*')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
    .pipe(nightwatch({
      configFile: './nightwatch.json'
    }));
})

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'app/client'
    }
  })
})

gulp.task('sass', () => {
  return gulp.src('app/client/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
})

gulp.task('imagemin', () => {
  return gulp.src('app/client/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dist('dist/images'))
})

gulp.task('watch', ["browserSync", "sass"], () => {
  gulp.watch('app/scss/**/*.scss', ["sass"], () => {
  })
})

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean:dist', () => {
  return del.sync('dist')
})

gulp.task('cache:clear', () => {
  return cache.clearAll()
})

gulp.task('default', () => {
  runSequence('clean:dist',
  ['useref', 'sass', 'browserSync', 'watch'], () => {
    console.log('finishing tasks');
  })
})

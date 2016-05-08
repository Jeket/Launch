'use strict'

const gulp = require("gulp"),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      useref = require('gulp-useref'),
      uglify = require('gulp-uglify'),
      gulpIf = require('gulp-if'),
      cssnano = require('gulp-cssnano'),
      imagemin = require('gulp-imagemin'),
      cache = require('gulp-cache'),
      del = require('del'),
      runSequence = require('run-sequence'),
      babel = require('gulp-babel'),
      nightwatch = require('gulp-nightwatch')

gulp.task('useref', () => {
  return gulp.src('app/client/*/*')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
})

gulp.task('html', () => {
  return gulp.src('app/client/index.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('test', () => {
  return gulp.src('app/client/*/*')
  .pipe(nightwatch({
    configFile: './nightwatch.json'
  }))
})

gulp.task('sync', () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
})

gulp.task('sass', () => {
  return gulp.src('app/client/scss/**/*.scss')
  .pipe(sass())
  .pipe(cssnano())
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
})

// gulp.task('js', () => {
//   return gulp.src('/app/client/js/*.js')
//   .pipe(uglify())
//   .pipe(gulp.dest('dist/js'))
//   .pipe(browserSync.reload({
//     stream: true
//   }))
// })

gulp.task('imagemin', () => {
  return gulp.src('app/client/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dist('dist/images'))
})

gulp.task('watch', ['html', "sass", "sync"], () => {
  gulp.watch('app/client/scss/*.scss', ["sass"])
  gulp.watch('app/client/index.html', ["html"])
})

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/client/fonts'))
})

gulp.task('clean:dist', () => { return del.sync('dist') })
// gulp.task('clean:devices', () => { return del.sync('selenium-suite/reports/devices') })
gulp.task('cache:clear', () => { return cache.clearAll() })

gulp.task('default', () => {
  runSequence('clean:dist',
  ['sass','html', 'useref', 'watch'], () => {
    console.log('finishing tasks')
  })
})

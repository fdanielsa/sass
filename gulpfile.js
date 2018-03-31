'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
 
gulp.task('sass', function () {
  return gulp.src('./app/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function (
	) {
  gulp.watch('./app/scss/**/*.scss',["sass"]);
});


gulp.task('views:watch', function() {
  gulp.watch('.app/views/**/*.pug',["views"]);
});

gulp.task('views', function() {
  return gulp.src('app/views/*.pug')
  .pipe(pug())
  .pipe(gulp.dest("./public"))
});

gulp.task('default',[ "sass" ,"views","sass:watch" ,"views:watch"]);



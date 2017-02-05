"use strict";

var gulp = require('gulp'),
	concatCSS = require('gulp-concat'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect'); 



gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});


//css watch concat prefix min
gulp.task('css', function() {
  gulp.src('css/*.css')
  	.pipe(concatCSS("bundle.css"))
  	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
  	.pipe(cleanCSS(''))
  	.pipe(rename('bundle.min.css'))
  	.pipe(gulp.dest('app/css/'))
  	.pipe(connect.reload());
});

gulp.task('html',function(){
	gulp.src('app/index.html')
		.pipe(connect.reload());
})

//watch for css
gulp.task('watch', function() {
	gulp.watch('css/*.css', ['css'])
	gulp.watch('app/index.html',['html'])
})

gulp.task('default',['connect','html','css','watch'])
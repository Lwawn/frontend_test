var gulp = require('gulp'),
	concatCSS = require('gulp-concat'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename') ;

gulp.task('default', function() {
  gulp.src('css/*.css')
  	.pipe(concatCSS("bundle.css"))
  	.pipe(cleanCSS(''))
  	.pipe(rename('bundle.min.css'))
  	.pipe(gulp.dest('app/'));
});
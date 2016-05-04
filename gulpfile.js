/**
 * Created by jason on 5/3/16.
 */

var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var sourcemaps   = require('gulp-sourcemaps');
var flexibility = require('postcss-flexibility');


gulp.task('default', function () {

	return gulp.src('./css/*.css')
		.pipe(sourcemaps.init())
		.pipe(postcss([ autoprefixer({ browsers: ['last 3 versions'] }), flexibility,cssnano() ]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dest'));
});

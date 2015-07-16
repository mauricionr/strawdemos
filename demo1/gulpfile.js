var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	cls = require('./lib/clear')
;
var paths = {
  scripts: ['./nodes/*.js','./app.js']
};

gulp.task('lint', function () {
	cls();
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['lint']);
});
gulp.task('default', ['lint','watch']);
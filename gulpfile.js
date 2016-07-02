var gulp = require('gulp');
var config = require('./gulp.config')();
var del = require('del');
var angularFilesort = require('gulp-angular-filesort');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('vet', function() {
	console.log('Analyzing source with jshint');
	gulp.src(config.alljs)
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('styles', ['clean-styles'], function() {
	console.log('Compiling SASS to CSS');
	return gulp.src(config.sass)
	.pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
	.pipe($.rename({suffix: '.min'}))
	.pipe(gulp.dest(config.temp));
});

gulp.task('clean-styles', function() {
	var files = config.temp + '**/*.css';
	clean(files);
});

gulp.task('sass-watcher', function() {
	gulp.watch([config.sass], ['styles']);
});

gulp.task('wiredep', function() {
	console.log('Wire up the bower css, js, and our app js into the html');
	var options = config.getWiredepDefaultOptions();
	var wiredep = require('wiredep').stream;

	return gulp
		.src(config.index)
		.pipe(wiredep(options))
		.pipe($.inject(gulp.src(config.js).pipe(angularFilesort())))
		.pipe(gulp.dest('public/app'));

});

gulp.task('inject', ['wiredep', 'styles'], function() {
	console.log('Wire up the app css, into the html, and call wiredep');
	return gulp
		.src(config.index)
		.pipe($.inject(gulp.src(config.css)))
		.pipe(gulp.dest('public/app'));

});

function clean(path) {
	console.log('Cleaning: ' + path);
	del(path);
}
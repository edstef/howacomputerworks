module.exports = function() {
	var temp = './.tmp/';

	var config = {
		temp: temp,

		// all js to vet
		alljs: [
			'public/app/**/*.js',
			'./**.js'
		],

		index: 'public/app/index.html',

		css: temp + 'style.min.css',

		js: [
			'public/app/**/*.module.js',
			'public/app/**/*.js',
			'!public/app/**/*.spec.js'
		],

		sass: 'public/assets/css/**/*.scss',

		bower: {
			json: require('./bower.json'),
			directory: './bower_components/',
			ignorePath: 'public/app/'
		}
	};

	config.getWiredepDefaultOptions = function() {
		var options = {
			bowerJson: config.bower.json,
			directory: config.bower.directory,
			ignorePath: config.bower.ignorePath
		};

		return options;
	};

	return config;
};
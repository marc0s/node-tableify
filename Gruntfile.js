module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-es6-transpiler');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-umd');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		es6transpiler: {
			options: {
				environments: ['node', 'browser'],
				globals: {
					'moment': true
				}
			},
			dist: {
				files: {
					'dist/tableify.js': 'index.js'
				}
			}
		},
		replace: {
			example: {
				src: ['dist/tableify.js'],
				dest: 'dist/tableify.js',
				replacements: [{
					from: 'module.exports = tableify;',
					to: ''
				}]
			}
		},
		umd: {
			all: {
				src: 'dist/tableify.js',
				dest: 'dist/tableify.js',
				globalAlias: 'tableify',
				objectToExport: 'tableify'
			}
		}
	});

	grunt.registerTask('default', ['es6transpiler', 'replace', 'umd']);
};

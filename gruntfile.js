//The "wrapper" function
module.exports = function(grunt) {
  
	//Project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		* Grunt Sass
		* Compile Sass to CSS using node-sass
		* https://www.npmjs.com/package/grunt-sass
		*/
		sass: {

			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'css/styles.css' : 'assets/scss/styles.scss'
				}
			}
		},

		/**
		* Grunt Contrib Watch
		* Monitor files and excute tasks
		* https://www.npmjs.com/package/grunt-contrib-watch
		*/
		watch: {

			sass: {

				files: [
					'assets/scss/*.scss'
				],
				tasks: [
				
					'sass'
				]
			},
			uglify: {

				files: [
					
					'assets/js/scripts.js'
				],
				tasks: [
					'uglify'
				]
			},
			jshint: {
				files: [
						'gruntfile.js',
						'assets/js/*.js'
						],
				tasks: [
						'jshint'
						]

			},
			cssmin:{
				files: [
						'css/styles.min.css'
						],
				tasks: [
						'cssmin'
						]
			}
		},
		
		
		/* Grunt Contrib Uglify
		*Minify JavaScript files with UglifyJS
		*https://www.npmjs.com/package/grunt-contrib-uglify
		**/
		uglify: {
			options: {
				 mangle: true
					},
			my_target: {
				files: {
					'js/scripts.min.js':
					 ['assets/js/scripts.js']
				}
			}
		},
		
		
		/*Grunt Contrib Jshint
		 *Validate files with JSHint
		 *https://www.npmjs.com/package/grunt-contrib-jshint
		 **/ 

	    jshint: {
		    all: ['gruntfile.js', 'assets/js/*.js']
		  },
		  
		  
		/*Grunt Contrib Cssmin
		*Minify CSS
		*https://www.npmjs.com/package/grunt-contrib-cssmin
		**/
		cssmin: {
		    target: {
		      files: [{
		        'css/styles.min.css': ['css/styles.css']
		      }]
		    }
		  }
	});

	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);

	//Custom tasks
	grunt.registerTask('default', ['watch']);

};

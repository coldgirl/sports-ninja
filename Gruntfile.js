module.exports = function(grunt) {
  // Do grunt-related things in here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
			},
			dist: {
				options: {
				    style: 'compressed',
				    lineNumbers: true
				},
				files: {
				    'css/app.css' : 'sass/app.scss'
				}
			}
		},

	  	watch: {
		  	grunt: {
	        	files: ['Gruntfile.js']
            },
            sass: {
                files: 'sass/*.scss',
                tasks: ['sass']
            }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build', 'watch']);

};
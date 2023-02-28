module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            development: {
                options: {
                    sourceMap: true
                },
                files: {
                    'dev/styles/main.css' : 'src/styles/main.scss'
                }
            },
            production: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/styles/main.min.css' : 'src/styles/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'src/styles/**/*.scss',
                tasks: ['sass:development']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass:development','watch']);
    grunt.registerTask('build', ['sass:production']);
}
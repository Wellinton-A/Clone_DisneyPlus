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
        imagemin: {
            production: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },   
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,jpeg,gif,svg,ico}'],
                    dest: 'dist/images/'
                }]
            },
            development: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,jpeg,gif,svg,ico}'],
                    dest: 'dev/images/'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/script/script.min.js' : ['src/script/script.js']
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
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass:development','imagemin:development','watch']);
    grunt.registerTask('build', ['sass:production','imagemin:production','uglify']);
}
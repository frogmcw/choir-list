module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'web/assets/styles/modern.css': 'src/assets/scss/modern.scss'
                }
            }
        },
        // Copies any files that should be moved to the destination directory
        // that are not already handled by another task.
        copy: {
            media: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['assets/media/**'],
                    dest: 'web'
                }]
            },
            markup: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    dest: 'web/',
                    src: ['**/*.html']
                }]
            },
            scripts: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    dest: 'web',
                    src: ['assets/{scripts,vendor}/**/*.js']
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['sass', 'copy']);

};

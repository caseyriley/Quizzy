module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            multiple_files: {
              files: [{
                expand: true,
                flatten: true,
                src: 'Client/src/styles/*.css',
                dest: 'dest/css/'
              }]
            }
          },
        watch: {
            styles: {
                files: ['Client/src/styles/*.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
module.exports = function (grunt) {
  grunt.initConfig({
      autoprefixer: {
          dist: {
              files: {
                  'build/style.css': 'Client/src/syltes/app.css'
              }
          }
      },
      watch: {
          styles: {
              files: ['Client/src/syltes/app.css'],
              tasks: ['autoprefixer']
          }
      }
  });
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
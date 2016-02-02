
/*  gulpfile.js */
var
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    sass        = require('gulp-sass'),
    nodemon     = require('gulp-nodemon'),
    minifyCss   = require('gulp-minify-css'),
    browserSync = require('browser-sync').create()
;


// SASS
//------------------------------------------------------------------------------
gulp.task('sass', function() {
    gulp.src('./public/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});
// check for changes to the css folder
gulp.task('sass:watch', function() {
    gulp.watch('./public/css/*.scss', ['sass']);
});


// SERVE server.js using nodemon
//------------------------------------------------------------------------------
gulp.task('start', function () {
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  });
});

// browserSync
//------------------------------------------------------------------------------
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "http://localhost:3000/"
  });
});

// Default task
//------------------------------------------------------------------------------
gulp.task('default', ['sass:watch', 'start']);

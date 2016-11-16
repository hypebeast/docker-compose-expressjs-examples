var gulp       = require('gulp');
var nodemon    = require('gulp-nodemon');
var sass       = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');
var nodemonConfig = require('./nodemon.json');

gulp.task('develop', function () {
    nodemon(nodemonConfig);
});

gulp.task('sass', function() {
    sass('./public/scss/**/*.scss')
        .pipe(gulp.dest('./public/stylesheets'))
        .pipe(livereload())
        .on('error', sass.logError);
});

gulp.watch('./public/scss/**/*.scss', ['sass']);

gulp.task('default', ['develop', 'sass']);

var include = require('gulp-file-include');
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./src/sass/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['sass'], function() {
    gulp.src(['./src/html/*.html'])
        .pipe(include())
        .pipe(gulp.dest('.'));
});

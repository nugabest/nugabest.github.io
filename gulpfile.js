var fileInclude = require('gulp-file-include');
var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src(['./src/html/index.html'])
        .pipe(fileInclude())
        .pipe(gulp.dest('.'));
});


var Task = require('gulp-task-builder');

new Task('default')
    .src('./src/html/index.html')
    .fileinclude()
    .dest('.');


var gulp = require('gulp');

require('./tasks/clean');
require('./tasks/build');

gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', () => gulp.watch(['src/**/*'], gulp.task('default')));

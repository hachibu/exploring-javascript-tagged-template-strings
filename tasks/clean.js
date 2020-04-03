var gulp = require('gulp'),
    del  = require('del');

gulp.task('clean', () => del(['docs/**/*']));

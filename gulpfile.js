const del        = require('del'),
      gulp       = require('gulp'),
      gulpPandoc = require('gulp-pandoc'),
      gulpRename = require('gulp-rename');

gulp.task('clean:docs', () =>
  del(['docs/**/*']));

gulp.task('build:reveal.js', () =>
  gulp.
    src('node_modules/reveal.js/{css,js,plugin}/**/*.{css,js}').
    pipe(gulp.dest('docs/reveal.js')))

gulp.task('build:slides.md', () => {
  let buildSlides = gulpPandoc({
    from: 'markdown',
    to: 'revealjs',
    ext: '.html',
    args: ['-s']
  });

  return gulp.
    src('src/slides.md').
    pipe(buildSlides).
    pipe(gulpRename('index.html')).
    pipe(gulp.dest('docs'))
});

gulp.task('build:slides', gulp.parallel(
  'build:reveal.js',
  'build:slides.md',
));

gulp.task('watch', () =>
  gulp.watch(['src/slides.md'], gulp.task('default')));

gulp.task('default', gulp.series(
  'clean:docs',
  'build:slides'
));

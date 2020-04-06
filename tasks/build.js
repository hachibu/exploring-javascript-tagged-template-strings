var gulp       = require('gulp'),
    gulpPandoc = require('gulp-pandoc'),
    gulpRename = require('gulp-rename');

gulp.task('build:reveal.js', () =>
  gulp.
    src('node_modules/reveal.js/{css,js,plugin}/**/*.{css,js}').
    pipe(gulp.dest('docs/slides/reveal.js')))

gulp.task('build:slides', () => {
  let md2revealjs = gulpPandoc({
    from: 'markdown',
    to: 'revealjs',
    ext: '.html',
    args: [
      '-s',
      '--slide-level=2',
      '--include-in-header=src/slides/partials/header.html',
      '--include-after-body=src/slides/partials/footer.html'
    ]
  });

  return gulp.
    src('src/slides/index.md').
    pipe(md2revealjs).
    pipe(gulpRename('index.html')).
    pipe(gulp.dest('docs/slides'));
});

gulp.task('build:images', () =>
  gulp.
    src('src/slides/images/*.{jpg,png}').
    pipe(gulp.dest('docs/slides/images')));

gulp.task('build:transcript', () =>
  gulp.
    src('src/transcript.md').
    pipe(
      gulpPandoc({
        from: 'markdown',
        to: 'html',
        ext: '.html'
      })
    ).
    pipe(gulp.dest('docs')));

gulp.task('build', gulp.parallel(
  'build:reveal.js',
  'build:images',
  'build:slides',
  'build:transcript'
));

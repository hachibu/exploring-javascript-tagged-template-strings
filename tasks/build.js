const gulp       = require('gulp'),
      gulpPandoc = require('gulp-pandoc'),
      gulpRename = require('gulp-rename');

gulp.task('build:reveal.js', () =>
  gulp.
    src('node_modules/reveal.js/{css,js,plugin}/**/*.{css,js}').
    pipe(gulp.dest('docs/slides/reveal.js')))

gulp.task('build:slides.md', () => {
  let md2revealjs = gulpPandoc({
    from: 'markdown',
    to: 'revealjs',
    ext: '.html',
    args: [
      '-s',
      '-c reveal.js/css/theme/white.css',
      '-c reveal.js/css/custom.css'
    ]
  });

  return gulp.
    src('src/markdown/slides.md').
    pipe(md2revealjs).
    pipe(gulpRename('index.html')).
    pipe(gulp.dest('docs/slides'));
});

gulp.task('build:html', () => {
  let md2html = gulpPandoc({
    from: 'markdown',
    to: 'html',
    ext: '.html'
  });

  return gulp.
    src('src/markdown/{index,script}.md').
    pipe(md2html).
    pipe(gulp.dest('docs'));
});

gulp.task('build:css', () => {
  return gulp.
    src('src/**/*.css').
    pipe(gulp.dest('docs/slides'));
});

gulp.task('build', gulp.parallel(
  'build:reveal.js',
  'build:css',
  'build:slides.md',
  'build:html'
));

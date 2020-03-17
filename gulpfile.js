const del        = require('del'),
      gulp       = require('gulp'),
      gulpPandoc = require('gulp-pandoc'),
      gulpRename = require('gulp-rename');

const md2revealjs = gulpPandoc({
  from: 'markdown',
  to: 'revealjs',
  ext: '.html',
  args: ['-s']
});

const md2html = gulpPandoc({
  from: 'markdown',
  to: 'html',
  ext: '.html'
});

gulp.task('clean', () => del(['docs/**/*']));

gulp.task('build:reveal.js', () =>
  gulp.
    src('node_modules/reveal.js/{css,js,plugin}/**/*.{css,js}').
    pipe(gulp.dest('docs/slides/reveal.js')))

gulp.task('build:slides.md', () =>
  gulp.
    src('src/slides.md').
    pipe(md2revealjs).
    pipe(gulpRename('index.html')).
    pipe(gulp.dest('docs/slides')));

gulp.task('build:html', () =>
  gulp.
    src('src/{index,script}.md').
    pipe(md2html).
    pipe(gulp.dest('docs')));

gulp.task('build', gulp.parallel(
  'build:reveal.js',
  'build:slides.md',
  'build:html'
));

gulp.task('default', gulp.series('clean', 'build'));

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

gulp.task('default', ['connect','watch']);

gulp.task('connect', function() {
  connect.server({
    port: 8080,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('jshint', function() {
  return gulp.src('source/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./js/*.js', ['jshint']);
  gulp.watch('./css/*.scss', ['sass']);
  gulp.watch(['index.html'], ['html']);
});
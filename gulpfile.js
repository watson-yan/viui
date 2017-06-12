'user strict'

var gulp = require('gulp')
    sass = require("gulp-sass")
    autoprefixer = require('gulp-autoprefixer')
    cleanCSS = require('gulp-clean-css');
    rename = require('gulp-rename');

gulp.task('sass', function() {
  return gulp.src('./src/style/index.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(rename('viui.css'))
    .pipe(gulp.dest('./src/style'))
})

gulp.task('default', ['sass'])
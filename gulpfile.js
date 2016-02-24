var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('scss', function(){
  return gulp.src('scss/*.scss')
  .pipe(scss())
  .pipe(gulp.dest('/client/styles/'));

});

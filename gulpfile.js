// this is where the gulp modules goes
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	livereload = require('gulp-livereload');
/*var autoprefixer = require('gulp-autoprefixer');*/


// TASK LIST

// minify scripts
gulp.task('uglify', function() {

	return gulp.src('_js/*.js')
	.pipe(plumber())
	.pipe(uglify()) // optional here
	.pipe(gulp.dest('_builds/_js'))
	.pipe(livereload());

});

// compile sass 
gulp.task('sass', function () {
  return sass('_css/main.scss', {
      style: 'compressed'
    })
    .on('error', sass.logError)
    .pipe(gulp.dest('_css'))
    .pipe(livereload());
    
});

//livereload
gulp.task('reload', function() {

  return gulp.src('./index.html')
  .pipe(livereload());
  
});

// watch task - watches modifications on files
gulp.task('watch', function() {

	livereload.listen();

	gulp.watch('_js/controllers/*.js', ['sass', 'reload']);
	gulp.watch('_js/*.js', ['sass', 'reload']);
	gulp.watch('_css/*.scss', ['sass']);
	gulp.watch('./*.html', ['sass', 'reload']);

});



// program a task to execute a number of tasks a a dependency; to execute this task just type 'grunt'
gulp.task('default', ['scripts']);
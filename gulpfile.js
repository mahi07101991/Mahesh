var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

gulp.task('default', () => (console.log("Gulp Task!")));

gulp.task('html', () => {
    console.log('This is done next');
});

gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch', () => {

    watch('./app/index.html', () => {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', () => {
        gulp.start('styles');
    });
});


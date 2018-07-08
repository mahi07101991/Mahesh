var gulp = require('gulp'),
    postimport = require('postcss-import'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvar = require('postcss-simple-vars'),
    nested = require('postcss-nested');


gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvar, nested, postimport, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles/'));
});
    
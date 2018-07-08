var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvar = require('postcss-simple-vars'),
nested = require('postcss-nested'),
broswerSync = require('browser-sync').create(),
postimport = require('postcss-import');

gulp.task('default', () => (console.log("Gulp Task!")));

gulp.task('html', () => {
console.log('This is done next');
});

gulp.task('styles', () => {
return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvar, nested, postimport, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles/'));
});


gulp.task('watch', () => {

broswerSync.init({
    server: {
        baseDir: "app"
    }
});

watch('./app//index.html', () => {
    broswerSync.reload();
});

watch('./app/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
});
});

gulp.task('cssInject', ['styles'], () => {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(broswerSync.stream());
});
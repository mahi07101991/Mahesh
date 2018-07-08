var gulp = require('gulp'),
    watch = require('gulp-watch'),
    broswerSync = require('browser-sync').create();

gulp.task('watch', () => {

    broswerSync.init({
        server: {
            notify: false,
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
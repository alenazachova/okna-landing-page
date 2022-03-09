var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
    connect.server({
        root: 'dist',
        livereload: true
    });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass({ errLogToConsole: true }))
        .pipe(gulp.dest('./dist/styles'));
});

gulp.task('livereload', function (){
    gulp.src('./public/**/*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./assets/styles/**/*.scss', gulp.series('watch'));
    gulp.watch('./dist/**/*', gulp.series('livereload'));
});

gulp.task('default', gulp.series('connect', 'watch', 'sass'));
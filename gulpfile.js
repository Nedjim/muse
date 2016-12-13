const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const reload = require('gulp-livereload');
const sass = require('gulp-sass');
const vendors = require('./vendors.js');

gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('json', function() {
    gulp.src('src/json/*.json')
        .pipe(gulp.dest('build/json'));
});

gulp.task('custom-css', function() {
    gulp.src('src/css/*.css')
        .pipe(concat('custom.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('custom-js', function() {
    gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(concat('custom.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('vendor', function() {
    gulp.src(vendors.js)
        .pipe(uglify())
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

gulp.task('build', ['custom-css', 'custom-js', 'html', 'sass', 'json']);
gulp.task('build-all', ['build', 'vendor']);

gulp.task('watch', ['build'], function() {
    reload.listen();
    gulp.watch('build/**/*').on('change', reload.changed);
    return gulp.watch('src/**/*', ['build']);
});
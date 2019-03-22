'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require("gulp-rename"),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    concat = require('gulp-concat'),
    replace = require('gulp-replace'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify');
    //terser = require('gulp-terser');

const path = {
    dist: {
        html: 'dist',
        css: 'dist/css',
        js: 'dist/js',
        fonts: 'dist/fonts',
        images: 'dist/img',
        svg: 'dist/svg'
    },
    src: {
        html: 'dev/html/pages/*.html',
        css: 'dev/scss/style.scss',
        js_lib: 'dev/js/lib/**/*',
        js: 'dev/js/scripts/**/*',
        fonts: 'dev/fonts/*',
        images: 'dev/img/**/*',
        svg: 'dev/svg/**/*'
    },
    watch: {
        html: 'dev/html/**/*',
        css: 'dev/scss/**/*',
        js: 'dev/js/**/*',
        fonts: 'dev/fonts/*',
        images: ['dev/img/**/*', 'dev/svg/**/*']
    }
};

function html() {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(replace('../../', ''))
        .pipe(gulp.dest(path.dist.html));
}

function css() {
    return gulp.src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(replace('../../', '../'))
        .pipe(sourcemaps.write())
        .pipe(rename("style.css"))
        .pipe(gulp.dest(path.dist.css))
        .pipe(cssnano({
            zindex: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.dist.css));
}

function jsLibs() {
    return gulp.src(path.src.js_lib)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.dist.js));
}

function js() {
    return gulp.src(path.src.js)
        .pipe(gulp.dest(path.dist.js));
}

function fonts() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.dist.fonts));
}

function minImages() {
    return gulp.src(path.src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.images));
}

function minSvg() {
    return gulp.src(path.src.svg)
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.svg));
}

function watch() {
    gulp.watch(path.watch.css, css);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.js, js);
}

let build = gulp.series(html, css, jsLibs, js, minImages, minSvg, fonts, watch);

gulp.task('build', build);
gulp.task('default', build);


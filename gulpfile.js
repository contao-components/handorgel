const { src, dest } = require('gulp');
const csso = require('gulp-csso');
const rename = require('gulp-rename');

function css() {
    return src(['css/*.css', '!css/*.min.css'])
        .pipe(csso({
            comments: false,
            restructure: false
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('css'));
}

exports.default = css;

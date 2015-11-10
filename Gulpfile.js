var gulp   = require('gulp');
var gutil  = require('gulp-util');
var coffee = require('gulp-coffee');
var exec   = require('gulp-exec');
var newer = require('gulp-newer');

var config = {
  index: {src: 'index.ios.coffee', dest: './'},
  files: {src: 'app/**/*.coffee', dest: './app/dist'}
}

var build_options = {
  continueOnError: false, // default = false, true means don't emit error event
  pipeStdout: true
};

var gulpIt = function(src, dest) {
  gulp.src(src)
    .pipe(newer({dest: dest, ext: '.js'}))
    .pipe(exec('cjsx-transform <%= file.path %>', build_options))
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest(dest));
}

gulp.task('buildIndex', function() {
  gulpIt(config.index.src, config.index.dest)
});

gulp.task('buildFiles', function() {
  gulpIt(config.files.src, config.files.dest)
});

gulp.task('watch', ['buildIndex', 'buildFiles'], function() {
  gulp.watch(config.index.src, ['buildIndex']);
  gulp.watch(config.files.src, ['buildFiles']);
});

gulp.task('default', ['watch']);

export default (gulp, $, { dir }) => {
  gulp.task('scss-lint', () => {
    const notifier = require('node-notifier');
    const through = require('through2');
    const path = require('path');

    $.util.log($.util.colors.green.bold(`
--------------------------------------------------------------
Running SCSS linter
--------------------------------------------------------------`));

    return gulp.src([
      `./${dir.paths.srcStyles}/**/*.scss`,
      `!./${dir.paths.srcStyles}/core/*.scss`,
      `!./${dir.paths.srcStyles}/components/vendor/**/*.scss`
    ])
      .pipe($.sassLint({
        configFile: './.sass-lint.yml'
      }))
      .pipe($.sassLint.format())
      .pipe(through.obj((file, encoding, cb) => {
        if (file.sassLint.length && file.sassLint[0].warningCount) {
          let lint = file.sassLint[0],
            shortPath = lint.filePath.split('/').slice(-3).join('/');

          notifier.notify({
            'title': 'SCSS Warnings',
            'subtitle': lint.filePath,
            'sound': true,
            'message': `${lint.warningCount} warnings - ${shortPath}`,
            'wait': true,
            'file': path.join(__dirname, lint.filePath),
          });
        }
        cb();
      }))
      .pipe($.sassLint.failOnError())
      .pipe($.filelog('scss-lint'));
  });
};

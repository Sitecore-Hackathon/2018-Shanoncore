const { NODE_ENV } = process.env;
import notifier from 'node-notifier';

export default (gulp, $, { dir }) => {
  gulp.task('file-include', () => {
    $.util.log($.util.colors.green.bold(`
--------------------------------------------------------------
HTML file include
--------------------------------------------------------------`));

    const outModules = NODE_ENV === 'production' ? `./${dir.paths.distModules}` : `./${dir.paths.devModules}`;
    const outPages = NODE_ENV === 'production' ? `./${dir.paths.distTemplates}` : `./${dir.paths.devTemplates}`;

    // Modules
    gulp.src(`./${dir.paths.srcModules}/**/*.html`)
      .pipe($.fileInclude({
        basepath: `./${dir.source}/html`
      }))
      .pipe(gulp.dest(outModules))
      .pipe($.if(NODE_ENV !== 'production', $.browserSync.stream()));

    // Templates
    gulp.src(`./${dir.paths.srcTemplates}/**/*.html`)
      .pipe($.fileInclude({
          basepath: `./${dir.source}/html`
        }).on('error', error => {
          $.util.log($.util.colors.green.red(`
--------------------------------------------------------------
  ${error.message}
--------------------------------------------------------------`))
          notifier.notify({
            title: 'Include Error',
            message: error.message,
            sound: true,
            wait: true
          });
        })
      )
      .pipe(gulp.dest(outPages))
      .pipe(
        $.if(NODE_ENV !== 'production', $.browserSync.stream())
      )
  });
};

export default (gulp, $, { dir, hmr }) => {
  // const exec = require('child_process').exec;
  // const spawn = require('child_process').spawn;

  gulp.task('watch', () => {
    //html
    gulp.watch([`${dir.source}/**/*.html`, `!${dir.source}/index.html`], {cwd: './'}, ['file-include', 'template']);
    gulp.watch(`${dir.source}/index.html`, {cwd: './'}, ['template']);

    // sprites
    gulp.watch(`${dir.paths.srcImages}/sprites/*.png`, {cwd: './'}, ['spritesmith', 'copy']);
    gulp.watch(`${dir.paths.srcImages}/svg-sprites/*.svg`, {cwd: './'}, ['svgstore', 'copy']);

    //fonts and images
    gulp.watch([
      `${dir.paths.srcFonts}/**/*.*`,
      `${dir.paths.srcImages}/**/*.*`,
      `!${dir.paths.srcImages}/sprites/*.png`,
      `!${dir.paths.srcImages}/svg-sprites/*.svg`
      ], {cwd: './'}, ['copy']);

    //js
    gulp.watch(`${dir.paths.srcJS}/**/*.js`, () => {
      if(!hmr) $.browserSync.reload();
    });

    //scss
    gulp.watch(`${dir.paths.srcStyles}/**/*.scss`, {cwd: './'}, ['scss-lint', 'sass']);

    //watch for restart
    // gulp.watch(['config.js', 'webpack/*.js', 'gulp/**/*.js', '.babelrc', '.eslintrc.js', 'gulpfile.babel.js', 'webpack.config.babel.js', '.sass-lint.yml'], () => {
    //   if (process.env.process_restarting) {
    //     delete process.env.process_restarting;
    //     // Give old process one second to shut down before continuing ...
    //     setTimeout(main, 500);
    //     return;
    //   }
    //
    //   // Restart process ...
    //   spawn(process.argv[0], process.argv.slice(1), {
    //     env: { process_restarting: 1 },
    //     stdio: 'ignore'
    //   }).unref();
    // });
  });
};

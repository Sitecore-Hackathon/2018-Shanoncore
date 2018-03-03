export default (gulp, $, { dir }) => {
  gulp.task('clean-css', () => {
    $.util.log($.util.colors.green.bold(`
--------------------------------------------------------------
Minifying CSS
--------------------------------------------------------------`));

    return gulp.src(`./${dir.paths.distStyles}/*.css`)
      .pipe($.sourcemaps.init())
      .pipe($.cleanCss({debug: true}, details => {
        $.util.log($.util.colors.red.bold(`ORIGINAL - ${details.name} : ${details.stats.originalSize}`));
        $.util.log($.util.colors.green.bold(`MINIFIED - ${details.name} : ${details.stats.minifiedSize}`));
      }))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(`./${dir.paths.distStyles}`))
      .pipe($.filelog('clean-css'));
  });
};

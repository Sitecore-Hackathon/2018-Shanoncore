export default (gulp, $, { dir }) => {
  gulp.task('svgstore', () => {
    $.util.log($.util.colors.green.bold(`
--------------------------------------------------------------
Combining SVG's
--------------------------------------------------------------`));

    return gulp
      .src(`.${dir.paths.srcImages}/svg-sprites/**/*.svg`)
      .pipe($.svgstore())
      .pipe($.rename('svgsheet.svg'))
      .pipe(gulp.dest(`.${dir.paths.srcImages}`));
  });
};

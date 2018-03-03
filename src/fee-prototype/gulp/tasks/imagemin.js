export default (gulp, $, { dir }) => {
  gulp.task('imagemin', ['svgstore', 'spritesmith'], () => {
    $.util.log($.util.colors.green.bold(`
--------------------------------------------------------------
Minifying images
--------------------------------------------------------------`));

    return gulp.src([`./${dir.paths.srcImages}/**/*.*`, `!./${dir.paths.srcImages}/sprites/**/*.*`, `!./${dir.paths.srcImages}/svg-sprites/**/*.svg`])
      .pipe($.imagemin([
        $.imagemin.gifsicle({interlaced: true}),
        $.imagemin.jpegtran({progressive: true}),
        $.imagemin.optipng({optimizationLevel: 5}),
        $.imagemin.svgo({plugins: [{removeViewBox: true}]})
      ], {
          verbose: true
        }))
      .pipe(gulp.dest(`./${dir.paths.distImages}`));
  });
}

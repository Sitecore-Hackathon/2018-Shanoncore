const { NODE_ENV } = process.env;

export default (gulp, $, { dir }) => {
  // Global copy
  gulp.task('copy', () => {
    $.util.log($.util.colors.green.bold(`
--------------------------------------------------------------
Copying global files
--------------------------------------------------------------`));

    const mergeStream = require('merge-stream');
    const outFonts = NODE_ENV === 'production' ? `./${dir.paths.distFonts}` : `./${dir.paths.devFonts}`;

    let fonts, images;

    //fonts
    fonts = gulp.src(`./${dir.paths.srcFonts}/**/*.*`)
      .pipe(gulp.dest(outFonts))
      .pipe($.filelog('copy:fonts'));

    if (NODE_ENV !== 'production') {
      //images
      images = gulp.src([
        `./${dir.paths.srcImages}/**/*.*`,
        `!./${dir.paths.srcImages}/sprites/**/*.*`,
        `!./${dir.paths.srcImages}/svg-sprites/**/*.svg`
      ])
        .pipe(gulp.dest(`./${dir.paths.devImages}/`))
        .pipe($.filelog('copy:images'));

      return mergeStream(fonts, images);
    }

    return mergeStream(fonts);
  });
};

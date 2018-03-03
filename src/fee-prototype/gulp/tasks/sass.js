const { NODE_ENV } = process.env;

export default (gulp, $, { dir }) => {
  gulp.task('sass', () => {
    $.util.log($.util.colors.green.bold(`
--------------------------------------------------------------
Compiling SCSS, Globbing and Auto-prefixing
--------------------------------------------------------------`));

    const outPath = NODE_ENV !== 'production' ?
      gulp.dest(`./${dir.paths.devStyles}`) :
      gulp.dest(`./${dir.paths.distStyles}`);

    const files = [`./${dir.paths.srcStyles}/*.scss`];

    if(NODE_ENV === 'production'){
      files.push(`!./${dir.paths.srcStyles}/template.scss`)
    }

    return gulp.src(files)
      .pipe($.sassGlob({
        ignorePaths: [
          `./${dir.paths.srcStyles}/core/*.scss`
        ]
      }))
      .pipe($.sass({
        sourceComments: true
      }).on('error', $.sass.logError))
      .pipe($.autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(outPath)
      .pipe($.filelog('sass'))
      .pipe($.if(NODE_ENV !== 'production', $.browserSync.stream()));
  });
};

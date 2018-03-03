export default (gulp, $, { dir }) => {
  gulp.task('spritesmith', () => {
    $.util.log($.util.colors.green.bold(`
--------------------------------------------------------------
Creating sprite sheet image and SCSS file
--------------------------------------------------------------`));

    const spriteData = gulp.src(`./${dir.paths.srcImages}/sprites/**/*.png`)
      .pipe($.spritesmith({
        imgName: 'spritesheet.png',
        imgPath: `/${dir.assets.images}/spritesheet.png`,
        cssName: '_spritesheet.scss'
      }));

    return spriteData
      .pipe($.if('*.png', gulp.dest(`./${dir.paths.srcImages}/`)))
      .pipe($.if('*.scss', gulp.dest(`./${dir.paths.srcStyles}/core/`)))
      .pipe($.filelog('spritesmith'));
  });
}

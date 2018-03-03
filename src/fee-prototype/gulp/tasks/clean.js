const { NODE_ENV } = process.env;

export default (gulp, $, { dir }) => {
  gulp.task('clean', () => {
    let files = ['**/.DS_Store'];

    if(NODE_ENV === 'production'){
      files = [
        ...files,
        `./${dir.production}/**`,
        `./${dir.documentation}/**`,
      ]
    }else{
      files = [
        ...files,
        `./${dir.development}/**`
      ]
    }

    return $.del(files).then(paths => {
      $.util.log($.util.colors.green.bold(`
--------------------------------------------------------------
${paths.length > 0 ? 'Deleted files and folders:' : 'Nothing to delete'}
--------------------------------------------------------------`));

      $.util.log($.util.colors.red.bold(paths.join('\n')));
    });
  });
};

import fs from 'fs';

const { NODE_ENV } = process.env;

export default (gulp, $, { dir }) => {
  gulp.task('template', () => {
    $.util.log($.util.colors.green.bold(`
--------------------------------------------------------------
Templating
--------------------------------------------------------------`));

    const config = require('../../package.json');
    const _sortBy = require('lodash/sortBy');

    const readTemplates = () => {
      const files = [];

      return new Promise((resolve, reject) => {
        fs.readdir(`./${dir.paths.srcTemplates}/`, (err, templates) => {
          if (err) reject(err);

          for (let i = 0; i < templates.length; i++) {
            const fileName = templates[i];

            let cleanFile = '';

            if(!/^(.*\.(?!(html)$))?[^.]*$/i.test(fileName)){
              cleanFile = fileName.replace(/(.*)\.(.*?)$/, '$1');
            }else {
              reject($.util.colors.red.bold('TEMPLATE ERROR - Make sure all files in the templates directory are .html files'));
            }

            files.push(cleanFile);

            if (i === templates.length - 1){
              resolve(_sortBy(files));
            }
          }
        });
      });
    };

    return gulp.src(`./${dir.source}/index.html`)
      .pipe($.data((file, cb) => {
        readTemplates().then(data => {
          return cb(undefined, {
            version: config.version,
            data
          });
        })
        .catch(err => {
          throw new Error($.util.colors.red.bold(`There was an issue creating the template - ${err}`));
        });
      }))
      .pipe($.template())
      .pipe(gulp.dest(`./${dir.development}`))
      .pipe($.if(NODE_ENV !== 'production', $.browserSync.stream()));
  });
};

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from './config';

// Load all gulp plugins
const $ = gulpLoadPlugins({pattern: ['gulp-*', 'gulp.*', 'del', 'browser-sync', 'run-sequence'], scope: ['devDependencies']});
const { NODE_ENV } = process.env;

// Register gulp tasks
require('./gulp/bootstrap').default(gulp, [
  'clean',
  'sass',
  'clean-css',
  'scss-lint',
  'svgstore',
  'imagemin',
  'spritesmith',
  'file-include',
  'template',
  'copy',
  'server',
  'watch'
], $, config);


// Default task
gulp.task('default', cb => {
  const notifier = require('node-notifier');

  if(NODE_ENV === 'production'){
    $.runSequence('clean', 'scss-lint', 'sass', 'imagemin', 'file-include', ['copy', 'clean-css'], () => {
      $.util.log($.util.colors.green.bold('FINISHED GULP PRODUCTION BUILD'));

      notifier.notify({
        title: 'Gulp',
        message: 'Production build complete, compiling javascript...'
      });

      cb();
    });

    return;
  }

  $.runSequence('clean', 'scss-lint', 'sass', 'svgstore', 'spritesmith', ['copy', 'file-include'], 'template', 'server', () => {
    $.util.log($.util.colors.green.bold('FINISHED GULP DEV BUILD'));

    const minimist = require('minimist');
    const argv = minimist(process.argv.slice(2));

    notifier.notify({
      title: 'Gulp',
      message: 'Development build complete, launching server...'
    });

    if(argv.w){
      $.runSequence('watch');
    }

    cb();
  });
});

export default (gulp, $, { dir, server, hmr }) => {
  gulp.task('server', cb => {
    $.util.log($.util.colors.green.bold(`
--------------------------------------------------------------
Running dev server
--------------------------------------------------------------`));

    const webpack = require('webpack');
    const webpackConfig = require('../../webpack.config.babel')();
    const webpackDevMiddleware  = require('webpack-dev-middleware');
    const url = require('url');
    const proxy = require('proxy-middleware');
    const bundler = webpack(webpackConfig);
    const proxyUrl = server.proxy.url;
    const proxyRoute = server.proxy.route;

    //set up proxy
    let proxyOptions = null;

    if(proxyUrl !== ''){
      proxyOptions = url.parse(server.proxy.url);

      if(proxyRoute !== '') proxyOptions.route = server.proxy.route;
    }

    //set up middleware
    const middleware = [
      webpackDevMiddleware(bundler, webpackConfig.devServer)
    ];

    if(proxyOptions !== null){
      middleware.push(proxy(proxyOptions));
    }

    if(hmr){
      const webpackHotMiddleware = require('webpack-hot-middleware');

      middleware.push(webpackHotMiddleware(bundler));
    }

    //browser configuration
    const browserConfig = {
      notify: false,
      logLevel: 'none',
      server: {
        baseDir: `./${dir.development}`,
        middleware
      }
    };

    if(!hmr){
      browserConfig.reloadDelay = 1000;
    }

    return $.browserSync.init(browserConfig, cb);
  })
};

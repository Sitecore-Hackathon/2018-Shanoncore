import { resolve } from 'path';
import config from './config';
import { entry, output, plugins, rules } from './webpack';

const { publicPath } = config.server;

module.exports = (env = {}) => {
  return {
    devtool: env.production ? 'source-map' : 'cheap-module-eval-source-map',
    entry: entry(env),
    output: output(env),
    plugins: plugins(env),
    module: {
      rules: rules(env)
    },
    resolve: {
      extensions: ['.js', '.html']
    },
    devServer: {
      publicPath: `/${publicPath}/`,
      inline: config.hmr,
      stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }
    }
  }
};

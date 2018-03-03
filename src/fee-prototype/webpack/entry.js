import config from '../config';

export default ({ production }) => {
  const entry = ['babel-polyfill', `./${config.dir.paths.srcJS}/main.js`];

  if (config.hmr && !production) {
    entry.unshift('webpack-hot-middleware/client?noInfo=false&reload=true');
  }

  return entry;
}

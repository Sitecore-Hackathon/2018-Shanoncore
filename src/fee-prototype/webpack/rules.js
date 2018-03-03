import { resolve } from 'path';
import config from '../config';

export default ({ production }) => {
  const { paths } = config.dir;

  return [
    {
      test: /\.js$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve(__dirname, `../${paths.srcJS}`)],
      options: {
        formatter(data) {
          return `--------------------------------------------------------------
ESLINT
${data.length} File(s) have linter errors. Please review Log. 
--------------------------------------------------------------`;
        },
        emitWarning: !production,
        outputReport: {
          filePath: 'lint-errors.html',
          formatter: require('eslint/lib/formatters/html')
        }
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve(__dirname, `../${paths.srcJS}`)]
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    }
  ];
}

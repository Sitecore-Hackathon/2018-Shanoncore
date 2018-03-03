import heatmap from 'heatmap.js';

console.log(heatmap);

//Hot module replacement
if (__DEV__){
  const config = require('../../config');

  if (config.hmr && module.hot) module.hot.accept();
}

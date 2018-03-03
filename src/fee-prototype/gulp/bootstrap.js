export default (gulp, tasks, $, config) => {
  tasks.forEach(name => {
    require('./tasks/' + name).default(gulp, $, config);
  });
};

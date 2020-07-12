const proxy = [{
  context: '/api',
  target: 'https://analyzing-technologies.herokuapp.com',
  secure: false,
  pathRewrite: {
    '^/api': ''
  },
}, ];
module.exports = proxy;

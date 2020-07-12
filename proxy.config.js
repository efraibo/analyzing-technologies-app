const proxy = [{
  context: '/api',
  target: 'https://analyzing-technologies.herokuapp.com',
  secure: true,
  // pathRewrite: {
  //   '^/api': ''
  // },
}, ];
module.exports = proxy;

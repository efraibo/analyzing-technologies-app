const proxy = [{
  context: '/api',
  target: 'https://analyzing-technologies.herokuapp.com',
  secure: true,
  //configuracao abaixo remove a api da URL
  pathRewrite: {
    '^-app': ''
  },
}, ];
module.exports = proxy;

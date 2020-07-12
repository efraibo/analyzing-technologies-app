const proxy = [{
  context: '/api',
  target: 'https://localhost:8080',
  secure: true,
  //configuracao abaixo remove a api da URL
  // pathRewrite: {
  //   '^-app': ''
  // },
}, ];
module.exports = proxy;

const proxy = [
  {
    context: "/api/v1",
    target: "https://analyzing-technologies.herokuapp.com",
    pathRewrite: { "^/api/v1": "" },
  },
];
module.exports = proxy;

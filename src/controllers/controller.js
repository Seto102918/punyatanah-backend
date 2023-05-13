exports.helloWorld = (req, res, next) => {
  res.send("<h1>Hello World!</h1>");
};

exports.test = (req, res, next) => {
  res.send("<h4>halo</h4>");
};

exports.myMiddleware = (req, res, next) => {
  req.name = 'Ryan';
  if (req.name === 'Ryan') {
    throw Error('That\'s a weird name, huh?');
  }
  next();
};

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};

module.exports = (req, res, next) => {
  res.prettyJson = (result) => {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(result, null, '    '));
  };

  next();
};

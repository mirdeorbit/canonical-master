exports.notFound = (req, res) => {
  res.json({ message: 'Запрашиваемый ресурс не найден' });
};

exports.common = (err, req, res, next) => {
  console.log('We have handled error: ', err);
  res.json({ message: err.message });
  next();
};

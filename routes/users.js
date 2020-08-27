const users = require('../data/users');

module.exports = (router) => {
  router.get('/users', (req, res) => {
    res.prettyJson(users);
  });

  router.get('/users/:id', (req, res) => {
    const user = users.find((usersItem) => usersItem._id === req.params.id);

    if (!user) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });

      return;
    }

    res.prettyJson(user);
  });
};

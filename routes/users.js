const path = require('path');
const fileHelpers = require('../helpers/files');

module.exports = (router) => {
  router.get('/users', async (req, res, next) => {
    try {
      await fileHelpers.pipeFile(path.resolve(__dirname, '../data/users.json'), res);
    } catch (err) {
      next(err);
    }
  });

  router.get('/users/:id', async (req, res, next) => {
    try {
      const users = await fileHelpers.readJson(path.resolve(__dirname, '../data/users.json'));
      const user = users.find((usersItem) => usersItem._id === req.params.id);

      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });

        return;
      }

      res.prettyJson(user);
    } catch (err) {
      next(err);
    }
  });
};

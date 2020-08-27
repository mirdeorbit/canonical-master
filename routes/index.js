const router = require('express').Router();

const routes = ['cards', 'users'];

routes.forEach((routeName) => {
  // eslint-disable-next-line
  require(`./${routeName}`)(router);
});

module.exports = router;

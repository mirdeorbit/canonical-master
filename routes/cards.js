const cards = require('../data/cards');

module.exports = (router) => {
  router.get('/cards', (req, res) => {
    res.prettyJson(cards);
  });
};

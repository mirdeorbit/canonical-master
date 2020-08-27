const path = require('path');
const fileHelpers = require('../helpers/files');

module.exports = (router) => {
  router.get('/cards', async (req, res, next) => {
    try {
      await fileHelpers.pipeFile(path.resolve(__dirname, '../data/cards.json'), res);
    } catch (err) {
      next(err);
    }
  });
};

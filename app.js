const express = require('express');
const path = require('path');

const routes = require('./routes');

const errorHandler = require('./middleware/errorHandler');
const prettyJson = require('./middleware/prettyJson');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(prettyJson);

app.use('/', routes);

app.use(errorHandler.notFound);

app.use(errorHandler.common);

app.listen(3000, () => {
  console.log('Application listen on port 3000');
});

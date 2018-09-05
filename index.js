const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const port = process.env.PORT || 5000;
const log = require('./utils/logger');

app.set('port', port);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const products = require('./routes/products');

app.use('/products', products);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err);
});

app.listen(port, () => log.sys('Listening on port ' + port));

module.exports = app;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
// Logging

// Environment-specific config

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const products = require('./routes/products');

// Logging
app.use('/products', products);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;

// Versioning, Build, and Release processes
// Testing, Coverage, Linting, Nodemon scripts

const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/products';
const log = require('../utils/logger');

const MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', (err) => log.error('Mongo Connection Error: ' + err));

MongoDB.once('open', () => log.info('Connected to Mongo'));

module.exports = MongoDB;

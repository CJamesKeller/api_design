const mongoose = require('mongoose');

const Product = mongoose.Schema({
  current_price: {
    value: mongoose.Schema.Types.Decimal128,
    currency_code: mongoose.Schema.Types.String
  }
});

module.exports = {
  Products: mongoose.model('Products', Product)
};

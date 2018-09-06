const mongoose = require('mongoose');

const Product = mongoose.Schema({
  current_price: {
    value: {
      type: mongoose.Schema.Types.Decimal128,
      required: true
    },
    currency_code: {
      type: mongoose.Schema.Types.String,
      required: true
    }
  }
});

const Products = mongoose.model('Products', Product);

module.exports = { Products };

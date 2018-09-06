const dataService = require('../services/data.service');
const { Products } = require('../store/Products');
const log = require('../utils/logger');

module.exports = {
  async getProduct (req, res) {
    const { id } = req.params;

    const stored = await Products.findById(id, (err, product) => {
      if (err) {
        log.error(err);
        return res.status(500).json('Error fetching product data from database');
      }

      return product;
    });

    try {
      let product = await dataService.fetchProduct(id);
      product = Object.assign(product, stored);
      return res.json(product);
    } catch (err) {
      return res.status(err.status || 500).json(err.message || 'Error fetching product information');
    }
  },

  async updateProduct (req, res) {
    const { id } = req.params;
    const { value, currencyMode } = req.body;

    try {
      await Products.updateOne(id, { $set: { current_price: { value: value, currencyMode: currencyMode } } }, null, (err, product) => {
        if (err) {
          log.error(err);
          return res.status(500).json('Error fetching product data from database');
        }

        return false;
      });
      return res.status(204);
    } catch (err) {
      return res.status(err.status || 500).json(err.message || 'Error updating product data');
    }
  }
};

const dataService = require('../services/data.service');
const Products = require('../store/Products');
const log = require('../utils/logger');

module.exports = {
  async getProduct (req, res) {
    const { id } = req.params;

    const stored = Products.findById(id, (err, product) => {
      if (err) {
        log.error(err);
        res.sendStatus(500);
      }

      return product;
    });

    try {
      let product = dataService.fetchProduct(id);
      product = Object.assign(product, stored); // confirm
      res.json(product);
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  },

  async updateProduct (req, res) {
    const { id } = req.params;

    const newProduct = new Products();

    newProduct.save((err) => {
      log.error(err);
      res.sendStatus(500);
    });

    try {
      dataService.updateProduct(id);
      res.status(204);
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  }
};

const dataService = require('../services/data.service');

module.exports = {
  async getProduct (req, res) {
    const { id } = req.params;

    try {
      const product = dataService.fetchProduct(id);
      res.json(product);
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  },

  async updateProduct (req, res) {
    const { id } = req.params;

    try {
      dataService.updateProduct(id);
      res.status(204);
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  }
};

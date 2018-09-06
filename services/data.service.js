const log = require('../utils/logger');
const http = require('xhr');
const productApi = require('../.config.json').PRODUCT_API;

module.exports = {
  async fetchProduct (id) {
    log.info('getting product', id);

    try {
      const result = await http(`${productApi}${id}`);
      return result.body;
    } catch (err) {
      log.error('Error fetching product information with ID: ', id);
      log.error('Status: ', err.status);
      log.error('Message: ', err.message);
      throw err;
    }
  }
};

const log = require('../utils/logger');

module.exports = {
  async fetchProduct (id) {
    // do stuff
    log.info('getting product', id);
  },

  async updateProduct (id) {
    // do stuff
    log.info('updating product', id);
  }
};

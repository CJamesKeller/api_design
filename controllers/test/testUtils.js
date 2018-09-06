const sinon = require('sinon');

module.exports = {
  mockRequest: {
    params: {
      id: 'mock-product-id'
    }
  },
  mockResponse: {
    send: sinon.spy(),
    sendStatus: sinon.spy(),
    status: () => { }
  }
};

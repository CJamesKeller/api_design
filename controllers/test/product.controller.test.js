const test = require('tape');
const productController = require('../product.controller');
const sinon = require('sinon');
const dataService = require('../../services/data.service');
const { mockRequest, mockResponse } = require('./testUtils');
const { Products } = require('../Products');

test('getProduct() uses dataService to get product information', async t => {
  const req = mockRequest();
  const res = mockResponse();
  const mockProduct = {};

  sinon.stub(dataService, 'getProduct').callsFake(() => {
    return Promise.resolve(mockProduct);
  });

  await productController.getProduct(req, res);

  t.ok(dataService.getProduct.calledOnce, 'Calls dataService.getProduct()');

  const actualOpts = dataService.getProduct.getCall(0).args[0];
  const expectedOpts = {};

  t.deepEquals(actualOpts, expectedOpts, 'Calls dataService with the correct parameters');
  t.ok(res.send.calledWith(mockProduct), 'Returns the fetched product');
  t.end();

  dataService.getProduct.restore();
});

test('getProduct() gets decorating data from the database', async t => {
  const req = mockRequest();
  const res = mockResponse();
  const expectedProducts = [{}];

  sinon.stub(Products, 'find').callsFake(() => {
    return Promise.resolve(null, expectedProducts);
  });

  await productController.getProduct(req, res);

  t.ok(res.send.calledWith(expectedProducts), 'Returns the product data');

  Products.find.restore();
});

test('getProduct() returns 500 on internal server error', async t => {
  const req = mockRequest();
  const res = mockResponse();
  const mockJson = sinon.spy();
  const mockStatus = sinon.stub().returns({ json: mockJson });
  const expectedMsg = 'Error fetching product information';

  sinon.stub(dataService, 'getProduct').callsFake(() => {
    return Promise.reject(new Error(expectedMsg));
  });
  sinon.stub(res, 'status').callsFake(mockStatus);

  await productController.getProduct(req, res);

  t.ok(res.status.calledWith(500), 'Returns 500');

  t.equal(mockJson.getCall(0).args[0].message, expectedMsg, 'Returns correct error message');
  t.end();

  dataService.getProduct.restore();
});

test('updateProduct() updates product data in the database', async t => {
  const req = mockRequest();
  const res = mockResponse();
  const mockJson = sinon.spy();
  const mockStatus = sinon.stub().returns({ json: mockJson });

  sinon.stub(dataService, 'updateProduct').callsFake(() => {
    return Promise.resolve();
  });
  sinon.stub(res, 'status').callsFake(mockStatus);

  await productController.updateProduct(req, res);

  t.ok(res.status.calledWith(204), 'Returns 204');
  t.end();

  dataService.updateProduct.restore();
});

test('updateProduct() returns 500 on internal server error', async t => {
  const req = mockRequest();
  const res = mockResponse();
  const mockJson = sinon.spy();
  const mockStatus = sinon.stub().returns({ json: mockJson });
  const expectedMsg = 'Error updating product information';

  sinon.stub(dataService, 'updateProduct').callsFake(() => {
    return Promise.reject(new Error(expectedMsg));
  });
  sinon.stub(res, 'status').callsFake(mockStatus);

  await productController.updateProduct(req, res);

  t.ok(res.status.calledWith(500), 'Returns 500');

  t.equal(mockJson.getCall(0).args[0].message, expectedMsg, 'Returns correct error message');
  t.end();

  dataService.updateProduct.restore();
});

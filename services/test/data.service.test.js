const test = require('tape');
const sinon = require('sinon');
const dataService = require('../demon.service');

test('it proxies the response from the client', async t => {
  const fetchProduct = sinon.stub();
  sinon.stub(dataService, 'fetchProduct').callsFake(fetchProduct);
  fetchProduct.returns(Promise.resolve({ body: 'foo' }));

  const opts = {};

  const response = await dataService.fetchProduct(opts);

  const expectedOpts = {};
  const actualOpts = fetchProduct.getCall(0).args[0];

  t.deepEquals(actualOpts, expectedOpts, 'passes the correct parameters to the client');
  t.equal(response, 'foo', 'returns the client response body');
  t.end();

  dataService.fetchProduct.restore();
  fetchProduct.reset();
});

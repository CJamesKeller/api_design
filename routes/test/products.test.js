const {
  test,
  request,
  app
} = require('./testUtils');

const id = '123';

test('GET to /products/:id returns the decorated product data', t => {
  request(app)
    .get(`/products/${id}`)
    .expect(200)
    .end((err, res) => {
      const expected = {};
      t.error(err, 'No error');
      t.equal(res.status, 200, 'Returns 200');
      t.equal(res.body, expected, 'Returns expected product data');
      t.end();
    });
});

test('GET to /products/:id returns 404 when product data is not found', t => {
  request(app)
    .get(`/products/badID`)
    .expect(404)
    .end((err, res) => {
      const expected = 'No product data found for ID';
      t.error(err, 'No error');
      t.equal(res.status, 404, 'Returns 404');
      t.equal(res.body.message, expected, 'Returns expected error message');
      t.end();
    });
});

test('PUT to /products/:id returns 204', t => {
  request(app)
    .put(`/products/${id}`)
    .send({})
    .expect(204)
    .end((err, res) => {
      t.error(err, 'No error');
      t.equal(res.status, 204, 'Returns 204');
      t.end();
    });
});

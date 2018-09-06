const test = require('tape');
const { Products } = require('../Products');

test('Products should be invalid if missing properties', t => {
  const P = new Products();
  P.validate(err => {
    t.ok(err.errors.name, 'Errors when missing properties');
    t.end();
  });
});

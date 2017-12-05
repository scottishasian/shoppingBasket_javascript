const Item = require('../item.js');
const assert = require('assert');

describe('Item', function() {
  let item;

  beforeEach('Item', function() {
    item = new Item("Smoked Tea", 2.10, true);
  });

  it("Should have a name", function() {
    assert.strictEqual(item.name, "Smoked Tea");
  });

  it("Should have price", function () {
    assert.strictEqual(item.price, 2.10);
  });

  it("Should have has deal", function () {
    assert.strictEqual(item.hasDeal, true);
  });


});

const Basket = require('../basket.js');
const Item = require('../item.js');
const assert = require('assert');

describe('Basket', function() {
  let basket;
  let smokedTea;
  let mintTea;

  beforeEach('Basket', function() {
    basket = new Basket();
    smokedTea =  new Item("Smoked Tea", 2.10, true);
    mintTea =  new Item("Mint Tea", 2.50, false);
  });

  it("Should be empty", function() {
    assert.strictEqual(basket.load.length, 0);
  });

  it("Should have one item", function(){
    basket.addItem(smokedTea);
    assert.strictEqual(basket.load.length, 1);
  });

  it("Should have multiple items", function() {
    basket.addItem(smokedTea);
    basket.addItem(mintTea);
    assert.strictEqual(basket.load.length, 2);
  });

  it("Can remove 1 item", function() {
    basket.addItem(smokedTea);
    basket.addItem(mintTea);
    assert.strictEqual(basket.load.length, 2);
    basket.removeItem(mintTea);
    assert.strictEqual(basket.load.length, 1);

  });

});

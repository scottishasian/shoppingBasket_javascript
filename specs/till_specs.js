const Basket = require('../basket.js');
const Item = require('../item.js');
const Till = require('../till.js');
const assert = require('assert');

describe('Till', function() {
  let basket;
  let smokedTea;
  let mintTea;
  let till;

  beforeEach('Till', function() {
    till = new Till();
    basket = new Basket();
    smokedTea =  new Item("Smoked Tea", 12.10, true);
    mintTea =  new Item("Mint Tea", 21.50, false);
  });

  it("Should get basket total", function () {
    basket.addItem(smokedTea);
    basket.addItem(mintTea);
    assert.strictEqual(basket.load.length, 2);
    assert.strictEqual(till.totalCost(basket), 33.60);
  });

});

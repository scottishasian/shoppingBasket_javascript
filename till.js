const Basket = require('./basket.js');
const Item = require('./item.js');

const Till =  function() {
  this.total = 0


}

Till.prototype.totalCost = function(basket) {
  var cost = 0;
  for(var items of basket){
    cost += items.price;
  }
  this.total += cost;
  return this.total;
};

module.exports = Till;

const Basket =  function() {
  this.load = [];

}

Basket.prototype.addItem = function(item) {
  this.load.push(item);
};

Basket.prototype.removeItem = function(item) {
  for(var tea of this.load){
    if(tea === item){
      this.load.splice(this.load.indexOf(tea))
    }
  }
};

module.exports = Basket;

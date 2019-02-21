var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use an object with numeric keys to store values
  this.storage = {};
  // debugger;
  // Implement the methods below
  
};

Stack.prototype.push = function(value) {
  this.storage[this.size() + 1] = value;
};

Stack.prototype.pop = function() {
  var temp = this.storage[this.size()];
  delete this.storage[this.size()];
  return temp;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};



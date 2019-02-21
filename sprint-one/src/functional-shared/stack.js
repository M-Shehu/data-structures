var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {storage : {}};

  // Use an object with numeric keys to store values
  $.extend(someInstance, stackMethods);
  return someInstance;
  // debugger;
  // Implement the methods below
};

var stackMethods = {
  push : function(value) {
    this.storage[this.size() + 1] = value;
  },

  pop : function() {
    var temp = this.storage[this.size()];
    delete this.storage[this.size()];
    return temp;
  },

  size : function() {
    return Object.keys(this.storage).length;
  }
};



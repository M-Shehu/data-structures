var Queue = function() {
  var someInstance = {counter: 0,
                      storage : {}};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  someInstance.storage = storage;
  // Implement the methods below
  $.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[++this.counter] = value;
  },
  dequeue : function() {
    var temp = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return temp;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};



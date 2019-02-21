var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.var someInstance = Object.create(stackMethods);
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[++this.counter] = value;
};

queueMethods.dequeue = function() {
  var temp = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return temp;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

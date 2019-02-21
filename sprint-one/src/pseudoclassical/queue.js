var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
  // debugger;
  // Implement the methods below
  
};


Queue.prototype.enqueue = function(value) {
  this.storage[++this.counter] = value;
};
Queue.prototype.dequeue = function() {
  var temp = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return temp;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

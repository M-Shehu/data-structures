class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  enqueue (value) {
    this.storage[++this.counter] = value;
  };
  dequeue() {
    var temp = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return temp;
  };
  size() {
    return Object.keys(this.storage).length;
  };

}
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[++counter] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    console.log(Object.keys(storage));
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

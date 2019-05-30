var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item; // if a value alreay exists, the property within storage is overwritten with the same value
};

setPrototype.contains = function(item) {
  return !!this._storage[item]; // coerce the existence of the property into a boolean
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
    All methods are O(1) time complexity because its property lookup on an object in all cases
 */

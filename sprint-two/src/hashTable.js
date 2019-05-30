

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // this is an object
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // get index for hash table
  // create a tuple for k and v 
  var pair = [k, v];
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, []); // creates a container at each index of the hash table to store tuples
    this._storage.get(index).push(pair); // check to see if value pair is pushed into storage
  } else {
    var tupleContainer = this._storage.get(index); // this variable points to the array in storage (which is in a specific memory location so we can access it after  the function returns)
    for (var i = 0; i < tupleContainer.length; i++) {
      if (tupleContainer[i][0] === k) {
        tupleContainer[i][1] = v;
      } else {
        tupleContainer.push(pair);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleContainer = this._storage.get(index); // this is an array
  for (var i = 0; i < tupleContainer.length; i++) {
    if (tupleContainer[i][0] === k) {
      return tupleContainer[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleContainer = this._storage.get(index);
  for (var i = 0; i < tupleContainer.length; i++) {
    if (tupleContainer[i][0] === k) {
      var pair = tupleContainer[i];
      pair.pop(); // remove value
    }
  } 
};



/*
 * Complexity: What is the time complexity of the above functions?
  Assuming hash table resizes, all functions are O(1) on average
  because we have constant lookup of the hash table keys and the
  length of the array at the keys are << the length of the hash table array
 */



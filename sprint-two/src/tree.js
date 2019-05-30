var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  // base case
  if (this.value === target) { 
    return true;
  }
  // recursive case
  if (this.children.length > 0) {
    var children = this.children;
    for (var i = 0; i < children.length; i++) {
      var node = children[i];
      if (node.contains(target)) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
  newTree.addChild - O(1) because adding an element to an array is constant time (if you know length property)
  newTree.contains - O(N) because the recursive check will go through the entire tree in the worst case
 */

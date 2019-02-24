var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype.insert = function(node) {
  var compare = node > this.value;
  if (compare) {
    if (this.right === null) {
      this.right = BinarySearchTree(node);
    } else {
      this.right.insert(node); // recursively searching down tree to properly insert node;
    } 
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(node);
    } else {
      this.left.insert(node);
    }
  }
};

BinarySearchTree.prototype.contains = function(node) {
  var compare = node > this.value;
  if (node === this.value) {
    return true;
  }
  if (compare) {
    return this.right === null ? false : this.right.contains(node);
  } else {
    return this.left === null ? false : this.left.contains(node);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?

  BinarySearchTree.prototype.insert function - time complexity of O(log(n)) because it traverses half of a tree's children at each tree
  BinarySearchTree.prototype.contains function - time complexity of O(log(n)) because it searchs half of a tree's children at each tree
  BinarySearchTree.prototype.depthFirstLog function - time completxity of O(n) because it goes through all the nodes in the binary tree
 */

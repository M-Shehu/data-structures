var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // list.counter = 0; // not needed but for debugging purposes

  list.addToTail = function(value) {
    if (this.head === null) {
      var newNode = new Node(value);
      this.head = newNode;
      // this[this.counter] = newNode; 
      this.tail = newNode; // for first node in list
      // this.counter++;
    } else {
      var newNode = new Node(value);
      var currentTail = this.tail;
      currentTail.next = newNode;
      this.tail = newNode;
      // this[this.counter] = newNode; // add node to list
      // this.counter++; 
    }
  };

  list.removeHead = function() {
    var formerHead = this.head;
    var nextHead = this.head.next; // evaluates to null if linked list only has one value
    this.head = nextHead;
    return formerHead.value;

  };

  list.contains = function(target, node) {
    node = node || this.head;
    if (node.value === target) {
      return true;
    }
    if (node.next === null) {
      return false;
    }
    return this.contains(target, node.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  list.addToTail - O(1) : because we have pointers to head and tail  
  list.removeHead - O(1) : because we have a pointer to head and don't need to shift other values
  list.contains - O(n): because you need to check every node
 */

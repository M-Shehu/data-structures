var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.counter = 0;

  list.addToTail = (function() {
    var hasHead = false;
    return function(value) {
      if (!hasHead) {
        hasHead = true;
        var newNode = new Node(value);
        list.head = newNode;
        list[counter] = newNode;
        list.tail = newNode; // for first node in list
        list.counter++;
      } else {
        var newNode = new Node(value);
        var currentTail = list.tail;
        currentTail.next = counter;
        list.tail = newNode;
        list[counter] = newNode; // add node to list
        list.counter++;
      }
    };
  })();

  list.removeHead = function() {
  };

  list.contains = function(target) {
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
 */

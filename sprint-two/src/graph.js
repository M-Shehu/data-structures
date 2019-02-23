// Instantiate a new graph
var Graph = function() {
  // no properties needed since using pseudoclassical instantiation
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new GraphNode(node);
  this[newNode.data] = newNode; // using data value as the key
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (this[key].data === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var temp;
  for (var key in this) {
    if (this[key].data === node) {
      nodeData = this[key].data;
      nodeEdges = this[key].edges;
      for (var edge in nodeEdges) {
        var nodePair = this[edge];
        delete nodePair.edges[node];
      }
      delete this[key];
      return nodeData;
    }
  }
  return null; // If node doesnt exist, null is returned 
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeEdges = this[fromNode].edges;
  for (var key in fromNodeEdges) {
    if (fromNodeEdges[key] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges[toNode] = toNode; // using node as key and value
  this[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode].edges[toNode];
  delete this[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      cb(this[key].data);
    }
  }
};

// creating a node function to build nodes for the graph
// adds GraphNode to the global namespace - risk of collision
var GraphNode = function(data) {
  this.data = data;
  this.edges = {};
};

/*
 * Complexity: What is the time complexity of the above functions?
  Graph.prototype.addNode - O(1) : adds an item to an object
  Graph.prototype.contains - O(N) : searches whole graph object
  Graph.prototype.removeNode - O(N^2) : need to remove node and reference to node in all nodes that have it as an edge
  Graph.prototype.hasEdge - O(N) : loops through edges object
  Graph.prototype.addEdge - O(1)
  Graph.prototype.removeEdge - O(1)
  Graph.prototype.forEachNoce - O(N) : loops through all nodes
 */


